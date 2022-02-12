package packTodo;

import java.io.*;
import java.util.*;
import java.util.Comparator;


public class Aplicação {


    public static void main(String[] args) throws IOException {


        Collection<Tarefas> coleção = new ArrayList<Tarefas>();

        Scanner scanner = new Scanner(System.in);
        Scanner scannerNum = new Scanner((System.in));
        int ch;
        do {
            System.out.println("1.INSERIR");
            System.out.println("2.MOSTRAR TAREFAS");
            System.out.println("3.DELETAR");
            System.out.println("4.ATUALIZAR");
            System.out.print("Escolha uma opção, 0 fecha a aplicação: ");
            ch = scannerNum.nextInt();



            switch (ch) {
                case 1:

                    System.out.print("Insira o nome da tarefa: ");
                    String name = scanner.nextLine();
                    name = name.toLowerCase();
                    System.out.print("Insira a descrição da tarefa: ");
                    String descrição = scanner.nextLine();
                    System.out.print("Insira dia para o término da tarefa: ");
                    String dia = scanner.nextLine();
                    System.out.print("Insira a prioridade: ");

                    int prioridade = scannerNum.nextInt();
                    System.out.print("Insira categoria da tarefa: ");
                    String categoria = scanner.nextLine();
                    categoria = categoria.toLowerCase();
                    System.out.print("A tarefa foi concluida? 1 = SIM, 2 = NÃO: ");
                    int Status = scannerNum.nextInt();
                    String StatusPrint = null;
                    if (Status == 1){
                        StatusPrint = ("Concluido ");
                    }
                    if (Status == 2) {
                        StatusPrint = ("Não concluido");
                    }

                    coleção.add(new Tarefas(name,descrição,dia,prioridade,categoria,Status, StatusPrint));
                    BufferedWriter output = null;


                    try {
                        output = new BufferedWriter(new FileWriter(new File("out/production/TodoListProject/output.txt")));
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                    String txt  = String.valueOf(coleção + "\n" );
                    try {
                        output.write(txt);
                    } catch (IOException e) {
                        e.printStackTrace();
                    }

                    output.close();


                    break;


                case 2:
                    System.out.println("----------------");

                    Iterator i = coleção.stream().sorted(Comparator.comparingInt(Tarefas::getPrioridade).reversed()).iterator();
                    while (i.hasNext()){
                        Tarefas e = (Tarefas) i.next();
                        System.out.println(e);

                    }
                    System.out.println("----------------");
                    break;



                case 3:
                    boolean found = false;
                    System.out.println("Selecione uma tarefa para ser deletada pelo seu nome: ");
                    String nome = scanner.nextLine();
                    nome.toLowerCase();
                    System.out.println("----------------");
                    i = coleção.iterator();
                    while (i.hasNext()){
                        Tarefas tarefas = (Tarefas) i.next();
                        if (tarefas.getNome().equals(nome)){
                            i.remove();
                            found = true;
                        }
                    }
                    if (!found) {
                        System.out.println("Tarefa não encontrada");
                    }else {
                        System.out.println("Tarefa deletada");
                    }
                    System.out.println("----------------");

                    break;

                case 4:
                    found = false;
                    System.out.println("Selecione uma tarefa para ser atualizada pelo seu nome: : ");
                    nome = scanner.nextLine();
                    nome = nome.toLowerCase();
                    System.out.println("----------------");
                    ListIterator<Tarefas>li = ((ArrayList<Tarefas>) coleção).listIterator();
                    while (li.hasNext()){
                        Tarefas tarefas = (Tarefas) li.next();
                        if (tarefas.getNome().equals(nome)){
                            System.out.println("Coloque um novo nome: ");
                            nome = scanner.nextLine();
                            System.out.println("Coloque uma nova descrição:  ");
                            descrição = scanner.nextLine();
                            System.out.println("Coloque uma nova data de entrega: ");
                            dia = scanner.nextLine();
                            System.out.println("Coloque uma nova prioridade: ");
                            prioridade = scannerNum.nextInt();
                            System.out.println("Coloque uma nova categoria: ");
                            categoria = scanner.nextLine();
                            System.out.println("Coloque um novo status: ");
                            Status = scanner.nextInt();
                            StatusPrint = null;
                            if (Status == 1){
                                StatusPrint = ("Concluido ");
                            }
                            if (Status == 2) {
                                StatusPrint = ("Não concluido");
                            }

                            li.set(new Tarefas(nome, descrição, dia, prioridade, categoria, Status, StatusPrint));

                            found = true;

                            System.out.println("----------------");
                            break;
                        }
                    }
                    if (!found) {
                        System.out.println("Tarefa não encontrada");
                    }else {
                        System.out.println("Tarefa atualizada com sucesso");
                    }
                    System.out.println("----------------");

                    break;

            }

        }while (ch!=0);



    }
}
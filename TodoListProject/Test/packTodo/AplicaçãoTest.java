package packTodo;

import org.junit.Test;

import java.util.*;

import static org.junit.Assert.assertEquals;

//Lucas Paradizo

public class AplicaçãoTest {


    @Test
    public void main() {
        int ch = 1;
        switch (ch){

            
            case 1:

                //Inserir tarefa
                //given

                Tarefas tarefas;
                Tarefas resultadoEsperado = new Tarefas("Testenome", "Teste desc", "01/12", 1, "Teste", 1, "");

                //when
                tarefas = new Tarefas("Testenome", "Teste desc", "01/12", 1, "Teste", 1, "");
                System.out.println("Criando tarefa 1: \"Testenome\", \"Teste desc\", \"01/12\", 1, \"Teste\", 1, \"\": Criado com sucesso");
                //then
                assertEquals(tarefas.toString(), resultadoEsperado.toString());


                //Listar Tarefa
                //given
                Collection<Tarefas> coleção = new ArrayList<Tarefas>();

                //when
                coleção.add(tarefas);


                //then
                Iterator i = coleção.stream().sorted(Comparator.comparingInt(Tarefas::getPrioridade).reversed()).iterator();
                while (i.hasNext()){
                    Tarefas e = (Tarefas) i.next();
                    System.out.println(e + ":  Listagem feita com sucesso");

                }




            case 2:
                //Atualizar tarefa
                //given
                tarefas = new Tarefas("Testenome", "Teste desc", "01/12", 1, "Teste", 1, "");
                coleção = new ArrayList<Tarefas>();
                coleção.add(tarefas);

                boolean foundatt = false;
                String nomeAtt = "Testenome";
                nomeAtt.toLowerCase();
                ListIterator<Tarefas> li = ((ArrayList<Tarefas>) coleção).listIterator();


                //when

                while (li.hasNext()){
                    tarefas = (Tarefas) li.next();
                    if (tarefas.getNome().equals(nomeAtt)){

                        nomeAtt = "NomeTesteAtualizado";

                        String descrição = "Descrição Atualizada";

                        String dia = "Dia atualizado";

                        int prioridade = 2;

                        String categoria = "Categoria atualizada";

                        int Status = 1;
                        String StatusPrint = null;
                        if (Status == 1){
                            StatusPrint = ("Concluido ");
                        }
                        if (Status == 2) {
                            StatusPrint = ("Não concluido");
                        }

                        li.set(new Tarefas(nomeAtt, descrição, dia, prioridade, categoria, Status, StatusPrint));

                        foundatt = true;


                    }
                //then
                    System.out.println(coleção+ ":   Etapa de atualização concluida");}


            case 3:
                //Deletar tarefa
                //given
                boolean found = false;
                tarefas = new Tarefas("Testenome", "Teste desc", "01/12", 1, "Teste", 1, "");
                coleção = new ArrayList<Tarefas>();
                coleção.add(tarefas);

                i = coleção.iterator();
                String nome = "Testenome";
                nome.toLowerCase();

                //when
                while (i.hasNext()){
                    tarefas = (Tarefas) i.next();
                    if (tarefas.getNome().equals(nome)){
                        i.remove();
                        found = true;
                    }
                }

                //then
                if (!found) {
                    System.out.println("Tarefa não encontrada");
                }else {
                    System.out.println("Tarefa deletada:   Delete feito com sucesso");
                }






    }
}
}
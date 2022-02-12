package packTodo;

public class Tarefas {
    public String nome;
    public String descrição;
    public String dia;
    public int prioridade;
    public  String categoria;
    public int status;
    public String statusPrint;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescrição() {
        return descrição;
    }

    public void setDescrição(String descrição) {
        this.descrição = descrição;
    }

    public String getDia() {
        return dia;
    }

    public void setDia(String dia) {
        this.dia = dia;
    }

    public int getPrioridade() {
        return prioridade;
    }

    public void setPrioridade(int prioridade) {
        this.prioridade = prioridade;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getStatusPrint() {
        return statusPrint;
    }

    public void setStatusPrint(String statusPrint) {
        this.statusPrint = statusPrint;
    }

    public Tarefas(String nome, String descrição, String dia
            , int prioridade, String categoria, int status, String statusPrint){
        this.nome = nome;
        this.descrição = descrição;
        this.dia = dia;
        this.prioridade = prioridade;
        this.categoria = categoria;
        this.status = status;
        this.statusPrint = statusPrint;

    }

    @Override
    public String toString() {
        return
                "Nome da tarefa = " + nome +
                ", Descrição = " + descrição +
                ", Dia para entrega = " + dia +
                ", Prioridade = " + prioridade +
                ", Categoria = " + categoria +
                ", Status = " +  statusPrint ;

    }


}


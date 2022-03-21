# Projeto Introdutorio do Acelera ZG, criação de uma ToDo list, nesse caso foi somente o produto minimo viavel , um CRUD. 
Suponho que alguns erros existam devido ao fato de ser o primeiro projeto em Java.
Esse é somente um arquétipo, sem interface visual, funciona pelo console e guarda informação do Array num arquivo TXT. A criação da interface será feita em próximas etapas. 



# Adicionado teste unitário 
Um teste unitário simples foi adicionado, meio feito de maneira gambiarrada mas funcional.


# Feito o front end  do Todo
Decidi dar uma indentidade visual pro produto, dei um nome e tentei fazer um estilo bem neon moderno. Atualmente o front não se comunica com o back, mas ele ainda sim salva tarefas, remove, atualiza, é separada em 4 categorias  e possui a checkbox para marcação de concluida. O programa ainda não possui persistência, mas usa da local storage para gravar as coisas, sendo assim coloquei um auto clear para que futaramente eu adicione persistência de dados. 


# Algumas adições no front end
Adição de um REGEX que valida tanto a prioridade da tarefa como a data de entrega. 
A data da entrega nunca pode ser inferior a data atual, usei de uma pequena gambiarra para fazer isso funcionar, recomendo dar uma olhada.

### Alguns bugs sábidos porém não corrigidos nesse patch: 
- Quando você edita uma tarefa já existente mas não insere informações a tarefa é deletada.
- Criação de task permite criação de tarefas sem valores 
- Não sendo um bug especificamente, mas a mudança de alguns blocos de código e nomes de váriaveis para tornar o código mais legível

O principal motivo de não correção desses bugs foi o atraso na trilha, próximo patch estarei corrigindo os mesmos.

### Algumas coisas que foram refatoradas nesse patch: 
- Na aba de criação de tarefas existem novas opções 
- Fundo que fugia do body foi retirado
- Alguns botões por vezes não funcionavam 
- Informações aparecem na tarefa completamente

### Futuros features:
- Quando você deixar seu mouse em cima de uma tarefa, um pop-up aparecerá e mostrará a descrição de tal tarefa
- Movimentação de tarefas pelo mouse ( Provavelmente ) 


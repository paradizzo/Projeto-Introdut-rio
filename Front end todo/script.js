
/** Declaração de variaveis **/

const proxInputName = document.querySelector("#add-prox input");
const  proxInputDesc = document.querySelector("#add-prox input:nth-child(2n)");
const  proxAddBtn = document.querySelector(".btn-add ");
const proxOpenBtn = document.querySelector(".wraper-plus a");
const proxTodoList = document.querySelector(".todoListProx");
const  proxMenuList = document.querySelector("#add-prox")
const closeProxMenuList = document.querySelector("#add-prox img")
let countProx = document.querySelector("#count-prox"), countProxCounter = 0;
let countFnzd = document.querySelector("#count-fnzd"), countFnzdCounter = 0;
let countFazer = document.querySelector("#count-fazer"),countFazerCounter = 0;
let countConc = document.querySelector("#count-conc"), countConcCounter = 0;
localStorage.clear()

/** PARTE DO PROXIMO **/

proxOpenBtn.onclick = ()=> {
    if (proxMenuList.style.display !== "block") {
        proxMenuList.style.display = "block";
    } else {
        proxMenuList.style.display = "none";
    }
}
closeProxMenuList.onclick = () => {
    proxMenuList.style.display = 'none';
}
proxAddBtn.onclick = ()=> {
    let userData = proxInputName.value;
    let getLocalStorage = localStorage.getItem("Nova Tarefa");
    if (getLocalStorage == null) {
        listArray = []
    } else  {
        listArray = JSON.parse(getLocalStorage);
    }
    listArray.push(userData);
    localStorage.setItem("Nova Tarefa", JSON.stringify(listArray));
    proxMenuList.style.display = "none";
    countProxFunc();
    proxMostrarTarefa();

}
function proxMostrarTarefa(){
    let getLocalStorage = localStorage.getItem("Nova Tarefa");
    if (getLocalStorage == null){
        listArray = [];
    }else {
        listArray = JSON.parse(getLocalStorage);
    }
    let newLiTag = "";
    listArray.forEach((element, index) => {
        newLiTag += ` <li> 
                                  <input type=\"checkbox\" name=\"done-task\">
                                  <a><p>${element}</p></a>
                                  <img src=\"images/arrow-rotate-right-solid.svg\" alt=\"\" onclick = "atualizarTarefa(${index})">
                                  <img src=\"images/trash-solid.svg\" onclick = "deletarTarefaProx(${index})">
                              </li>`
    });
    proxTodoList.innerHTML = newLiTag;
    proxInputName.value = ""
}
/** FIM DO PROXIXO **/

/** PARTE DO FAZER **/

const fazerInputName = document.querySelector("#add-fazer input");
const  fazerInputDesc = document.querySelector("#add-fazer input:nth-child(2n)");
const  fazerAddBtn = document.querySelector(".add-btn-fazer ");
const fazerOpenBtn = document.querySelector("#wraper-plus-fazer img");
const fazerTodoList = document.querySelector(".todoListFazer");
const  fazerMenuList = document.querySelector("#add-fazer")
const closefazerMenuList = document.querySelector("#add-fazer img")


fazerOpenBtn.onclick = ()=> {
    if (fazerMenuList.style.display !== "block") {
        fazerMenuList.style.display = "block";
    } else {
        proxMenuList.style.display = "none";
    }
}
closefazerMenuList.onclick = () => {
    fazerMenuList.style.display = 'none';
}
fazerAddBtn.onclick = ()=> {
    let userDataFazer = fazerInputName.value;
    let getLocalStorageFazer = localStorage.getItem("Nova Tarefa Fazer");
    if (getLocalStorageFazer == null) {
        listArrayFazer = []
    } else  {
        listArrayFazer= JSON.parse(getLocalStorageFazer);
    }
    listArrayFazer.push(userDataFazer);
    localStorage.setItem("Nova Tarefa Fazer", JSON.stringify(listArrayFazer));
    fazerMenuList.style.display = "none";
    countFazerFunc()
    fazerMostrarTarefa();

}
function fazerMostrarTarefa(){
    let getLocalStorageFazer = localStorage.getItem("Nova Tarefa Fazer");
    if (getLocalStorageFazer == null){
        listArrayFazer = [];
    }else {
        listArrayFazer = JSON.parse(getLocalStorageFazer);
    }
    let newLiTagFazer = "";
    listArrayFazer.forEach((elementFazer, index) => {
        newLiTagFazer += ` <li> 
                                  <input type=\"checkbox\" name=\"done-task\">
                                  <a><p>${elementFazer}</p></a>
                                  <img src=\"images/arrow-rotate-right-solid.svg\" alt=\"\" onclick = "atualizarTarefaFazer(${index})">
                                  <img src=\"images/trash-solid.svg\" onclick = "deletarTarefaFazer(${index})">
                              </li>`
    });
    fazerTodoList.innerHTML = newLiTagFazer;
    fazerInputName.value = "";
}

/** FIM DO FAZER **/


const fnzdInputName = document.querySelector("#add-fnzd input");
const  fnzdInputDesc = document.querySelector("#add-fnzd input:nth-child(2n)");
const  fnzdAddBtn = document.querySelector(".add-btn-fnzd ");
const fnzdOpenBtn = document.querySelector("#wraper-plus-fnzd img");
const fnzdTodoList = document.querySelector(".todoListfnzd");
const  fnzdMenuList = document.querySelector("#add-fnzd")
const closefnzdMenuList = document.querySelector("#add-fnzd img")

fnzdOpenBtn.onclick = ()=> {
    if (fnzdMenuList.style.display !== "block") {
        fnzdMenuList.style.display = "block";
    } else {fnzdMenuList.style.display = "none";
    }
}
closefnzdMenuList.onclick = () => {
    fnzdMenuList.style.display = 'none';
}
fnzdAddBtn.onclick = ()=> {
    let userDatafnzd = fnzdInputName.value;
    let getLocalStoragefnzd = localStorage.getItem("Nova Tarefa fnzd");
    if (getLocalStoragefnzd == null) {
        listArrayfnzd = []
    } else  {
        listArrayfnzd= JSON.parse(getLocalStoragefnzd);
    }
    listArrayfnzd.push(userDatafnzd);
    localStorage.setItem("Nova Tarefa fnzd", JSON.stringify(listArrayfnzd));
    fnzdMenuList.style.display = "none";
    countFnzdFunc();
    fnzdMostrarTarefa();

}
function fnzdMostrarTarefa(){
    let getLocalStoragefnzd = localStorage.getItem("Nova Tarefa fnzd");
    if (getLocalStoragefnzd == null){
        listArrayfnzd = [];
    }else {
        listArrayfnzd = JSON.parse(getLocalStoragefnzd);
    }
    let newLiTagfnzd = "";
    listArrayfnzd.forEach((elementfnzd, index) => {
        newLiTagfnzd += ` <li> 
                                  <input type=\"checkbox\" name=\"done-task\">
                                  <a><p>${elementfnzd}</p></a>
                                  <img src=\"images/arrow-rotate-right-solid.svg\" alt=\"\" onclick = "atualizarTarefaFnzd(${index})">
                                  <img src=\"images/trash-solid.svg\" onclick = "deletarTarefaFnzd(${index})">
                              </li>`
    });
    fnzdTodoList.innerHTML = newLiTagfnzd;
    fnzdInputName.value = "";

}

/** fim do fazendo **/


/** COMEÇO DO CONC **/

const concInputName = document.querySelector("#add-conc input");
const  concInputDesc = document.querySelector("#add-conc input:nth-child(2n)");
const  concAddBtn = document.querySelector(".add-btn-conc ");
const concOpenBtn = document.querySelector("#wraper-plus-conc img");
const concTodoList = document.querySelector(".todoListConc");
const  concMenuList = document.querySelector("#add-conc")
const closeconcMenuList = document.querySelector("#add-conc img")


concOpenBtn.onclick = ()=> {
    if (concMenuList.style.display !== "block") {
        concMenuList.style.display = "block";
    } else {concMenuList.style.display = "none";
    }
}
closeconcMenuList.onclick = () => {
    concMenuList.style.display = 'none';
}
concAddBtn.onclick = ()=> {
    let userDataconc = concInputName.value;
    let getLocalStorageconc = localStorage.getItem("Nova Tarefa conc");
    if (getLocalStorageconc == null) {
        listArrayconc = []
    } else  {
        listArrayconc= JSON.parse(getLocalStorageconc);
    }
    listArrayconc.push(userDataconc);
    localStorage.setItem("Nova Tarefa conc", JSON.stringify(listArrayconc));
    concMenuList.style.display = "none";
    concMostrarTarefa();
    countConcFunc();


}
function concMostrarTarefa(){
    let getLocalStorageconc = localStorage.getItem("Nova Tarefa conc");
    if (getLocalStorageconc == null){
        listArrayconc = [];
    }else {
        listArrayconc = JSON.parse(getLocalStorageconc);
    }
    let newLiTagconc = "";
    listArrayconc.forEach((elementconc, index) => {
        newLiTagconc += ` <li> 
                                  <input type=\"checkbox\" name=\"done-task\">
                                  <a><p>${elementconc}</p></a>
                                  <img src=\"images/arrow-rotate-right-solid.svg\" alt=\"\" onclick = "atualizarTarefaConc(${index})">
                                  <img src=\"images/trash-solid.svg\" onclick = "deletarTarefaConc()">
                              </li>`
    });
    concTodoList.innerHTML = newLiTagconc;
    concInputName.value = "";

}

/** FIM DO CONC **/

/** Animações de flecha **/

const arrowsProx = document.querySelector(".arrow-section")
const arrowsFazer = document.querySelector("#arrow-section-fazer")
const arrowsfnzd = document.querySelector("#arrow-section-fnzd")
const arrowsConc = document.querySelector("#arrow-section-conc")

arrowsProx.onclick = () => {
    arrowsProx.classList.toggle("active")
    if (proxTodoList.style.display !== "none") {
        proxTodoList.style.display = "none";
    } else {
        proxTodoList.style.display = "block";
    }
}
arrowsFazer.onclick = () => {
    arrowsFazer.classList.toggle("active")
    if (fazerTodoList.style.display !== "none") {
        fazerTodoList.style.display = "none";
    } else {
        fazerTodoList.style.display = "block";
    }
}
arrowsfnzd.onclick = () => {
    arrowsfnzd.classList.toggle("active")
    if (fnzdTodoList.style.display !== "none") {
        fnzdTodoList.style.display = "none";
    } else {
        fnzdTodoList.style.display = "block";
    }
}
arrowsConc.onclick = () => {
    arrowsConc.classList.toggle("active")
    if (concTodoList.style.display !== "none") {
        concTodoList.style.display = "none";
    } else {
        concTodoList.style.display = "block";
    }
}


/** Delete de tarefas **/


function deletarTarefaProx(index) {
    let getLocalStorage = localStorage.getItem("Nova Tarefa");
    listArray = JSON.parse(getLocalStorage);
    listArray.splice(index, [1])
    localStorage.setItem("Nova Tarefa", JSON.stringify(listArray));
    proxMostrarTarefa();
    countProxFuncNegative();
}
function deletarTarefaFazer(index) {
    let getLocalStorageFazer = localStorage.getItem("Nova Tarefa Fazer");
    listArrayFazer = JSON.parse(getLocalStorageFazer);
    listArrayFazer.splice(index, [1])
    localStorage.setItem("Nova Tarefa Fazer", JSON.stringify(listArrayFazer));
    countFazerFuncNegative();
    fazerMostrarTarefa();
}
function deletarTarefaFnzd(index) {
    let getLocalStoragefnzd = localStorage.getItem("Nova Tarefa fnzd");
    listArrayfnzd = JSON.parse(getLocalStoragefnzd);
    listArrayfnzd.splice(index, [1])
    localStorage.setItem("Nova Tarefa fnzd", JSON.stringify(listArrayfnzd));
    countFnzdFuncNegative();
    fnzdMostrarTarefa();

}
function deletarTarefaConc(index) {
    let getLocalStorageconc = localStorage.getItem("Nova Tarefa conc");
    listArrayconc = JSON.parse(getLocalStorageconc);
    listArrayconc.splice(index, [1])
    localStorage.setItem("Nova Tarefa conc", JSON.stringify(listArrayconc));
    countConcFuncNegative();
    concMostrarTarefa();
}

/** contadores gambiarrados **/


function countProxFunc(){
    countProxCounter += 1;
    countProx.innerHTML = countProxCounter
}
function countFazerFunc(){
    countFazerCounter += 1;
    countFazer.innerHTML = countFazerCounter
}
function countFnzdFunc(){
    countFnzdCounter += 1;
    countFnzd.innerHTML = countFnzdCounter
}
function countConcFunc(){
    countConcCounter += 1;
    countConc.innerHTML = countConcCounter
}
function  countProxFuncNegative() {
    countProxCounter -= 1;
    countProx.innerHTML = countProxCounter
}

function  countFazerFuncNegative() {
    countFazerCounter -= 1;
    countFazer.innerHTML = countFazerCounter
}

function  countFnzdFuncNegative() {
    countFnzdCounter -= 1;
    countFnzd.innerHTML = countFnzdCounter
}

function  countConcFuncNegative() {
    countConcCounter -= 1;
    countConc.innerHTML = countConcCounter
}

/** atualizar tarefas **/
/** Agora são duas da manhã, eu estou atrasado em 3 dias na trilha, eu sinceramente estou com um bocado de sono, Vitor, se você está lendo isso, por favor perdoe a gambiarra feita aqui, eu simplesmente deleto o index da atividade selecionada e abro a criação de uma nova, ass: eu **/

function atualizarTarefa(index){
    deletarTarefaProx(index);
    if (proxMenuList.style.display !== "block") {
        proxMenuList.style.display = "block";
    } else {proxMenuList.style.display = "none";
    }
}

function atualizarTarefaFazer(index){
    deletarTarefaFazer(index);
    if (fazerMenuList.style.display !== "block") {
        fazerMenuList.style.display = "block";
    } else {fazerMenuList.style.display = "none";
    }
}
function atualizarTarefaFnzd(index){
    deletarTarefaFnzd(index);
    if (fnzdMenuList.style.display !== "block") {
        fnzdMenuList.style.display = "block";
    } else {fnzdMenuList.style.display = "none";
    }
}
function atualizarTarefaConc(index){
    deletarTarefaConc(index);
    if (concMenuList.style.display !== "block") {
        concMenuList.style.display = "block";
    } else {concMenuList.style.display = "none";
    }
}
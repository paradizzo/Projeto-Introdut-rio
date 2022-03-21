/** Declaração de variaveis **/

const proxInputName = document.querySelector("#add-prox input");
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
    let PrioridadeData = document.getElementById("prioProx").value;
    let dateData = document.getElementById('datefieldProx').value;  // Eu sei que isso tá confuso, mas tamo junto
    let getLocalStorage = localStorage.getItem("Nova Tarefa");
    let LocalStoragePrioridade = localStorage.getItem("Prioridade")
    let LocalStorageDate = localStorage.getItem('Datas')
    let listArray;
    let listArrayPrioridade;
    let listArrayDate;
    if (getLocalStorage == null) {
        listArray = []
        listArrayPrioridade = []
        listArrayDate = []
    } else {
        listArray = JSON.parse(getLocalStorage);
        listArrayPrioridade = JSON.parse(LocalStoragePrioridade)
        listArrayDate = JSON.parse(LocalStorageDate)
    }


    if (prioProx()){
        if (dateProx()){
            listArray.push(userData);
            listArrayPrioridade.push(PrioridadeData)
            listArrayDate.push(dateData)
            localStorage.setItem("Nova Tarefa", JSON.stringify(listArray));
            localStorage.setItem("Prioridade", JSON.stringify(listArrayPrioridade))
            localStorage.setItem('Datas' , JSON.stringify(listArrayDate))
            countProxFunc();
            proxMostrarTarefa();
            proxMenuList.style.display = "none";

        }
        else {
            window.alert("Insira uma data válida")
            return
        }
    }
    else {
        window.alert("Insira uma prioridade válida: 1 - 5 ")
        return;
    }



}
function dateProx() {
    // Eu não faço a minima ideia de como eu cheguei nessa solução usando regex e sem usar um input de type Date. Mas basicamente usei o split para separar a data em 3 elementos, eu pego o index e transformo em int, o grande problema é que isso  só me permite usar DD/MM/YYYY, espero que não seja um problema.

    let regexDate = /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/;
    let inputDate = document.getElementById('datefieldProx').value;
    let testValidDate = regexDate.test(inputDate)
    let today = new Date();
    let currentDate = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    currentDate = currentDate.split('/')
    let currentDateMes = parseInt(currentDate[1])
    let currentDateYear = parseInt(currentDate[2])
    let currentDateDia = parseInt(currentDate[0])
    inputDate = inputDate.split('/')
    let inputDateDia = parseInt(inputDate[0])
    let inputDateMes = parseInt(inputDate[1])
    let inputDateAno = parseInt(inputDate[2])

    if (testValidDate){
        if (inputDateAno >= currentDateYear) {
            if (inputDateAno > currentDateYear) {
                return true
            }
            if (inputDateAno == currentDateYear) {
                if (inputDateMes >= currentDateMes) {
                    if (inputDateMes > currentDateMes) {
                        return  true
                    }
                    if (inputDateMes == currentDateMes) {
                        if (inputDateDia >= currentDateDia) {
                            return true
                        }
                        else {
                            return  false
                        }
                    }
                }
            }
        }
    }
}
function prioProx() {
    let regexPrioridade = /^[1-5]$/;
    let inputPrioridade = document.getElementById("prioProx").value;
    return regexPrioridade.test(inputPrioridade)
}


function proxMostrarTarefa(){
    let getLocalStorage = localStorage.getItem("Nova Tarefa");
    let PrioridadeData = localStorage.getItem("Prioridade")
    let dateData = localStorage.getItem('Datas')
    let listArray;
    let listArrayPrioridade;
    let listArrayDate;
    if (getLocalStorage == null) {
        listArray = [];
        listArrayPrioridade = []
        listArrayDate = []
    } else {
        listArray = JSON.parse(getLocalStorage);
        listArrayPrioridade = JSON.parse(PrioridadeData)
        listArrayDate = JSON.parse(dateData)
    }
    let newLiTag = "";
    listArray.forEach((element, index) => {
        let prioridadePrint = listArrayPrioridade[index]
        let dataPrint = listArrayDate[index]
        newLiTag += ` <li> 
                                  <input type=\"checkbox\" name=\"done-task\">
                                  <a><p>${element}</p></a>
                                  <p>${prioridadePrint}</p>
                                  <p>${dataPrint}</p>
                                  <img src=\"images/arrow-rotate-right-solid.svg\" alt=\"\" onclick = "atualizarTarefa(${index})">
                                  <img src=\"images/trash-solid.svg\" onclick = "deletarTarefaProx(${index})">
                              </li>`
    });
    proxTodoList.innerHTML = newLiTag;
    const descinput = document.querySelector('.descInput')
    const dateField = document.querySelector('.datefield')
    const prioridadeField = document.querySelector('.prioridadefield')
    const categoryField = document.querySelector('.categoryfield')
    descinput.value= ""
    dateField.value = ""
    prioridadeField.value = ""
    categoryField.value = ""
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
    let listArrayFazer;

    let dataPrioridadeFazer = document.getElementById('prioFazer').value;
    let getLocalStoragePrioridadeFazer = localStorage.getItem('Prioridade Fazer')
    let listArrayPrioridadeFazer;

    let dataDateFazer = document.getElementById('datefieldFazer').value;
    let getLocalStorageDateFazer = localStorage.getItem('Data Fazer');
    let listArrayDateFazer;

    if (getLocalStorageFazer == null) {
        listArrayFazer = []
        listArrayPrioridadeFazer = []
        listArrayDateFazer = []

    } else {
        listArrayFazer = JSON.parse(getLocalStorageFazer);
        listArrayPrioridadeFazer = JSON.parse(getLocalStoragePrioridadeFazer);
        listArrayDateFazer = JSON.parse(getLocalStorageDateFazer);
    }

    if (prioFazer()){
        if (dateFazer()){
            listArrayFazer.push(userDataFazer);
            listArrayPrioridadeFazer.push(dataPrioridadeFazer)
            listArrayDateFazer.push(dataDateFazer)

            localStorage.setItem("Nova Tarefa Fazer", JSON.stringify(listArrayFazer));
            localStorage.setItem("Prioridade Fazer", JSON.stringify(listArrayPrioridadeFazer))
            localStorage.setItem("Data Fazer", JSON.stringify(listArrayDateFazer))
            countFazerFunc()
            fazerMostrarTarefa();
            fazerMenuList.style.display = "none";

        }
        else {
            window.alert("Insira uma data válida")
            return
        }
    }
    else {
        window.alert("Insira uma prioridade válida: 1 - 5 ")
        return;
    }


}
function prioFazer() {
    let regexPrioridade = /^[1-5]$/;
    let inputPrioridade = document.getElementById("prioFazer").value;
    return regexPrioridade.test(inputPrioridade)
}
function dateFazer() {
    let regexDate = /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/;
    let inputDate = document.getElementById('datefieldFazer').value;
    let testValidDate = regexDate.test(inputDate)
    let today = new Date();
    let currentDate = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    currentDate = currentDate.split('/')
    let currentDateMes = parseInt(currentDate[1])
    let currentDateYear = parseInt(currentDate[2])
    let currentDateDia = parseInt(currentDate[0])
    inputDate = inputDate.split('/')
    let inputDateDia = parseInt(inputDate[0])
    let inputDateMes = parseInt(inputDate[1])
    let inputDateAno = parseInt(inputDate[2])

    if (testValidDate){
        if (inputDateAno >= currentDateYear) {
            if (inputDateAno > currentDateYear) {
                return true
            }
            if (inputDateAno == currentDateYear) {
                if (inputDateMes >= currentDateMes) {
                    if (inputDateMes > currentDateMes) {
                        return  true
                    }
                    if (inputDateMes == currentDateMes) {
                        if (inputDateDia >= currentDateDia) {
                            return true
                        }
                        else {
                            return  false
                        }
                    }
                }
            }
        }
    }
}
function fazerMostrarTarefa(){
    let getLocalStoragePrioridadeFazer = localStorage.getItem("Prioridade Fazer")
    let listArrayPrioridadeFazer;

    let getLocalStorageDateFazer = localStorage.getItem("Data Fazer")
    let listArrayDateFazer;

    let getLocalStorageFazer = localStorage.getItem("Nova Tarefa Fazer");
    let listArrayFazer;
    if (getLocalStorageFazer == null) {
        listArrayFazer = [];
        listArrayPrioridadeFazer = []
        listArrayDateFazer = []
    } else {
        listArrayFazer = JSON.parse(getLocalStorageFazer);
        listArrayPrioridadeFazer = JSON.parse(getLocalStoragePrioridadeFazer)
        listArrayDateFazer = JSON.parse(getLocalStorageDateFazer)
    }
    let newLiTagFazer = "";
    listArrayFazer.forEach((elementFazer, index) => {
        let prioridadePrintFazer = listArrayPrioridadeFazer[index]
        let dataPrintFazer = listArrayDateFazer[index]
        newLiTagFazer += ` <li> 
                                  <input type=\"checkbox\" name=\"done-task\">
                                  <a><p>${elementFazer}</p></a>
                                  <p>${prioridadePrintFazer}</p>
                                  <p>${dataPrintFazer}</p>
                                  <img src=\"images/arrow-rotate-right-solid.svg\" alt=\"\" onclick = "atualizarTarefaFazer(${index})">
                                  <img src=\"images/trash-solid.svg\" onclick = "deletarTarefaFazer(${index})">
                              </li>`
    });
    fazerTodoList.innerHTML = newLiTagFazer;
    const descinput = document.querySelector('.descInputFazer')
    const dateField = document.querySelector('.datefieldFazer')
    const prioridadeField = document.querySelector('.prioridadefieldFazer')
    const categoryField = document.querySelector('.categoryfieldFazer')
    descinput.value= ""
    dateField.value = ""
    prioridadeField.value = ""
    categoryField.value = ""
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

    let dataPrioridadeFnzd = document.getElementById('prioFnzd').value;
    let getLocalStoragePrioridadeFnzd = localStorage.getItem('Prioridade Fnzd')
    let listArrayPrioridadeFnzd;

    let dataDateFnzd = document.getElementById('datefieldFnzd').value;
    let getLocalStorageDateFnzd = localStorage.getItem('Data Fnzd');
    let listArrayDateFnzd;

    if (getLocalStoragefnzd == null) {
        listArrayfnzd = []
        listArrayPrioridadeFnzd = []
        listArrayDateFnzd = []
    } else  {
        listArrayfnzd= JSON.parse(getLocalStoragefnzd);
        listArrayPrioridadeFnzd = JSON.parse(getLocalStoragePrioridadeFnzd);
        listArrayDateFnzd = JSON.parse(getLocalStorageDateFnzd);
    }
    if (prioFnzd()){
        if (dateFnzd()){
            listArrayfnzd.push(userDatafnzd);
            listArrayPrioridadeFnzd.push(dataPrioridadeFnzd)
            listArrayDateFnzd.push(dataDateFnzd)

            localStorage.setItem("Nova Tarefa fnzd", JSON.stringify(listArrayfnzd));
            localStorage.setItem("Prioridade Fnzd", JSON.stringify(listArrayPrioridadeFnzd))
            localStorage.setItem("Data Fnzd", JSON.stringify(listArrayDateFnzd))


            countFnzdFunc();
            fnzdMostrarTarefa();
            fnzdMenuList.style.display = "none";

        }
        else {
            window.alert("Insira uma data válida")
            return
        }
    }
    else {
        window.alert("Insira uma prioridade válida: 1 - 5 ")
        return;
    }


}
function fnzdMostrarTarefa(){
    let getLocalStoragefnzd = localStorage.getItem("Nova Tarefa fnzd");
    let getLocalStoragePrioridadeFnzd = localStorage.getItem("Prioridade Fnzd")
    let listArrayPrioridadeFnzd;

    let getLocalStorageDateFnzd = localStorage.getItem("Data Fnzd")
    let listArrayDateFnzd;
    if (getLocalStoragefnzd == null){
        listArrayfnzd = [];
        listArrayPrioridadeFnzd = []
        listArrayDateFnzd = []
    }else {
        listArrayfnzd = JSON.parse(getLocalStoragefnzd);
        listArrayPrioridadeFnzd = JSON.parse(getLocalStoragePrioridadeFnzd)
        listArrayDateFnzd = JSON.parse(getLocalStorageDateFnzd)
    }
    let newLiTagfnzd = "";
    listArrayfnzd.forEach((elementfnzd, index) => {
        let prioridadePrintFnzd = listArrayPrioridadeFnzd[index]
        let dataPrintFnzd = listArrayDateFnzd[index]
        newLiTagfnzd += ` <li> 
                                  <input type=\"checkbox\" name=\"done-task\">
                                  <a><p>${elementfnzd}</p></a>
                                  <p>${prioridadePrintFnzd}</p>
                                  <p>${dataPrintFnzd}</p>
                                  <img src=\"images/arrow-rotate-right-solid.svg\" alt=\"\" onclick = "atualizarTarefaFnzd(${index})">
                                  <img src=\"images/trash-solid.svg\" onclick = "deletarTarefaFnzd(${index})">
                              </li>`
    });
    fnzdTodoList.innerHTML = newLiTagfnzd;
    const descinput = document.querySelector('.descInputFnzd')
    const dateField = document.querySelector('.datefieldFnzd')
    const prioridadeField = document.querySelector('.prioridadefieldFnzd')
    const categoryField = document.querySelector('.categoryfieldFnzd')
    descinput.value= ""
    dateField.value = ""
    prioridadeField.value = ""
    categoryField.value = ""
    fnzdInputName.value = "";

}
function prioFnzd() {
    let regexPrioridade = /^[1-5]$/;
    let inputPrioridade = document.getElementById("prioFnzd").value;
    return regexPrioridade.test(inputPrioridade)
}
function dateFnzd() {
    let regexDate = /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/;
    let inputDate = document.getElementById('datefieldFnzd').value;
    let testValidDate = regexDate.test(inputDate)
    let today = new Date();
    let currentDate = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    currentDate = currentDate.split('/')
    let currentDateMes = parseInt(currentDate[1])
    let currentDateYear = parseInt(currentDate[2])
    let currentDateDia = parseInt(currentDate[0])
    inputDate = inputDate.split('/')
    let inputDateDia = parseInt(inputDate[0])
    let inputDateMes = parseInt(inputDate[1])
    let inputDateAno = parseInt(inputDate[2])

    if (testValidDate){
        if (inputDateAno >= currentDateYear) {
            if (inputDateAno > currentDateYear) {
                return true
            }
            if (inputDateAno == currentDateYear) {
                if (inputDateMes >= currentDateMes) {
                    if (inputDateMes > currentDateMes) {
                        return  true
                    }
                    if (inputDateMes == currentDateMes) {
                        if (inputDateDia >= currentDateDia) {
                            return true
                        }
                        else {
                            return  false
                        }
                    }
                }
            }
        }
    }
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

    let dataPrioridadeConc = document.getElementById('prioConc').value;
    let getLocalStoragePrioridadeConc = localStorage.getItem('Prioridade Conc')
    let listArrayPrioridadeConc;

    let dataDateConc = document.getElementById('datefieldConc').value;
    let getLocalStorageDateConc = localStorage.getItem('Data Conc');
    let listArrayDateConc;

    if (getLocalStorageconc == null) {
        listArrayconc = []
        listArrayPrioridadeConc = []
        listArrayDateConc = []
    } else  {
        listArrayconc= JSON.parse(getLocalStorageconc);
        listArrayPrioridadeConc = JSON.parse(getLocalStoragePrioridadeConc)
        listArrayDateConc = JSON.parse(getLocalStorageDateConc)
    }
    if (prioConc()){
        if (dateConc()){
            listArrayconc.push(userDataconc);
            listArrayPrioridadeConc.push(dataPrioridadeConc)
            listArrayDateConc.push(dataDateConc)

            localStorage.setItem("Nova Tarefa conc", JSON.stringify(listArrayconc));
            localStorage.setItem("Prioridade Conc", JSON.stringify(listArrayPrioridadeConc))
            localStorage.setItem("Data Conc", JSON.stringify(listArrayDateConc))
            concMostrarTarefa();
            countConcFunc();
            concMenuList.style.display = "none";


        }
        else {
            window.alert("Insira uma data válida")
            return
        }
    }
    else {
        window.alert("Insira uma prioridade válida: 1 - 5 ")
        return;
    }



}
function concMostrarTarefa(){
    let getLocalStorageconc = localStorage.getItem("Nova Tarefa conc");
    let getLocalStoragePrioridadeConc = localStorage.getItem("Prioridade Conc")
    let listArrayPrioridadeConc;

    let getLocalStorageDateConc = localStorage.getItem("Data Conc")
    let listArrayDateConc;
    if (getLocalStorageconc == null){
        listArrayconc = [];
        listArrayPrioridadeConc = []
        listArrayDateConc = []
    }else {
        listArrayconc = JSON.parse(getLocalStorageconc);
        listArrayPrioridadeConc = JSON.parse(getLocalStoragePrioridadeConc)
        listArrayDateConc = JSON.parse(getLocalStorageDateConc)
    }
    let newLiTagconc = "";
    listArrayconc.forEach((elementconc, index) => {
        let prioridadePrintConc = listArrayPrioridadeConc[index]
        let dataPrintConc = listArrayDateConc[index]
        newLiTagconc += ` <li> 
                                  <input type=\"checkbox\" name=\"done-task\">
                                  <a><p>${elementconc}</p></a>
                                  <p>${prioridadePrintConc}</p>
                                  <p>${dataPrintConc}</p>
                                  <img src=\"images/arrow-rotate-right-solid.svg\" alt=\"\" onclick = "atualizarTarefaConc(${index})">
                                  <img src=\"images/trash-solid.svg\" onclick = "deletarTarefaConc()">
                              </li>`
    });
    concTodoList.innerHTML = newLiTagconc;
    const descinput = document.querySelector('.descInputConc')
    const dateField = document.querySelector('.datefieldConc')
    const prioridadeField = document.querySelector('.prioridadefieldConc')
    const categoryField = document.querySelector('.categoryfieldConc')
    descinput.value= ""
    dateField.value = ""
    prioridadeField.value = ""
    categoryField.value = ""
    concInputName.value = "";

}
function prioConc() {
    let regexPrioridade = /^[1-5]$/;
    let inputPrioridade = document.getElementById("prioConc").value;
    return regexPrioridade.test(inputPrioridade)
}
function dateConc() {
    let regexDate = /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/;
    let inputDate = document.getElementById('datefieldConc').value;
    let testValidDate = regexDate.test(inputDate)
    let today = new Date();
    let currentDate = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    currentDate = currentDate.split('/')
    let currentDateMes = parseInt(currentDate[1])
    let currentDateYear = parseInt(currentDate[2])
    let currentDateDia = parseInt(currentDate[0])
    inputDate = inputDate.split('/')
    let inputDateDia = parseInt(inputDate[0])
    let inputDateMes = parseInt(inputDate[1])
    let inputDateAno = parseInt(inputDate[2])

    if (testValidDate){
        if (inputDateAno >= currentDateYear) {
            if (inputDateAno > currentDateYear) {
                return true
            }
            if (inputDateAno == currentDateYear) {
                if (inputDateMes >= currentDateMes) {
                    if (inputDateMes > currentDateMes) {
                        return  true
                    }
                    if (inputDateMes == currentDateMes) {
                        if (inputDateDia >= currentDateDia) {
                            return true
                        }
                        else {
                            return  false
                        }
                    }
                }
            }
        }
    }
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




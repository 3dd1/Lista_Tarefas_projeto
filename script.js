const tarefas = document.querySelector("#tarefas")
const formulario = document.querySelector("#formulario")
const caixa_tarefas = document.querySelector("#caixa_tarefas")
const caixa_tarefas_concluidas = document.querySelector("#caixa_tarefas_concluidas")


function adicionartarefas(event){
    event.preventDefault()
    const div = document.createElement("div")
    div.classList.add("div_linear")
    const nova_tarefa = document.createElement("p")
    const botao_remover = document.createElement("button")
    botao_remover.classList.add("botao_remover")
    botao_remover.innerText = "remover"
    const checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    checkbox.classList.add("checkbox")
    nova_tarefa.textContent = tarefas.value
    div.appendChild(checkbox)
    div.appendChild(nova_tarefa)
    div.appendChild(botao_remover)
    caixa_tarefas.appendChild(div)
    tarefas.value = ""
    tarefas.focus()

    botao_remover.addEventListener("click", ()=> caixa_tarefas.removeChild(div))
    checkbox.addEventListener("change", ()=>{
        if(checkbox.checked){
            caixa_tarefas.removeChild(div)
            caixa_tarefas_concluidas.appendChild(div)
            div.removeChild(botao_remover)
            checkbox.checked    
        }
    })
}
formulario.addEventListener("submit", adicionartarefas)
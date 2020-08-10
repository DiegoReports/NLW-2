// Procurar botão.
document.querySelector("#add-time")
// Ao Clicar no botão
.addEventListener('click', cloneField)

//Executar uma ação
function cloneField() {
    //Duplicar os campos , Qual campo?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //Limpar os campos. Quais Campos ?
    const fields = newFieldContainer.querySelectorAll('input')

    //Para cada Campo, Limpar
    fields.forEach(function(field) {
        //pegar o field do momento e Limpar
        field.value = ""
    })

    //Colocar na página: onde ?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

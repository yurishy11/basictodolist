const btn = document.querySelector("#btn");
const input = document.querySelector("#userinput");
const ul = document.querySelector(".todolist");

function liListElement() {
    // Garantindo que o usuário escreveu alguma coisa e não coloque em branco na lista
    if (input.value.length > 0) {
        // Removendo possivel setAttribute caso o if tenha falhado
        input.removeAttribute("placeholder");

        // Criando um novo elemento "li"
        let li = document.createElement("li");

        // Pegue o input.value escrito pelo usuário, crie um nó de texto e adcione aos filhos do elemento pai
        li.appendChild(document.createTextNode(input.value));

        // Adicionando o filho criado anteriormente com o valor digitado pelo usuário na lista
        ul.appendChild(li);

        if (ul.children.length >= 13) {
            input.setAttribute("placeholder", "Lista cheia!");
            btn.disabled = true;
            input.disabled = true;
        }

        // Depois de tudo isso limpar a barra
        input.value = "";
    } else {
        input.setAttribute("placeholder", "Escreva alguma coisa!");
    }
}

btn.addEventListener("click", liListElement)
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        liListElement()
    }
}) 
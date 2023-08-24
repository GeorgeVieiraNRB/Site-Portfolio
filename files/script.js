content= document.getElementsByClassName("content");
console.log(content)
const logo = document.getElementById("logo-image")
const nome = document.getElementById("nome")
const divs = [...document.querySelectorAll(".content-div")]
const nav = [...document.querySelectorAll(".nav-links")]
const imagem = document.querySelector("#imagem-carrossel");
const imagem_link = document.querySelector("#link-imagem");
const imagem_titulo = document.querySelector("#image-title");
const bar = [...document.querySelectorAll(".conteudo input")]
const barra = [...document.querySelectorAll(".bar")]
nav.map((element,indice)=>{
    console.log(`${indice}${element}`)
    element.addEventListener("click",(evt)=>{
        console.log(`${evt}${evt.target}${evt.target.innerHTML}`);
        console.log(evt.target.parent)
        evt.target.style.color="--maize";
        evt.target.style.background="var(--tertiary-color)"
        evt.target
        for (let i = 0; i < nav.length; i++) {
            const elemento = nav[i];
            console.log(evt.target.innerHTML)
             // Exibe o conteúdo do elemento
            if(elemento.innerHTML!=evt.target.innerHTML){
                // Ainda não funciona como deveria, mas é o que tem pra hoje
                // Basicamente era pra voltar a cor dos outros botões pro padrão
                console.log(evt.target.innerHTML)
                console.log("-")
                console.log(elemento.textContent);
                evt.target.style.background="--secondary-color";
                evt.target.style.color="var(--primary-color)";
            }
          }
    })
}); 
logo.addEventListener("click", function() {
    location.reload(); // Recarrega a página
});
nome.addEventListener("click", function() {
    location.reload(); // Recarrega a página
});
const imagens=["plastic-defense.png","fruits-classifier.png","deadsonesdinner.png","prototipo-sistema-estagios.png"]
const links=["https://github.com/GeorgeVieiraNRB/plastic-defense","https://github.com/GeorgeVieiraNRB/Fruits-Classifier","https://github.com/GeorgeVieiraNRB/DeadOnesDinner","https://github.com/sofiawolf2/Projeto-Engenharia-de-Software"]
const titles=["Plastic Defense","Classificador de Frutas","Deads Ones Dinner","Protótipo do Sistema de Estágios"]
barra.map((elmt,indice)=>{
    elmt.addEventListener("mouseover",()=>{
        imagem.src=imagens[indice]
        imagem_link.href=links[indice]
        imagem_titulo.innerHTML=titles[indice]
    })
});
console.log(bar)
console.log(imagens)


function calcularIdade(dataNascimento) {
    const dataNasc = new Date(dataNascimento);
    const hoje = new Date();

    let idade = hoje.getFullYear() - dataNasc.getFullYear();
    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();
    const mesNascimento = dataNasc.getMonth();
    const diaNascimento = dataNasc.getDate();

    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }

    return idade;
}

const dataNascimento = '2000-10-23'; // Substitua pela data de nascimento desejada
const idadeCalculada = calcularIdade(dataNascimento);
console.log(`A idade é: ${idadeCalculada}`);
const idade = document.querySelector("#idade")
idade.innerHTML+=` ${idadeCalculada}`;
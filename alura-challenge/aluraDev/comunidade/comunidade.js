const projetos = JSON.parse(localStorage.getItem('projeto'));
const cardSection = document.querySelector('.card-container');

function criaCard(projeto) {
    const novoCard = document.createElement('div');
    novoCard.classList.add('card');

    const cardCode = document.createElement('div');
    cardCode.classList.add('card-preview-cod');
    cardCode.style.background = projeto.cor; 
    novoCard.appendChild(cardCode);

    const labelDots = document.createElement('label');
    labelDots.innerHTML = `<img src="../images/icon-dot-dot-dot.svg" alt="Ícone ponto vermelho, amarelo e verde" id="dot">`
    cardCode.appendChild(labelDots);

    const codigoWrapper = document.createElement('div');
    codigoWrapper.classList.add('codigo-wrapper');
    codigoWrapper.innerHTML = `<code class="preview hljs" contenteditable="false" aria-label="Editor de código">${projeto.conteudo}</code>` 
    cardCode.appendChild(codigoWrapper);

    const cardInfo = document.createElement('div');
    const titulo = document.createElement('h1');
    const descricao = document.createElement('p');
    cardInfo.classList.add('card-info');
    titulo.innerText = projeto.titulo; 
    cardInfo.appendChild(titulo);
    descricao.innerText = projeto.descricao; 
    cardInfo.appendChild(descricao);
    novoCard.appendChild(cardInfo);

    const cardSocial = document.createElement('div');
    cardSocial.classList.add('card-social');
    const iconComent = document.createElement('div');
    iconComent.classList.add('icon');
    iconComent.innerHTML = `<img src="../images/message-circle.svg" alt="Ícone mensagem">` //talvez vai ter que mudar isso aqui por conta dos comentários
    cardSocial.appendChild(iconComent);

    const iconLike = document.createElement('div');
    iconLike.classList.add('icon-like');
    iconLike.innerHTML = `<img src="../images/heart.svg" alt="Ícone coração" class="heart">` //talvez vai ter que mudar isso aqui por conta dos comentários
    cardSocial.appendChild(iconLike);

    const iconPerfil = document.createElement('div');
    iconPerfil.classList.add('icon');
    iconPerfil.innerHTML = `<img src="../images/foto-perfil-mobile.png" alt="Foto perfil" id="perfil"><span>@Yasmin</span>`
    cardSocial.appendChild(iconPerfil);

    novoCard.appendChild(cardSocial);

    cardSection.appendChild(novoCard);
}

projetos.forEach((elemento) => {
    criaCard(elemento);
});

const card = document.querySelectorAll('.card');
const cardSocial = document.querySelectorAll('.card-social');
const heart = document.querySelectorAll('.heart');
const divHeart = document.querySelectorAll('.icon-like');

for(let i = 0; i <= card.length; i++) {
    card[i].addEventListener('mouseover', () => {
       cardSocial[i].style.visibility = 'visible';
    });
    card[i].addEventListener('mouseout', () => {
        cardSocial[i].style.visibility = 'hidden';
     });
    heart[i].addEventListener('click', () => {
        divHeart[i].innerHTML = `<img src="../images/heart-full.svg" alt="Ícone coração">`
    });
}


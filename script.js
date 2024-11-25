const section=document.querySelectorAll('section');
window.onscroll=()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        if(top>offset&&top<offset+height){
            sec.classList.add('start-animation')
        }
        else{
            sec.classList.remove('start-animation')
        }
    })
    var header=document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY>100);
    }
    const toggleMode = () => {
        document.body.classList.toggle('dark-mode');
    };
    document.querySelector('.toggle-btn').addEventListener('click', toggleMode);

    function voltarGaleria() {
        window.location.href = "galeria.html";
    }

    function assistirTrailer(link) {
        document.getElementById('video').src = link;
        document.getElementById('modal').style.display = 'block';
    }

    function fecharModal() {
        document.getElementById('modal').style.display = 'none';
        document.getElementById('video').src = '';
    }
    
    document.addEventListener("DOMContentLoaded", function() {
        // Array com os nomes das imagens
        const images = [
            "goku.webp",
            "vegeta.webp",
            "freeza1.webp",
            "billsc.png",
            "whis.png",
            "jiren.webp",
            "gohan1.webp"
        ];
    
        // Selecionar o contêiner da galeria
        const galleryContainer = document.getElementById("galeria.html");
    
        // Loop para adicionar cada imagem ao contêiner
        images.forEach(image => {
            const imgElement = document.createElement("img"); // Cria o elemento de imagem
            imgElement.src = `imagens/${image}`; // Define o caminho da imagem
            imgElement.alt = image.split('.')[0]; // Define um texto alternativo (nome da imagem sem extensão)
            galleryContainer.appendChild(imgElement); // Adiciona a imagem ao contêiner
        });
    });
    
    function abrirImagem() {
        // Abre a imagem em uma nova aba
        var imagemUrl = document.querySelector('.personagem-img').src;
        window.open(imagemUrl, '_blank');
    }
    

    document.getElementById('form-contato').addEventListener('submit', function(event) {
        event.preventDefault();  // Impede o envio do formulário para fins de demonstração
        document.getElementById('mensagem-sucesso').style.display = 'block'; // Mostra a mensagem de sucesso
    });
    
    const element = document.querySelector('.meuElemento');

if (element) {
    element.classList.add('novaClasse');
} else {
    console.log('Elemento não encontrado');
}

// Endpoint da Jikan API para "Dragon Ball Super"
const apiUrl = 'https://api.jikan.moe/v4/anime/12189/episodes';

fetch(apiUrl)
  .then(response => response.json()) // Converte a resposta em formato JSON
  .then(data => {
    const episodes = data.data;
    displayEpisodes(episodes); // Função para exibir os episódios
  })
  .catch(error => {
    console.error('Erro ao obter dados da API:', error);
  });

// Função para exibir os episódios no site
function displayEpisodes(episodes) {
  const episodesContainer = document.getElementById('episodes-container');
  
  episodes.forEach(episode => {
    const episodeDiv = document.createElement('div');
    episodeDiv.classList.add('episode');
    
    episodeDiv.innerHTML = `
      <h3>${episode.title}</h3>
      <img src="${episode.images.jpg.image_url}" alt="${episode.title}" />
      <p>${episode.synopsis}</p>
    `;
    
    episodesContainer.appendChild(episodeDiv);
  });
}

// Pega o botão de troca de tema
const themeToggleButton = document.getElementById('theme-toggle');

// Checa se o tema já foi salvo no localStorage
if(localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    document.querySelector('nav').classList.add('dark-theme');
    themeToggleButton.classList.add('dark-theme');
}

// Função para alternar o tema
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.querySelector('nav').classList.toggle('dark-theme');
    themeToggleButton.classList.toggle('dark-theme');
    
    // Salva a escolha do usuário no localStorage
    if(document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

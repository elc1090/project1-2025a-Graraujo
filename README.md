[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/-0GsTofh)

# Projeto: Remake de site/app web

![Print do site](printscreen.png)
![Gif](https://private-user-images.githubusercontent.com/43685526/428848610-fdb13d45-9f5a-49c8-b3ac-5fc4a51bfd70.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDM0NzQ1MzgsIm5iZiI6MTc0MzQ3NDIzOCwicGF0aCI6Ii80MzY4NTUyNi80Mjg4NDg2MTAtZmRiMTNkNDUtOWY1YS00OWM4LWIzYWMtNWZjNGE1MWJmZDcwLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MDElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDAxVDAyMjM1OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWY3YjAxMjRmZWQ2ZjVhZDEwY2ViNWUxMjkwMmZlYzkwMGNlMDczMDZlNWY4NWM3YTYxN2QyYjIzOWQ1MDVhNWQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.UDMKvl5zdpxTBGjK64hznBdK9l9u-srqFYtaBegyTBw)

Acesso: https://elc1090.github.io/project1-2025a-Graraujo/

#### Desenvolvedor(a)

Giulia Rodrigues de Araujo (Ciência da Computação - UFSM)

#### Cliente

Antônio Dall'Agnol

#### Site/app original

##### Link: https://www.nike.com.br

##### Descrição

O site oficial da Nike é uma plataforma de e-commerce esportiva que oferece variados produtos da marca, incluindo roupas, calçados e acessórios relacionados a esportes. O design do site é limpo e minimalista, com foco em uma navegação intuitiva e eficiente. No entanto, apesar de seu layout já ser bem estruturado, há espaço para modernização, visando otimizar a experiência do usuário, deixando-o mais fluido e refinado.

#### Demanda do(a) cliente

O cliente solicitou um remake com design moderno e atraente para exibir os produtos em destaque.

#### Desenvolvimento

1. Comecei criando uma estrutura simples para a nova landing page, separando o layout em seções, incluindo um header, uma main e um rodapé. No header, coloquei o logotipo da Nike e criei um esqueleto inicial para a apresentação dos produtos. O rodapé foi feito de forma simples, seguindo o estilo do site oficial da Nike.

2. Em seguida, desenvolvi um header com o logotipo e uma search-bar, sem uma ideia clara de como apresentar os produtos em destaque inicialmente. Durante essa fase, trabalhei apenas com HTML e CSS, mantendo a simplicidade e a pureza do código.

3. Depois, adicionei um menu ao lado da search-bar no header e comecei a trabalhar mais no CSS para refinar o design. O rodapé também foi ajustado novamente para melhorar a aparência.

4. Criei uma página de promoções, inseri dois banners na página inicial (index.html) e defini que os produtos em destaque seriam exibidos em um carrossel. Para implementá-lo, assisti a diversos tutoriais no YouTube e experimentei diferentes abordagens, contando também com o suporte do ChatGPT.

5. Por fim, desenvolvi um script em JavaScript para tornar a navegação mais interativa e fluida. Nessa etapa, busquei mais referências no YouTube e refinei o código com a ajuda do ChatGPT, garantindo uma experiência mais suave e dinâmica para o usuário.

#### Tecnologias

- Html 
- CSS
- JavaScript

#### Ambiente de desenvolvimento

- Editor de código: Visual Studio Code (VS Code)

- Extensões do VS Code: [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) e [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)


#### Referências e créditos

- [https://developer.mozilla.org/](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)
- https://flexboxfroggy.com/
- https://cssgridgarden.com/
- https://extract.pics/
- https://chatgpt.com/

```
Chat, como seria uma estrutura de carrossel de imagens com botões de navegação em JS?
-------
Uma estrutura básica para um carrossel de imagens com botões de navegação em JavaScript pode ser feita assim:
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const track = document.querySelector(".carrossel-track");
const items = document.querySelectorAll(".item");
let currentIndex = 0;

function updateCarrossel() {
    const width = items[0].clientWidth;
    track.style.transform = `translateX(-${currentIndex * width}px)`;
}

nextBtn.addEventListener("click", function () {
    if (currentIndex < items.length - 1) {
        currentIndex++;
        updateCarrossel();
    }
});

prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarrossel();
    }
});


``` 

Projeto entregue para a disciplina de [Desenvolvimento de Software para a Web](http://github.com/andreainfufsm/elc1090-2025a) em 2025a

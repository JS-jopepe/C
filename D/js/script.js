alert("Oi my nego");

let nome = prompt("Qual é o seu nome?");
let idade = Number(prompt("Qual é a sua idade?"));

if (nome ==  Jovenel && idade == 16){
    alert("Você é  Jovenel :)");
} 

body {
    display: grid;
    grid-template-areas: 'navebar'
                          'banner'
                          'main'
                          'section'
                          'contact'
                          'footer';
    grid-template-columns: 100%;
    margin: 0;
}

nav {
    grid-area: 'navbar' ;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 85px;
}

nav a  {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: bold;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: rgb(48, 3, 3);
}

nav a:hover {
    background-color: yellow;
}

nav img{
    width: 85px;
}

nav div:nth-child(2){
    display: none;
}

nav div:nth-child(3) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 400px;
    height: 20px;
}

header {
    grid-area: banner;
    background-size: cover;
    background-position: center;
    background-image: url(http://images.tcdn.com.br/img/img_prod/462820/path_bordado_karate_shotokan_4_182_1_20170728120313.jpg);
    height: 200px;
    width: 200px;
}


@media (max-width: 800px){
    nav div:nth-child(2){
        display: inline-block;
        width: 50px;
    }
    nav div:nth-child(3){
        display: none;
    }
    .icon-burguer {
        width: 55%;
    }
    header {
        background-size: cover;
        background-position: center;
        background-image: url(http://images.tcdn.com.br/img/img_prod/462820/path_bordado_karate_shotokan_4_182_1_20170728120313.jpg);
        height: 600px;
    }

}

/*===================section geral=======================*/
section {
    display: flex;
    align-items: center;
    flex-direction: column;
}

/* =========== CABECALHO =========== */

#cabecalho {
    grid-area: main;
    background-color: rgb(255, 0, 76);
}

#cabecalho h1, #cabecalho h2 {
    text-align: center;
    color: #000000;
}

.titulo {
    text-transform: uppercase;
    font-size: 45px;
    letter-spacing: 3px;
    font-family: 'Liu Jian Mao Cao', cursive;
}

.subtitulo {
    width: 350px;
}

input::placeholder {

}
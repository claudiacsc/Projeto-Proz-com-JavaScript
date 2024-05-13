// No arquivo script.js capture os quatro elementos criados
const titulo = document.getElementById('titulo');
const ul = document.querySelector('ul');
const link = document.querySelector('a');
const ol = document.getElementById('lista-ordenada');

// use a propriedade .innerText para adicionar conteúdo textual aos elementos 'h1' e 'a'
titulo.innerText = 'Bem Vindo ao Projeto Proz com JavaScript';
link.innerText = 'Visite a Proz Educação';

//propriedade .innerHTML para adicionar três itens simples na lista não ordenada
ul.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;

// e três itens com links para outros sites na lista ordenada
ol.innerHTML = `
    <li><a href="https://www.google.com" target="_blank">Google</a></li>
    <li><a href="https://www.youtube.com" target="_blank">YouTube</a></li>
    <li><a href="https://www.github.com" target="_blank">GitHub</a></li>
`;  

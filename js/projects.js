"use strict";
//Tab Menu Projetos
document.getElementById("defaultOpen").click();
function openTab(evt, tabName) {
    let tabContent = document.getElementsByClassName('tabcontent');
    let tabLinks = document.getElementsByClassName('tablinks');
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace("active", " ");
    }
    document.getElementById(tabName).style.display = "flex";
    const target = evt.currentTarget;
    target.className += " active";
}
/*Objeto Projeto:
Nome: String Adimo Imóveis
Tecnologias: String[]: ['html', 'css', 'js'];
Tipo: String = 'Website;
Descricao: String = lorem15
Link: String https://www.google.com/
BgImage: string = url(../img/predio.png);*/
//PROJETOS
// let project: {
//     name: string,
//     technologies: string[],
//     type: string,
//     description: string,
//     link: string,
//     bgImg: string
// };
var TipoProjeto;
(function (TipoProjeto) {
    TipoProjeto[TipoProjeto["Game"] = 0] = "Game";
    TipoProjeto[TipoProjeto["Page"] = 1] = "Page";
    TipoProjeto[TipoProjeto["LandingPage"] = 2] = "LandingPage";
    TipoProjeto[TipoProjeto["ComponenteWeb"] = 3] = "ComponenteWeb";
    TipoProjeto[TipoProjeto["Clone"] = 4] = "Ultilitario";
})(TipoProjeto || (TipoProjeto = {}));
;
let projects = [
    // {
    //     nome: 'Quiz SQL',
    //     tecnologias: ['HTLM', 'CSS', 'TypeScript', 'Javascript'],
    //     tipo: TipoProjeto[TipoProjeto.Game],
    //     descricao: 'Teste com 5 perguntas para avaliar seus conhecimentos' +
    //         'na linguagem SQL.',
    //     link: 'https://friv.com/',
    //     bgImage: 'quiz.png'
    // },
    {
        nome: 'Flex Turismos',
        tecnologias: ['HTML', 'CSS','Javascript'],
        tipo: TipoProjeto[TipoProjeto.LandingPage],
        descricao: 'Projeto prático de landing page para empresa de ' +
            'turismos aplicando os conhecimentos em CSS Flexbox e Responsividade',
        link: 'https://melquiv.github.io/FlexTurismos/',
        bgImage: 'flex_tur.JPG'
    },
    {
        nome: 'Flex Turismos',
        tecnologias: ['HTML', 'CSS','Bootstrap'],
        tipo: TipoProjeto[TipoProjeto.LandingPage],
        descricao: 'Projeto prático de landing page para artes ' +
            'de rua fazendo uso da biblioteca bootstrap',
        link: 'https://melquiv.github.io/PraticaFront-Art/',
        bgImage: 'proj_art.JPG'
    },
    {
        nome: 'AllStar Semijóias',
        tecnologias: ['HTML', 'CSS','Bootstrap', 'Mobile First'],
        tipo: TipoProjeto[TipoProjeto.Page],
        descricao: 'Website de estudo, loja de semijóias ' +
            'desenvolvido em bootstrap e desenvolvido sob o conceito de Mobile First',
        link: 'https://melquiv.github.io/AllStarSemijoias/',
        bgImage: 'allstar_semij.jpg'
    },
    {
        nome: 'Todo List',
        tecnologias: ['HTML', 'CSS','Javascript'],
        tipo: TipoProjeto[TipoProjeto.Clone],
        descricao: 'Projeto em javascript ultilitário.' +
            'Lista de tarefas em que pode adicionar, excluir e marcar tarefas como concluída.' + 
            'Nesse projeto ultilizei muitos conhecimentos em JS DOM',
        link: 'https://melquiv.github.io/TasksDragJS/',
        bgImage: 'todo_list.jpg'
    },

];
function loadProjects() {
    var _a, _b;
    let todos = document.querySelector('#todos');
    for (const { nome, tecnologias, tipo, descricao, link, bgImage } of projects) {
        //div class projectcard
        var projectDiv = document.createElement('div');
        projectDiv.className = 'project-card';
        //div project-image
        var projectImgDiv = document.createElement('div');
        projectImgDiv.className = 'project-image';
        //img
        let img = document.createElement('img');
        img.src = './img/' + bgImage;
        //div card-overlay
        let cardOverlay = document.createElement('div');
        cardOverlay.className = 'card-overlay';
        let projectName = document.createElement('h3');
        projectName.appendChild(document.createTextNode(nome));
        let projectDescription = document.createElement('p');
        projectDescription.appendChild(document.createTextNode(descricao));
        let projectLink = document.createElement('a');
        projectLink.appendChild(document.createTextNode('Acessar'));
        projectLink.target = '_blank';
        projectLink.href = link;
        cardOverlay.appendChild(projectName);
        cardOverlay.appendChild(projectDescription);
        cardOverlay.appendChild(projectLink);
        projectImgDiv.appendChild(img);
        projectImgDiv.appendChild(cardOverlay);
        //  div project-footer
        let projectFooter = document.createElement('div');
        projectFooter.className = 'project-footer';
        let projectType = document.createElement('h3');
        projectType.appendChild(document.createTextNode(tipo));
        let technologiesList = document.createElement('ul');
        for (let i = 0; i < tecnologias.length; i++) {
            let technologiesListItem = document.createElement('li');
            let technologieItem = document.createElement('h3');
            technologieItem.appendChild(document.createTextNode(tecnologias[i]));
            technologiesListItem.appendChild(technologieItem);
            technologiesList.appendChild(technologiesListItem);
        }
        projectFooter.appendChild(projectType);
        projectFooter.appendChild(technologiesList);
        projectDiv.appendChild(projectImgDiv);
        projectDiv.appendChild(projectFooter);
        todos.appendChild(projectDiv);
        let div2 = projectDiv.cloneNode(true);
        console.log(tipo);
        switch (tipo) {
            case ('Game'):
                (_a = document.querySelector('#games')) === null || _a === void 0 ? void 0 : _a.appendChild(div2);
                break;
            case ('Page'):
                (_b = document.querySelector('#pages')) === null || _b === void 0 ? void 0 : _b.appendChild(div2);
                break;
            case('LandingPage'):
                document.querySelector('#landing-pages')?.appendChild(div2);
                break;
            // case('ComponenteWeb'):
            //     document.querySelector('#componentes-web')?.appendChild(div2);
            case('Ultilitario'):
                document.querySelector('#clones')?.appendChild(div2);
        }
    }
}
loadProjects();

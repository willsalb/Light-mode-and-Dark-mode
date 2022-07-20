/*Como vou mudar as classes e mudar os textos, irei fazer funções separadas para cada uma dessas coisas
isso é uma boa pratica no javaScript. Quando colocamos funções com resposabilidades unicas fica mais fácil de ler o código*/

function changeMode(){
    changeClasses();
    changeText();
}

function changeClasses(){
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText(){
    const lightMode = "Light Mode"
    const darkMode = "Dark Mode"

//Contains ve se dentro da classlist de button existe alguma coisa, no caso vai ver se existo dark-mode.
    if (body.classList.contains(darkModeClass)) {
        button.innerHTML = lightMode;
        h1.innerhtml = darkMode + " ON";
        return;//Return para sair da função, depois que acontecer.
    }

    button.innerHTML = darkMode;
    h1.innerhtml = lightMode + " ON";
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('Page-title');
const body = document.getElementsByTagName('body')[0];//esse tipo de chamada retorna um array(lista) e se apenas um elemento dessa lista vai ter que colocar o index.
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);
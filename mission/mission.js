let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;

    if (current == 'dark') {
        //give body dark class
        //add differrent image by changing src
        document.body.className = 'dark';
        logo.src = 'byui-logo_white.png';
    } 
    else {
        //remove dark class from body
        //add default image by changing src
        document.body.className = '';
        logo.src = 'byui-logo_blue.webp';
    }
}
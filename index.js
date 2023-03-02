
const container = document.querySelector('body');
const ul = document.querySelector('ul');
const html = container.parentElement;

html.children[1].style.margin="0";
html.children[1].style.padding="0";
html.children[1].style.boxSizing="border-box";

container.style.overflowX= "hidden";

ul.style.listStyleType= "none";
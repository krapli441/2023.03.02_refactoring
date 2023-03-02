const root = document.getElementById('root');

root.style.width = "100vw";
root.style.height = "100vh";
root.style.backgroundColor = "cadetblue";
root.style.display = "flex";
root.style.justifyContent = "center";
root.style.alignItems = "center";

const main = root.children[0];

main.style.width = "500px";
main.style.height = "500px";
main.style.border = "1px dotted black";
main.style.display = "flex";
main.style.justifyContent = "center";
main.style.alignItems = "center";

// display = flex, justifycontent = center, alignitems = center
// css 태그가 많이 중복되었는데 이를 해결할 수 있는 방법이 있을까
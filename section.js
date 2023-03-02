
const mainSections = document.querySelectorAll('section');
const leftSection = main.children[0];
const rightSection = main.children[1];
const liTags = document.querySelectorAll('ul');

for (let i = 0; i < mainSections.length; i++) {
  mainSections[i].style.display = "flex";
  mainSections[i].style.justifyContent = "center";
  mainSections[i].style.alignItems = "center";

}

leftSection.style.width = "200px";
leftSection.style.height = "450px";
leftSection.style.border = "1px solid black";

rightSection.style.width = "200px";
rightSection.style.height = "450px";
rightSection.style.border = "1px solid blue";

const leftSectionTag = leftSection.children[0];
const rightSectionTag = rightSection.children[0];


for (let i = 0; i < leftSectionTag.children.length; i++) {
  leftSectionTag.children[i].style.width = "100%";
  leftSectionTag.children[i].style.height = "50px";
  leftSectionTag.children[i].style.border = "1px solid black";
  leftSectionTag.children[i].style.backgroundColor = "#fff";
}

for (let i = 0; i < rightSectionTag.childNodes.length; i++) {
  rightSectionTag.children[i].style.width = "200px";
  rightSectionTag.children[i].style.height = "450px";
  leftSectionTag.children[i].style.border = "1px solid blue";


}
let project = document.querySelectorAll('.project');
let overProj = document.querySelectorAll('.overProj');
let parent = document.querySelectorAll('.parent');




for(let i=0; i <project.length; i++) {

parent[i].addEventListener('mouseover', () => {
   overProj[i].style.display='flex';
});

parent[i].addEventListener('mouseout', () => {
   overProj[i].style.display='none';
});

}
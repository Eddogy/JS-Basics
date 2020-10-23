(function () {                 //(function (){})();
////////////////////////////
const article = document.querySelector('article h3');
const articles = document.querySelectorAll('article');
const links = document.querySelectorAll('a');
const btn = document.querySelector('button');
const userInput = document.querySelector('input');
const list = document.querySelector('ul');
//
btn.addEventListener('click', changeTitle);
//
function changeTitle()
{
    article.textContent = userInput.value;
}
//
for (let i = 0; i < articles.length; i++)
 {
    articles[i].addEventListener('click', function(){ articles[i].style.background = 'tomato'; });
}
//
for (let i = 0; i < links.length; i++)
 {
    links[i].href = 'http://www.kitm.lt';
}
//
btn.addEventListener('click', addTask);
//
function addTask()
{
    let task = document.createElement('li'); // sukuriau li
    task.textContent = userInput.value; // i li idejau turini
    list.appendChild(task); //li idejau i ul vidu
}
//




/////////////////////////
})();

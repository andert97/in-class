//js goes here

let stylesheet = document.querySelector('[href*=css/none.css]')
console.log(stylesheet);

let h1 = document.querySelector('h1');
h1.addEventListener('click', function(){
    h1.style.fontSize = "5em";
})

let button = document.querySelector('button');
button.addEventListener('click', function() {
    let message = "You clicked "
    + event.offsetX + "and"
    + event.offsetY;

    let clickedElement = event.target;

    console.log(message);
    console.log(event.target);
});

function doSomething(item) {
    document.querySelector(`#${item}`).addEventListener('click', function() {
    stylesheet.setAttribute('href', `css/${item}.css`);
    });
}

let listItems =  document.querySelectorAll(".style li");
console.log(listItems);

for(var i in Object.keys(listItems)) doSomething(listItems[i].id);
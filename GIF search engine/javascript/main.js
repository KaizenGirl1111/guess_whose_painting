/*grab the input
document.querySelector("div").className*/

document.querySelector(".js-go").addEventListener('click',function()
{var input= document.querySelector("input").value;
console.log(input);
pushtoDOM(input);
}
);

function pushtoDOM(input){
    var container= document.querySelector(".js-container");
    container.innerHTML(input);
}




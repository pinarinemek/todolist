let input = document.querySelector('#task');
function newElement(){
if(input.value === ''){
    //$('.toast').toast(option);

    $(`.error`).toast('show')
}

else{
    let li = document.createElement("li");
    li.innerHTML = input.value;
    console.log(li.innerHTML);
    document.querySelector("#list").appendChild(li);
    let dltbtn = document.createElement("span");
    let icon = document.createElement("i");
    icon.className = "fa fa-trash";
    dltbtn.addEventListener("click" , deleteElement);
    icon.classList.add("icon");
    icon.classList.add("icon:hover");
    dltbtn.appendChild(icon);
    li.appendChild(dltbtn);
    li.addEventListener("click" , completed);
    $(`.success`).toast('show')    
}
}

function deleteElement(){
    this.parentElement.remove();
}

function completed(){
    this.classList.toggle("checked");
}




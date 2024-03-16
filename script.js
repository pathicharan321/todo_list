
let inp=document.querySelector('.inp');
let btn=document.querySelector('.btn');
let taskList=document.querySelector('.taskList');

btn.addEventListener('click',()=>{
    let taskname=inp.value;
    let li=document.createElement('li');
    li.innerHTML=`<span class="taskText">${taskname}</span>
                  <button class="upbtn">↑</button>
                  <button class="downbtn">↓</button>
                  <button class="delbtn">X</button>`
                  ;
                  li.classList.add('taskItem');
                 taskList.appendChild(li);
                  inp.value="";
})
taskList.addEventListener('click',(ev)=>{
    let item=ev.target;
    if(item.classList.contains('upbtn')){
        let parentElement=item.parentElement;
        let previousElement=parentElement.previousElementSibling;
        taskList.insertBefore(parentElement,previousElement);
        
    }
    else if(item.classList.contains('downbtn')){
        let parentElement=item.parentElement;
        let nextElement=parentElement.nextElementSibling;
        taskList.insertBefore(nextElement,parentElement);
    }
    else if(item.classList.contains('delbtn')){
        let parentElement=item.parentElement;
        parentElement.remove();
    }
})
console.log("running file");

let todolist=[];
displayitems();
function addTodo(){
    if(document.querySelector('#todo_input').value==''&&document.querySelector('#todo_date').value==''){
        alert('Enter task and date');
    }
    if(document.querySelector('#todo_input').value==''&&document.querySelector('#todo_date').value!=''){
        alert('Enter task');
    }
    if(document.querySelector('#todo_input').value!=''&&document.querySelector('#todo_date').value==''){
        alert('Enter date');
    }
    if(document.querySelector('#todo_input').value!='' && document.querySelector('#todo_date').value!=''){
        let inputElement=document.querySelector('#todo_input');
        let dateElement=document.querySelector('#todo_date');
        let todoItem=inputElement.value;
        let dateItem=dateElement.value;
        todolist.push({item:todoItem,duedate:dateItem});
        inputElement.value='';
        dateElement.value='';
        displayitems();
    }
}

function displayitems(){
    let containerElement=document.querySelector('.todo_container');
    let newHtml='';

    for(let i=0 ; i<todolist.length ; i++){
        newHtml+=`
            <span>${todolist[i].item}</span>
            <span>${todolist[i].duedate}</span>
            <button class='btn_delete' onclick="deleteTodo(${i});">Delete</button>
        `;
    }
    containerElement.innerHTML=newHtml;
}

function deleteTodo(a){
    todolist.splice(a,1);
    displayitems();
}
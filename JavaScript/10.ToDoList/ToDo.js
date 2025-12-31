
//Collect list Object from Browser storage
      let todoList = JSON.parse(localStorage.getItem('List')) || [];


      displayItems();

function addToDo(){

    let inputElement = document.querySelector('#todo-input');
    let dateElement  = document.querySelector('#todo-date');

    let todoItem = inputElement.value;
    let todoDate = dateElement.value;

    if(todoItem === '' || todoDate === '') return;

    let list = {item: todoItem, dueDate: todoDate};
    todoList.push(list);

    // Storing in local storage(browser)
    localStorage.setItem('List', JSON.stringify(todoList));

    inputElement.value =''; // emptying textbar after saved
    dateElement.value =''; // emptying textbar after saved

    displayItems();
    
}

function deleteTodo(index){
  todoList.splice(index,1);
  localStorage.setItem('List',JSON.stringify(todoList));
  displayItems();
}

function displayItems(){
    
    let containerElement = document.querySelector('.todo-container');
    
    let newHtml = '';
    for( let i = 0; i<todoList.length; i++ ){
        let{item,dueDate} = todoList[i];
        newHtml += `
        
         <span>${item}</span>
         <span>${dueDate}</span>
         <button class="delete-button" onclick="deleteTodo(${i})">Delete Maar !!</button>
        `;
        // looping entirely again and again,as screen doesn't remember the past data it shown 
        
    }
    containerElement.innerHTML = newHtml;
}
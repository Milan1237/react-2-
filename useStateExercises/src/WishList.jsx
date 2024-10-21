import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

const WishListApp = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem('todo'));
    setTodoList(data);
  },[]);

  function onTodoChange(value) {
    setTodo(value);
    console.log(value);
  }
  function addTodo() {
    const id = uuid();
    setTodoList([...todoList, { id: id, name: todo , isCompleted: false }]);
    localStorage.setItem('todo' , JSON.stringify([...todoList, { id: id, name: todo , isCompleted: false }])) ; 
    setTodo("");
  }

  function handleClick(event) {
    const id = event.target.dataset.id;
    const type = event.target.dataset.type;
    if (id) {
      switch (type) {
        case 'delete':
            setTodoList(todoList.filter(value=> value.id != id)) ;
            localStorage.setItem('todo' , JSON.stringify(todoList.filter(value=> value.id != id))) ;  
          break;
        case 'check':
             setTodoList(todoList.map(value => value.id == id ? {...value , isCompleted: !value.isCompleted} : value )); 
          break;

        
      }
    }
  }

  return (
    <>
      <h2>Wish List</h2>
      <div>
        <input
          value={todo}
          onChange={(event) => onTodoChange(event.target.value)}
          type="text"
          placeholder="Please Add your wishes"
        />
        <button onClick={(event) => addTodo()}>Add</button>
      </div>
      <div className="container" onClick={(event) => handleClick(event)}>
        {todoList.map((pro) => {
          return (
            <label htmlFor="" className={`list `} key={pro.id} >
              <input type="checkbox" data-type="check" data-id={pro.id} />
               <span className={pro.isCompleted ? 'strikeThrough' : ''}>{pro.name}</span>
              <button data-id={pro.id} data-type="delete">
                Delete
              </button>
            </label>
          );
        })}
      </div>
    </>
  );
};

export default WishListApp;

import React from "react";
import AppToDoItem from '../app-todo-item'

function AppToDoList () {
    const todos = [
        {   id:0,
            title:'Первый',
            favor: false,
            done: false,
        },
        {   id:1,
            title:'Второй',
            favor: false,
            done: false,
        },
        {   id:2,
            title:'Третий',
            favor: false,
            done: false,
        }
    ];
    return <div className = "list-wrapper" >
        <ul className = "d-flex flex-column todo-list" id = "todo-list" >
            {todos.map((item, key) => {return <AppToDoItem key={key} title = {item.title}
                                                           id = {item.id} favor = {item.favor} done = {item.done}/>})}
        </ul>
    </div>
}

export default AppToDoList


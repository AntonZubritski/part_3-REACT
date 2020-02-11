import React from "react";
import AppToDoItem from '../app-todo-item'

function AppToDoList ({itemsList, onDelete, onDone, onFavor}) {

    const elements = itemsList.map((item) => {
        const { id, ...itemProps } = item;

        return <AppToDoItem
            {...itemProps}
            key = {id}
            onDelete = {() => onDelete(id)}
            onDone = {() => onDone(id)}
            onFavor = {() => onFavor(id)}/>
    });

    return <div className = "list-wrapper" >
        <ul className = "d-flex flex-column todo-list">
            {elements}
        </ul>
    </div>
}

export default AppToDoList


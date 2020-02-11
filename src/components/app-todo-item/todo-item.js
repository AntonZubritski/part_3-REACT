import React from "react";
import './todo-item.css';


function AppToDoItem ({title, onDelete, onDone, onFavor, done, favor}){

        let classFavor = 'fa fa-exclamation';
        let className = 'text form-check-label';

        if (favor) {classFavor += '-circle'}
        if (done) {className += ' completed'}

    return (<li>
               <div className="form-check">
                   <label className="form-check-label">
                       <i className={classFavor} onClick={onFavor}/>
                   </label>
                   <div className={className} onClick={onDone}>{title}</div>
               </div>
               <i className="fa fa-times remove" onClick={onDelete}/>
            </li>);
}

export default AppToDoItem

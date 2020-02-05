import React from "react";
import './todo-item.css';


function AppToDoItem (props) {
    return (<li>
        <div className="form-check">
            <label className="form-check-label">
                <input className="checkbox" type="checkbox" data-id={props.id} data-text={props.favor}/>
                <i className="input-helper"/>
            </label>
            <div className="text form-check-label" data-text={props.done} data-id={props.id}>{props.title}</div>
        </div>
        <i className="mdi fa fa-times remove" data-id={props.id}/>
    </li>);
};
export default AppToDoItem

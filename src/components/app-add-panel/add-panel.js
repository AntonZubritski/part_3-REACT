import React from 'react';
import './app-panel.css'

function AddPanel() {
    return (<div className="add-items d-flex">
        <input type="text" className="form-control todo-list-input" id="textAdd" placeholder="С чего начнем день?"/>
        <button className="add btn btn-primary font-weight-bold todo-list-add-btn" id="btnAdd">+</button>
    </div>);
}
export default AddPanel;
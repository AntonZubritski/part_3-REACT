import React, { Component } from 'react';
import './app-panel.css'

class AddPanel extends Component {
    state = {label: ''};

    onChange = (e) => {
        const value = e.target.value;
        this.setState({ label: value });
    };
    render () {
        const { onAdd } = this.props;
        const { label } = this.state;
        return(
            <form className = "add-items d-flex" onSubmit = { e => {
                    e.preventDefault();
                    onAdd(label);
                    this.setState({ label: '' })
                  }}>
                <input type = "text" className = "form-control todo-list-input"
                       placeholder = "С чего начнем день?" onChange={this.onChange} value={label}/>
                <button className="add btn btn-primary font-weight-bold todo-list-add-btn">+</button>
            </form>)
    }
}

export default AddPanel;
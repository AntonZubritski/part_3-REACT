import React, {Component} from 'react';
import './search-panel.css';

class AppSearch extends Component{
    state = {label: ''};


    clickSubmit = (e) => {
        const value = e.target.value;
        this.setState({ label: value });
    };

    render () {
        const { onSearch } = this.props;
        const { label } = this.state;
        return (
            <form className = "add-items d-flex" onChange = { e => {
                e.preventDefault();
                onSearch(label);

            }}>

                    <input type = "text" className = "form-control todo-list-input search"
                       onChange = {this.clickSubmit} placeholder = "ИСКАТЬ" value = {label} />

            </form>)
    }

}

export default AppSearch
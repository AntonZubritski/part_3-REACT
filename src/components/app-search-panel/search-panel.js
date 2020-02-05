import React from 'react';
import './search-panel.css';

function AppSearch() {
    return <div className = "add-items d-flex" >
                <input type = "text" className = "form-control todo-list-input search"
                       id = "search" placeholder = "ИСКАТЬ" />
           </div>
}

export default AppSearch
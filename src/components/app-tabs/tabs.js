import React from 'react';
import AppTab from '../app-tab'
import './tabs.css'

const AppTabs = ({ tabs, onTab }) => {

    return (<div className="add-items d-flex tabs">
        {tabs.map((item) => {
            const {...itemProps} = item;
            return <AppTab {...itemProps} key={item.title} name={item.title} onTab = {(e) => onTab(e)}/>
        })}
    </div>);
};
export default AppTabs
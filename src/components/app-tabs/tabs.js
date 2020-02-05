import React from 'react';
import AppTab from '../app-tab'
import './tabs.css'

function AppTabs() {
    const nameTabs = [{name:'Активные',bool:true},{name:'Избранное',bool:false},{name:'Завершенные',bool:false}];


    return (<div className="add-items d-flex tabs">
        {nameTabs.map((tab, key) => {
                return <AppTab key={key} name={tab.name} data-id={tab.bool}/>
        })}
    </div>);
}
export default AppTabs
import React from 'react';

function AppTab ({ name, onTab , active }){
        let className = 'col-lg-4 tab';
        if (active){className += ' completedTab'}
        return (<input type="button" value = {name} className={className} onClick={onTab}/>)
}

export default AppTab;

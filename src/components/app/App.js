import React from 'react';
import './App.css';
import AppTitle from '../app-title'
import AppSearch from '../app-search-panel'
import AppToDoList from '../app-todo-list'
import AddPanel from '../app-add-panel'
import AppTabs from  '../app-tabs'


function App() {
  return (
      <div className='App padding justify-content-center container'>
        <div className="card card-body">
          <AppTitle />
          <AddPanel />
          <AppSearch />
          <AppTabs />
          <AppToDoList />
        </div>
      </div>
  );
}


export default App;

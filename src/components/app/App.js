import React from 'react';
import './App.css';
import AppTitle from '../app-title'
import AppSearch from '../app-search-panel'
import AppToDoList from '../app-todo-list'
import AddPanel from '../app-add-panel'
import AppTabs from '../app-tabs'


class App extends React.Component {

    state = {
            todos : [
                {id:0, title: 'первый', favor: false, done: false},
                {id:1, title: 'второй', favor: false, done: false},
                {id:2, title: 'третий', favor: false, done: false}],
            filteredTodos : [],
            search : [],
            tabs : [
                {title: 'Все', active: true},
                {title:'Избранное', active: false},
                {title:'Завершенные', active: false}],
            initialState: true
    };

    maxId = this.state.todos.length;
    createToDo = (title) => {
        return {id: this.maxId++, title, favor:false, done: false}
    };

    //Метод Удаления
    deleteItem = (id) => {
        this.setState(prevState => {
            return {todos: prevState.todos.filter(item => item.id !== id)}
        });
    };
    //Метод Установки Избранных ToDo
    onClickFavor = (id) => {
        this.setState(prevState => {
            const nextState = prevState.todos.map((item) => {
                if (item.id === id) {item.favor = !item.favor}
                return item
            });
            return {todos: nextState}
        });
    };
    //Метод Установки Завершенных ToDo
    onClickDone = (id) => {
        this.setState(prevState => {
            const nextState =  prevState.todos.map((item) => {
                if (item.id === id) {item.done = !item.done}
                return item
            });
            return {todos: nextState}
        });

    };
    //Метод переключения Tabs
    onClickTab  = (e) => {

        //Просто баловался и хотел найти номер элемента без id
        const id = this.state.tabs.map((item) => item.title).indexOf(e.target.value);

        //Выставляю в state все active = false
        this.setState(prevState => {
            return {
                tabs: prevState.tabs.map(item => {
                    if (item.active) {
                        item.active = !item.active
                    }
                    return item
                })
            }
        });

        //Записываю кликнутый state.tabs.active
        this.setState((prevState) => {
            return prevState.tabs[id].active = true
        });

        //Возвращаю массив по условию
        //All
        if (id === 0) {
            this.setState({filteredTodos : this.state.todos, initialState: true})
        }
        //Favor
        else if (id === 1) {
            this.setState({filteredTodos : this.state.todos.filter(item => item.favor), initialState: false})
        }
        //Done
        else if (id === 2) {
            this.setState({filteredTodos : this.state.todos.filter(item => item.done), initialState: false})
        }
    };

    addTodo = (label) => {
        this.setState((prevState) => {
            return {
                todos: prevState.todos.concat(this.createToDo(label))
            };
        });
    };
    searchTodo = (label) => {
        const arr = this.state.todos.map((item, i) => {
            return item.title.indexOf(label) >= 0 ? this.state.todos[i] : false}).filter((key) => key);

        this.setState({
            filteredTodos : arr, initialState: false});
    };

    render() {
        const {filteredTodos, initialState, tabs, todos} = this.state;
        const finalTodos = initialState ? todos : filteredTodos;

        return (
        <div className='App padding justify-content-center container'>
            <div className="card card-body">
                <AppTitle />
                <AddPanel onAdd = {this.addTodo}/>
                <AppSearch onSearch = {this.searchTodo}/>
                <AppTabs tabs = {tabs} onTab = {this.onClickTab}/>
                <AppToDoList itemsList = {finalTodos}
                             onDelete = {this.deleteItem}
                             onDone = {this.onClickDone}
                             onFavor = {this.onClickFavor}/>
            </div>
        </div>)
    }
}


export default App;

let staticArray2 = ['Помыть лечь','Поесть посуду','Поспать обед'];
let staticArray = [];
let obj = [];


async function fetchBase() {
    await fetch(`https://rn-todo-app-c27d4.firebaseio.com/todos.json`)
        .then((resp) => resp.json())
        .then((data) => {

            for (let key in data) {
                console.log(data[`${key}`].title);
                staticArray.push(data[`${key}`].title);

            }
        })
        .catch((err) => console.log('Error', err));
}
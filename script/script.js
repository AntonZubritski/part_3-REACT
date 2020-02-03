let toDoList = document.getElementById('todo-list');
let btnAdd = document.getElementById('btnAdd');
let tabAct = document.getElementById('tab1');
let tabFav = document.getElementById('tab2');
let tabClo = document.getElementById('tab3');
let search = document.getElementById('search');
let tabs = document.querySelectorAll('.tabs input');


function newObj() {
    obj = staticArray.map((items, key) => {
        return new Construct(key,items)
    });
    console.log(obj);
}

function objRender (array) {
    toDoList.innerHTML = '';

    array.map((items) => {
        toDoList.innerHTML += items.render();
    });
    // Construct.render(array);
}

//ДОБАВИТЬ/УДАЛИТЬ ИЗБРАННОЕ
function checkedBox(e) {
    let id = e.getAttribute('data-id');
    //проверка
    obj.map((item, i) => {
        if (id == item.id) {
            obj[i].favor = e.checked;
        }
    })
}

//ДОБАВИТЬ/УДАЛИТЬ ЗАВЕРШЕННЫЕ
function completed(e) {
    let attr = e.getAttribute('data-text');
    let id = e.getAttribute('data-id');

    e.classList.toggle('completed');
    if (e.getAttribute('data-text') == true) {
        e.setAttribute('data-text', false);
    } else {
        e.setAttribute('data-text', true);
    }
    console.log('id', id);
    console.log('attr', attr);

    obj.map((item,key) => {
        if (id == item.id)
        obj[key].done = e.getAttribute('data-text');
    });
}

//ВКЛАДКИ
function completedTab(tabEl, arr) {
    for (let tab of tabs){tab.classList.remove('completedTab')}
    tabEl.classList.toggle('completedTab');
//---------------------------------------------------------
    if (arr === obj) {
        objRender(arr);
        Construct.rendActive(arr);
    }
    search.value = '';
}
//РЕНДЕР ИЗБРАННОЕ
function favor() {
    let arr = obj.filter((iter) => {
        if (iter.favor === true){return true}
    });
    objRender(arr);
    Construct.rendActive(arr);
}
//РЕНДЕР ЗАВЕРШЕННЫЕ
function done() {
   let arr = obj.filter((iter) => {if (iter.done == 'true'){return true}});
    console.log(arr);
    objRender(arr);
    Construct.rendActive(arr);
}

//УДАЛЕНИЕ
function del(e) {
    const key = e.getAttribute('data-id');
    obj.map((item, i) => {
        if (key == item.id) {
            e.parentElement.remove();
            obj.splice(i, 1)
        }
    });
    console.log(obj);
}

//ДОБАВИТЬ ЗАПИСЬ
function addText() {
    let textAdd = document.getElementById('textAdd');
    textAdd.setAttribute('placeholder', 'Не ленись, нажми на +');
    if (textAdd.value !== '') {
        let text = new Construct(obj.length,textAdd.value);
        obj.push(text);
        textAdd.value = '';
        objRender(obj);
        Construct.rendActive(obj);
    } else {
        textAdd.setAttribute('placeholder', 'Нельзя выполнить - ничего!')
    }
    search.value = '';
}

function searchInput() {
    let searchObj = [];
    if (search.value !== ''){
        for (let tab of tabs){
            tab.classList.remove('completedTab')
        }
    }else {
        tabs[0].classList.add('completedTab')
    }

    obj.map((item, i) => {
        return item.title.indexOf(search.value) >= 0 ? i : -1
    })
        .filter((key) => {
            if (key >= 0) {searchObj.push(obj[key])}
    });

    objRender(searchObj);
    Construct.rendActive(searchObj);
}



new Promise( (resolve) => {
    resolve (fetchBase())
}).then(() => {
    newObj();
    objRender(obj);
});



search.addEventListener('input',() => {
    searchInput();
});
btnAdd.addEventListener('click',() => addText());
tabAct.addEventListener('click',() => completedTab(tabAct, obj));
tabClo.addEventListener('click',() => {
    completedTab(tabClo);
    done();
});
tabFav.addEventListener('click',() => {
    completedTab(tabFav);
    favor()
});


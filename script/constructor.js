class Construct {
    constructor(id, title, favor, done){
        this.id = id;
        this.title = title;
        this.favor = favor || false;
        this.done = done || false;
    }
    render() {
            return `<li>
                <div class="form-check">
                    <label class="form-check-label">
                        <input class="checkbox" type="checkbox" data-id = "${this.id}" data-text = ${this.favor} value="0" onclick="checkedBox(this)">
                        <i class="input-helper"></i>
                    </label>
                    <div class="text form-check-label" data-text= ${this.done} data-id="${this.id}" onclick="completed(this)">${this.title}</div>
                </div>
            <i class="remove mdi mdi-close-circle-outline" data-id = "${this.id}" onclick="del(this)"></i>
        </li>`
    }
    static rendActive(array) {
        let checkbox = document.getElementsByClassName('checkbox');
        let done = document.getElementsByClassName('text');
        array.map((iter, key) => {
            if (iter.favor === true) {
                checkbox[key].checked = true;
            }
            if (iter.done == 'true') {
                done[key].classList.add('completed');
            }
        });
    }
}





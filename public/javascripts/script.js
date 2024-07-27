let category = document.querySelector('#category');
let categoryLabel = document.querySelector('#category-label');

let exradiobtn = document.querySelector("#action-ex");
exradiobtn.addEventListener('change', (event) => {
    categoryLabel.style.display = 'inline-block';
    category.style.display = 'inline-block';
    category.selectedIndex = 0;
});

let inradiobtn = document.querySelector("#action-in");
inradiobtn.addEventListener('change', (event) => {
    categoryLabel.style.display = 'none';
    category.style.display = 'none';
    let newcatlbl = document.querySelector('#newcategorylbl');
    if(newcatlbl) newcatlbl.remove();
    let newcatinp = document.querySelector('#newcategoryinput');
    if(newcatinp) newcatinp.remove();
});

let datetime = document.querySelector('#date');
datetime.value = new Date().toISOString().slice(0, -8);

let form = document.querySelector('form');
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    let data = Object.fromEntries(formData);

    let url = '/api/records';

    let { action, ...creates } = data;
    creates.type = action;
    if(creates?.newCategory && creates.newCategory.trim() !== '') {
        let result = await fetch('/api/categories', {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: creates.newCategory })
        })
        let json = await result.json()
        creates.category = json[0].id
    }
    fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(creates)
    })
        .then(
            result => {
                result.json();
            }
        )
        .then(
            json => {
                window.location.reload();
            }
        );
});

function deleteRecord(id) {
    fetch(`/api/records/${id}`, {
        method: 'DELETE',
    })
        .then(result => result.json())
        .then(json => {
            window.location.reload();
        });
}

category.addEventListener('change', (event) => {
    let value = event.target.selectedOptions[0].value;
    if(value === "addnew") {
        let label = document.createElement('label');
        label.innerText = 'New category';
        label.setAttribute('id', 'newcategorylbl');
        category.after(label);

        let field = document.createElement('input');
        field.setAttribute('type', 'text');
        field.setAttribute('name', 'newCategory');
        field.setAttribute('id', 'newcategoryinput');
        label.after(field);
    }
});
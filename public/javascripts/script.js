fetch('/api/categories')
    .then(
        result => result.json()
    )
    .then(
        json => {
            let select = document.querySelector('#category');
            for(let option of json) {
                let opt = document.createElement('option');
                opt.value = option.name;
                opt.innerText = option.name;
                select.appendChild(opt);
            }
        }
    );
let category = document.querySelector('#category');

let exradiobtn = document.querySelector("#action-ex");
exradiobtn.addEventListener('change', (event) => {
    category.style.display = 'inline-block';
});

let inradiobtn = document.querySelector("#action-in");
inradiobtn.addEventListener('change', (event) => {
    category.style.display = 'none';
});

let datetime = document.querySelector('#date');
datetime.value = new Date().toISOString().slice(0, -8);

let form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    let data = Object.fromEntries(formData);

    let url = '/api/records';

    let { action, ...creates } = data;
    creates.type = action;
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
                console.log(json)
                window.location.reload();
            }
        );
});

function deleteRecord(id){
    fetch(`/api/records/${id}`,{
        method: 'DELETE',
    })
    .then( result => result.json())
    .then( json => {
        console.log(json)
        window.location.reload();
    })
}
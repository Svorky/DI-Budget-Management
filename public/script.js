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
let datetime = document.querySelector('#date');
datetime.value = new Date().toISOString().slice(0, -8);

let form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    let data = Object.fromEntries(formData);

    let url;
    if(data.action === "expense") {
        url = '/api/expenses';
    } else {
        url = '/api/incomes';
    }
    console.log(data);
    let { action, ...creates} = data
    console.log(creates)
    fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(creates)
    })
    .then(
        result => result.json()
    )
    .then(
        json => console.log(json)
    )
});
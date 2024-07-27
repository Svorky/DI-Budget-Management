let form = document.querySelector('form');
let categories = document.querySelector('#category');
let newName = document.querySelector('#newname');
let resultDiv = document.querySelector('#result');

categories.addEventListener('change', (event) => {
    let select = event.target.selectedOptions[0];
    newName.value = select.innerText;
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let submitButton = event.submitter;
    const id = categories.selectedOptions[0].id;
    if(submitButton.id === 'save') {
        const newValue = newName.value;
        const body = {
            id,
            name: newValue
        };
        fetch('../api/categories', {
            method: 'put',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(result => result.json())
            .then(json => {
                resultDiv.innerText = '';
                resultDiv.classList.remove('green', 'red');
                if(json.status) {
                    resultDiv.innerText = 'Category was updated';
                    resultDiv.classList.add('green');
                } else {
                    resultDiv.innerText = 'Category was not updated';
                    resultDiv.classList.add('red');
                }
            });
    } else {
        fetch(`../api/categories/${id}`,{
            method: 'delete'
        })
        .then(json => {
            resultDiv.innerText = '';
            resultDiv.classList.remove('green', 'red');
            if(json.status) {
                resultDiv.innerText = 'Category was deleted';
                resultDiv.classList.add('green');
            } else {
                resultDiv.innerText = 'Category was not deleted';
                resultDiv.classList.add('red');
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const table = document.getElementById('table');
    const btn = document.getElementById('add');

    btn.onclick = function () {
        console.log('Title', title.value);
        console.log('Description', description.value);
    }

    function addTodo() {
        if (title.value === '' || description.value === '') {
            console.error('Title and description are required');
        } else {
            console.log('ok');
        }

    }
});
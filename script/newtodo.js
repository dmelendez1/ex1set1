document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('addTodoForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const userId = document.getElementById('userId').value;
        const title = document.getElementById('title').value;
        const completed = document.getElementById('completed').checked;

        const todoData = {
            userId: userId,
            title: title,
            completed: completed
        };

        addTodo(todoData);
    });
});

function addTodo(todoData) {
    fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todoData),
    })
    .then(response => response.json())
    .then(data => {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `Todo added successfully. New Todo ID: ${data.id}`;
    });
}

async function fetchTodo() {
    const todoId = document.getElementById('todoId').value;
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const todo = await response.json();
    document.getElementById('todoInfo').innerText = JSON.stringify(todo, null, 2);
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('fetchTodoButton');
    button.addEventListener('click', fetchTodo);
});

document.getElementById('fetch-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const todoId = document.getElementById('todo-id').value;
    fetch(`http://localhost:3000/todos/${todoId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('edit-todo-id').value = data.id;
            document.getElementById('edit-title').value = data.title;
            document.getElementById('edit-description').value = data.description;
            document.getElementById('edit-form').style.display = 'block';
            document.getElementById('todo-id').disabled = true;
        });
});

document.getElementById('edit-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const todoId = document.getElementById('edit-todo-id').value;
    const updatedData = {
        title: document.getElementById('edit-title').value,
        description: document.getElementById('edit-description').value
    };

    fetch(`http://localhost:3000/todos/${todoId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
    })
    .then(response => {
        if(response.status === 200) {
            alert('Todo updated successfully!');
        } else {
            alert('Failed to update Todo.');
        }
    });
});

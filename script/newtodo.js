document.addEventListener('DOMContentLoaded', function() {
    const todoService = new TodoService();

    document.getElementById('addTodoForm').addEventListener('submit', async function(event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const completed = document.getElementById('completed').checked;

        const newTodo = {
            title: title,
            completed: completed
        };

        try {
            const response = await todoService.add(newTodo);
            document.getElementById('message').innerHTML = 
                `Todo added successfully with ID: ${response.id}`;
        } catch (error) {
            console.error('Error:', error);
            document.getElementById('message').innerHTML = 
                'An error occurred adding the Todo.';
        }
    });
});

class TodoService {
    baseUrl = "http://localhost:3000/todos";

    // GET all Todos
    async getAll() {
        return fetch(this.baseUrl).then(response => response.json());
    }

    // GET a Todo by ID
    async getById(id) {
        let url = `${this.baseUrl}/${id}`;
        return fetch(url).then(response => response.json());
    }

    // POST a new Todo
    async add(todo) {
        const requestInfo = {
            method: "POST",
            body: JSON.stringify(todo),
            headers: {"Content-type": "application/json;charset=UTF-8"}
        };
        return fetch(this.baseUrl, requestInfo).then(response => response.json());
    }

    // PUT (update) a Todo
    async update(id, todo) {
        let url = `${this.baseUrl}/${id}`;
        const requestInfo = {
            method: "PUT",
            body: JSON.stringify(todo),
            headers: {"Content-type": "application/json;charset=UTF-8"}
        };
        return fetch(url, requestInfo).then(response => response.json());
    }

    // DELETE a Todo
    async delete(id) {
        let url = `${this.baseUrl}/${id}`;
        const requestInfo = {
            method: "DELETE"
        };
        return fetch(url, requestInfo).then(response => response.json());
    }
}

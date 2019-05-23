const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/employees/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/employees`).then(e => e.json())
  },
  deleteEmployee(id) {
    return fetch(`${remoteURL}/employees/${id}`, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"}
    }).then(e => e.json())
  },
  put(emp) {
    console.log("put")
    return fetch(`${remoteURL}/employees/${emp.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(emp)
    }).then(data => data.json());
  }
}
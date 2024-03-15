const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    let taskInput = document.querySelector("#taskINPUT"); // Added '#' to target ID
    let todo = taskInput.value.trim();
    
    if (todo !== "") {
        const todolist = document.querySelector("#task-list");
        const newTask = document.createElement("li");
        newTask.innerHTML = `<input  type="checkbox"><span>${todo}</span>`;
        todolist.appendChild(newTask);
        taskInput.value = '';
    }
});
document.addEventListener('change', function(event) {
    if (event.target.type === 'checkbox') {
        // If checkbox is checked, remove its parent <li> element
        if (event.target.checked) {
            event.target.parentNode.remove();
        }
    }
})
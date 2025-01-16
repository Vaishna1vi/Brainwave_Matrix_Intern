// Get DOM elements
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Add task function
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a task item
  const taskItem = document.createElement("li");
  taskItem.classList.add("task");

  taskItem.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div>
      <button class="complete-btn">Complete</button>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;

  // Add event listeners for buttons
  const completeBtn = taskItem.querySelector(".complete-btn");
  const editBtn = taskItem.querySelector(".edit-btn");
  const deleteBtn = taskItem.querySelector(".delete-btn");
  const taskTextElement = taskItem.querySelector(".task-text");

  // Toggle task completion
  completeBtn.addEventListener("click", () => {
    taskItem.classList.toggle("completed");
    completeBtn.textContent = taskItem.classList.contains("completed")
      ? "Completed"
      : "Complete";
  });

  // Edit task
  editBtn.addEventListener("click", () => {
    const currentText = taskTextElement.textContent;
    const newText = prompt("Edit your task:", currentText);
    if (newText !== null && newText.trim() !== "") {
      taskTextElement.textContent = newText.trim();
    } else if (newText === "") {
      alert("Task cannot be empty!");
    }
  });

  // Delete task
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(taskItem);
  });

  // Append task to the task list
  taskList.appendChild(taskItem);

  // Clear the input field
  taskInput.value = "";
});

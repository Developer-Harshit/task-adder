const taskForm = document.querySelector("#task-form");
const inputElement = document.querySelector("#add-task");
const taskOlElement = document.querySelector("#task-container");

function createTaskList(text) {
	const newTaskList = document.createElement("li");
	const newTaskPara = document.createElement("p");
	newTaskPara.textContent = text;
	newTaskList.className =
		"task-item ml-6 border-l-4 border-blue-800 task-item bg-slate-900 p-5 mb-4 text-blue-400 text-xl w-6/12";
	newTaskList.append(newTaskPara);
	taskOlElement.append(newTaskList);
}

function addTask(event) {
	event.preventDefault();

	//add to list
	createTaskList(inputElement.value);

	inputElement.value = "";
}

taskForm.addEventListener("submit", addTask);

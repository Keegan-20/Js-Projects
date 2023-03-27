//creating variables for the elements
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

//onclick event for add button

const addTask = () => {
    if (inputBox.value === '') {  //displaying an alert if user doesn't give any input    '' means empty string.
        alert("Please Add Any Task");
    }
    else {
        let li = document.createElement('li');
        li.innerText = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement('span'); //close button
        span.innerHTML = "\u00d7";
        span.classList.add('close-button');
        li.appendChild(span);
    }
    inputBox.value = " "; //to clear the previous input given by the user from input field
    saveData();
}

// Marking complete a task and cancelling/removing a task
listContainer.addEventListener('click', (event) => {
    const { tagName } = event.target; //destructuring ES6 technique

    if (tagName === 'LI') {
        event.target.classList.toggle('checked');
        saveData();

    }
    else if (tagName === 'SPAN') {
        event.target.parentElement.remove();
        saveData();

    }
}, false);

//storing the data in local storage
const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
}

const showTasks = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTasks();
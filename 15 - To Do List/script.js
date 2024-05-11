const goalsType = document.querySelector('#task-type');
const inputTask = document.querySelector('.task-input');
const deadline = document.querySelector('.deadline-date');
const taskSection = document.querySelector('.taskMangement');
const addBtn = document.querySelector('#AddBtn');

function generateCard(goal, task, duedate) {
    return (
        `
        <div>
            <h1 class="design-font1 goals headingGoal">${goal}</h1>
        </div>
        <div class="tasks">
        <input type="checkbox" class="checkbox">
            <p class="design-font2 taskText"> ${task} </p>
        </div>
        <hr>
        <div class="taskmange">
            <div class="deadText design-font2"> Dead Line :- ${duedate} </div>
            <div>
                <img src="images/close.png" alt="CUT" class="cross">
            </div>
        </div>
        `
    );
}

function addtask() {
    let goal = goalsType.value;
    let task = inputTask.value;
    let duedate = deadline.value;

    if (task === '') {
        alert('Please Enter Task First');
        return;
    }

    let card = document.createElement('div');
    card.classList.add('taskCard');

    if (goal === '') {
        goal = "Goals";
    }
    if (duedate === '') {
        duedate = "No Date";
    }

    card.innerHTML = generateCard(goal, task, duedate);
    taskSection.appendChild(card);

    const checkbox = card.querySelector('.checkbox');
    const remove = card.querySelector('.cross');
    remove.addEventListener('click' , removeCard);
    attachCheckboxListener(checkbox);
}

function attachCheckboxListener(checkbox) {
    checkbox.addEventListener('click', () => {
        console.log("Checkbox clicked");
        const taskText = checkbox.nextElementSibling;
        taskText.classList.toggle('strikethrough');
    });
}

addBtn.addEventListener('click', function() {
    addtask();
});

function removeCard() {
    const taskCard = this.closest('.taskCard');
    taskCard.classList.add('removing');

    setTimeout(() => {
        taskSection.removeChild(taskCard);
    }, 500);
};




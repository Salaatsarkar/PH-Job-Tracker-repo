const tabActive = ["bg-blue-600", "text-white"];
const tabInactive = ["bg-transparent", "text-neutral/50"];

const allContainer = findId('all-container');
const interviewContainer = findId('interview-container');
const rejectedContainer = findId('rejected-container');

function toggleTab(tab) {
    const tabs = ["all", "interview", "rejected"];
    for (const button of tabs) {
        const tabName = document.getElementById("tab-" + button);
        if (button === tab) {
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);
        }
        else {
            tabName.classList.remove(...tabActive);
            tabName.classList.add(...tabInactive);
        }
    }
    //add hidden class in clickable section
    const sections = [allContainer, interviewContainer, rejectedContainer];
    for (const section of sections) {
        section.classList.add('hidden');
    }

    //remove clikable sections hidden class
    if (tab === 'all') {
        allContainer.classList.remove('hidden');
    }
    else if (tab === 'interview') {
        interviewContainer.classList.remove('hidden');
    }
    else {
        rejectedContainer.classList.remove('hidden');
    }

}

let currentTab = "all";
toggleTab(currentTab);

//dashboard number update

const totalNumber = findId('total-number');
const interviewNumber = findId('interview-number');
const rejectNumber = findId('reject-number');



//card's 3 button work 
document.getElementById('parent-container').addEventListener('click', function (event) {
    const clickEventElement = event.target;
    const card = clickEventElement.closest(".card");
    const parent = card.parentNode;
    const changeStatus = card.querySelector(".change-status");

    if (clickEventElement.classList.contains("interview")) {
        changeStatus.innerText = "Interviewed";
        interviewContainer.appendChild(card);
        changeDashboard();
    }
    if (clickEventElement.classList.contains("reject")) {
        changeStatus.innerText = "Rejected";
        rejectedContainer.appendChild(card);
        changeDashboard();
    }
    if (clickEventElement.classList.contains("delete")) {
        parent.removeChild(card);
        changeDashboard();
    }

})

function changeDashboard() {
    totalNumber.innerText = allContainer.children.length;
    interviewNumber.innerText = interviewContainer.children.length;
    rejectNumber.innerText = rejectedContainer.children.length;
}

changeDashboard();

let currentTab = "all";

const tabActive = ["bg-blue-600", "text-white"];
const tabInactive = ["bg-transparent", "text-neutral/50"];

const allContainer = findId('all-container');
const interviewContainer = findId('interview-container');
const rejectedContainer = findId('rejected-container');
const emptyContainer = findId('empty-container');
const jobsCount = findId('jobs-count');
//dashboard number 
const totalNumber = findId('total-number');
const interviewNumber = findId('interview-number');
const rejectNumber = findId('reject-number');


function toggleTab(tab) {
    
    const tabs = ["all", "interview", "rejected"];
    currentTab = tab;

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
    
    emptyContainer.classList.add("hidden");

    //add hidden class in clickable section
    const sections = [allContainer, interviewContainer, rejectedContainer];
    for (const section of sections) {
        section.classList.add('hidden');
    }

    //remove clikable sections hidden class
    if (tab === 'all') {
        allContainer.classList.remove('hidden');
        if (allContainer.children.length < 1) {
            emptyContainer.classList.remove("hidden");
        }
    }
    else if (tab === 'interview') {
        interviewContainer.classList.remove('hidden');
        if (interviewContainer.children.length < 1) {
            emptyContainer.classList.remove("hidden");
        }
    }
    else {
        rejectedContainer.classList.remove('hidden');
        if (rejectedContainer.children.length < 1) {
            emptyContainer.classList.remove("hidden");
        }
    }
    changeDashboard();
}


//card's 3 button work 
document.getElementById('parent-container').addEventListener('click', function (event) {
    const clickEventElement = event.target;
    const card = clickEventElement.closest(".card");
    const parent = card.parentNode;
    const changeStatus = card.querySelector(".change-status");
    

    if (clickEventElement.classList.contains("interview")) {
        changeStatus.style.backgroundColor = "lightgreen";
        changeStatus.innerText = "Interview";
        interviewContainer.appendChild(card);
       card.style.borderLeft = "4px solid lightgreen";
    }
    if (clickEventElement.classList.contains("reject")) {
        changeStatus.style.backgroundColor = "lightcoral";
        changeStatus.innerText = "Rejected";
        rejectedContainer.appendChild(card);
        card.style.borderLeft = "4px solid lightcoral";
       
    }
    if (clickEventElement.classList.contains("delete")) {
        parent.removeChild(card);
        
    }
    changeDashboard();
})

function changeDashboard() {

    const countObject = {
        all: allContainer.children.length,
        interview: interviewContainer.children.length,
        rejected: rejectedContainer.children.length,
    };

    totalNumber.innerText = countObject.all;
    interviewNumber.innerText = countObject.interview;
    rejectNumber.innerText = countObject.rejected;

    jobsCount.innerText = countObject[currentTab];

    if(countObject[currentTab] < 1){
        emptyContainer.classList.remove("hidden");
    }
    else{
        emptyContainer.classList.add("hidden");
    }
    
}
changeDashboard();
toggleTab(currentTab);


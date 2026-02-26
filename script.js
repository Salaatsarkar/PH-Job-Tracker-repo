const tabActive = ["bg-blue-600" , "text-white"];
const tabInactive = ["bg-transparent", "text-neutral/50"];

function toggleTab(tab){
    const tabs = ["all","interview","rejected"];
    for(const button of tabs)
    {
        const tabName = document.getElementById("tab-"+ button);
        if(button === tab)
        {
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);
        }
        else{
            tabName.classList.remove(...tabActive);
            tabName.classList.add(...tabInactive);
        }
    }
    
}

let currentTab = "all";
toggleTab(currentTab);
function setNb_balls() {
    var nb_balls=parseInt(document.querySelector("#nb_balls").value);
    chrome.storage.sync.set({nb_balls: nb_balls});
}

function getNb_balls() {
    chrome.storage.sync.get(["nb_balls"]).then((result) => {
        if (result["nb_balls"]==null){
            document.querySelector("#nb_balls").value=1;
            setNb_balls()
        } else {
            document.querySelector("#nb_balls").value=result["nb_balls"];
        }
    });
}

getNb_balls()
document.querySelector("#nb_balls").addEventListener("change",setNb_balls);
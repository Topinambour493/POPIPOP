function setNb_balls(){
    console.log("youpi");
    var nb_balls=parseInt(document.querySelector("#nb_balls").value);
    chrome.storage.sync.set({nb_balls:nb_balls}, function() {
        console.log("la valeur a été changé");
        chrome.storage.sync.get(["nb_balls"], function(result) {
            console.log(result);
        });
    });
}

function getNb_balls(){
    chrome.storage.sync.get(["nb_balls"], function(result) {
        if (result["nb_balls"]==null){
            document.querySelector("#nb_balls").value=1;
        }
        else {
            document.querySelector("#nb_balls").value=result["nb_balls"];
        }
    });
}

getNb_balls();

document.querySelector("button").addEventListener("click", () => {
    setNb_balls()
});
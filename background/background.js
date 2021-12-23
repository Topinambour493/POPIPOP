function click_ball() {
    nb_balls=document.querySelector("#nb_balls").value;
    for (i=0;i<nb_balls;i++){
        const rond=document.createElement("div");
        rond.className="clickAnim";
        var width=10+r(100);
        var animationDuration=200 + r(1500);
        rond.style.width=`${width}px`;
        rond.style.height=`${width}px`;
        rond.style.top= `${window.scrollY + r(window.innerHeight) - 0.5*width}px`;
        rond.style.left= `${window.scrollX + r(window.innerWidth) - 0.5*width}px`;
        rond.style.background= `linear-gradient(${r(180)}deg,${get_random_hex_color()},${get_random_hex_color()})`;
        rond.style.animationDuration= `${animationDuration}ms`;
        document.body.appendChild(rond);
        setTimeout(() => {
            rond.remove()
        },animationDuration);
    }
}

function get_random_hex_color() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//cette fonction renvoit un nombre random entre 0 et i exclus
function r(i){
    return Math.floor(Math.random() *i)
}

function getNb_balls(){
    chrome.storage.sync.get(["nb_balls"], function(result) {
        if (result["nb_balls"]==null){
            document.querySelector("#nb_balls").value=1;
            click_ball();
        }
        else {
            document.querySelector("#nb_balls").value=result["nb_balls"];
            click_ball();
        }
    });
}

function create_nb_balls(){
    nb_balls=document.createElement("div");
    nb_balls.id="nb_balls";
    nb_balls.hidden = true;
    document.body.appendChild(nb_balls);
}

create_nb_balls();

window.addEventListener("click", () => {
    getNb_balls();
});

function click_ball() {
    chrome.storage.sync.get(["nb_balls"]).then((result) => {
        let nb_balls = result["nb_balls"]
        for (let i = 0; i < nb_balls; i++) {
            const rond = document.createElement("div");
            rond.className = "clickAnim";
            var width = 10 + r(100);
            var animationDuration = 200 + r(1500);
            rond.style.width = `${width}px`;
            rond.style.height = `${width}px`;
            rond.style.top = `${window.scrollY + r(window.innerHeight) - 0.5 * width}px`;
            rond.style.left = `${window.scrollX + r(window.innerWidth) - 0.5 * width}px`;
            rond.style.background = `linear-gradient(${r(180)}deg,${get_random_hex_color()},${get_random_hex_color()})`;
            rond.style.animationDuration = `${animationDuration}ms`;
            document.body.appendChild(rond);
            setTimeout(() => {
                rond.remove()
            }, animationDuration);
        }
    })
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

window.addEventListener("click", () => {
    click_ball();
});

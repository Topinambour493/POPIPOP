function click_ball(p) {
    for (i=0;i<=p;i++){
        const rond=document.createElement("div");
        rond.className="clickAnim";
        rond.style.width=`${10+r(100)}px`;
        rond.style.height=rond.style.width;
        rond.style.top= `${window.scrollY + r(window.innerHeight)}px`;
        rond.style.left= `${window.scrollX + r(window.innerWidth)}px`;
        rond.style.background= `linear-gradient(${r(180)}deg,${get_random_hex_color()},${get_random_hex_color()})`;
        rond.style.animationDuration= `${200 + r(1500)}ms`;
        document.body.appendChild(rond);
        setTimeout(() => {rond.remove()},1750);
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

window.addEventListener("click", () => {
click_ball(5);
});

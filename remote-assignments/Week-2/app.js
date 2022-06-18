const welcome_blk = document.getElementsByClassName("welcome")[0];
welcome_blk.addEventListener('click', function () { welcome_blk.innerText = "Have a Good Time!" });

const botton1 = document.getElementsByClassName("botton1")[0];
const more_cbs = document.getElementsByClassName("cbs2");
botton1.addEventListener('click', function () {
    for (m of more_cbs) {
        m.style.display = "flex";
    }
});

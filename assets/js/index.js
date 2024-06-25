
// btn trượt sp

function prev(listpr, widthpr, numberpr, vt) {
    vt += widthpr;
    vt = Math.min(vt, 0);
    listpr.style.transform = `translateX(${vt}px)`;
    return vt;
}
// slide product
function next(listpr, widthpr, numberpr, vt) {
    vt -= widthpr;
    vt = Math.max(vt, -widthpr * (listpr.children.length - numberpr));
    listpr.style.transform = `translateX(${vt}px)`;
    return vt;
}


function setupCarousel(btnRightId, btnLeftId, listClass) {
    const listpr = document.querySelector(listClass);
    const lsproducts = listpr.querySelectorAll(".product_it");
    if (lsproducts.length === 0) return;

    const widthpr = lsproducts[0].offsetWidth + 12;
    const numberpr = 5;
    let vt = 0;

    document.getElementById(btnRightId).addEventListener("click", function () {
        vt = next(listpr, widthpr, numberpr, vt);
    });

    document.getElementById(btnLeftId).addEventListener("click", function () {
        vt = prev(listpr, widthpr, numberpr, vt);
    });
}





// load slide
const array = ["assets/img/slider_1.webp", "assets/img/slider_2.webp", "assets/img/slider_3.webp", "assets/img/slider_4.webp"];
let currentIndex = 0;

function loadimg() {
    currentIndex = (currentIndex + 1) % array.length;
    document.getElementById("list-img").src = array[currentIndex];
}
setInterval(loadimg, 3000);
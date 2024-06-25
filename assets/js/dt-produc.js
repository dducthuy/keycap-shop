
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
    const lsproducts = listpr.querySelectorAll(".slide-it1");
    if (lsproducts.length === 0) return;

    const widthpr = lsproducts[0].offsetWidth;
    const numberpr = 5;
    let vt = 0;

    document.getElementById(btnRightId).addEventListener("click", function () {
        vt = next(listpr, widthpr, numberpr, vt);
    });

    document.getElementById(btnLeftId).addEventListener("click", function () {
        vt = prev(listpr, widthpr, numberpr, vt);
    });
}
// slide san pham lien quan
function setupCarousel_related(btnRightId, btnLeftId, listClass) {
    const listpr = document.querySelector(listClass);
    const lsproducts = listpr.querySelectorAll(".product_it");
    if (lsproducts.length === 0) return;

    const widthpr = lsproducts[0].offsetWidth + 10;
    const numberpr = 5;
    let vt = 0;

    document.getElementById(btnRightId).addEventListener("click", function () {
        vt = next(listpr, widthpr, numberpr, vt);
    });

    document.getElementById(btnLeftId).addEventListener("click", function () {
        vt = prev(listpr, widthpr, numberpr, vt);
    });
}


/// load ảnh detail
document.addEventListener("DOMContentLoaded", function () {


    const mainImage = document.getElementById('main-image');


    const thumbnails = document.querySelectorAll('.slide-it1 img');


    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function (event) {
            event.preventDefault()
            const newSrc = this.src;
            mainImage.src = newSrc
        });
    });


    document.getElementById('mt').addEventListener('click', function () {
        document.querySelector('.comment').style.display = 'none';
        document.querySelector('.box').style.display = 'block';
        document.querySelector('#nx').style.fontWeight = '400';
        document.querySelector('#mt').style.fontWeight = '700';

    });

    document.getElementById('nx').addEventListener('click', function () {
        document.querySelector('.comment').style.display = 'block';
        document.querySelector('.box').style.display = 'none';
        document.querySelector('#nx').style.fontWeight = '700';
        document.querySelector('#mt').style.fontWeight = '400';



    });

})

// 

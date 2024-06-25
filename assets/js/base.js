
// login
document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("btn-login").addEventListener("click", function () {
        const modal = document.getElementById("modal");
        modal.style.display = "block";
    });
    document.getElementById("close").addEventListener("click", function () {
        const modal = document.getElementById("modal");
        modal.style.display = "none";
    });


})

const data_pr = [
    { name: "switch", info: "SWITCH MMD CREAM V4 - ÂM CREAMY", img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/1-1717905151861.png?v=1717905157950", price: "1.300.000₫" },
    { name: "switch", info: "SWITCH KAILH MX BCP - LINEAR CLACKY", img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/1-1715924917634.png?v=1715924924880", price: "1.300.000₫" },
    { name: "switch", info: "SWITCH MZ Z1 - LINEAR", img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/1-1696133505980.png?v=1696133512800", price: "1.500.000₫" },
    { name: "switch", info: "SWITCH KTT JACARANDA - LINEAR", img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/z4599790500986-521f7c5d063b42ff004bab37a6cad3a0-1691912730671.jpg?v=1691912748637", price: "1.200.000₫" },
    { name: "switch", info: "SWITCH PH MILK TEA", img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/z4665911846548-caf195ca8b716852bab3284e027333f5-1693910335528.jpg?v=1693910340810", price: "1.100.000₫" },
    { name: "switch", info: "SWITCH KTT MATCHA - TACTILE", img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/z4159888312327-95d1c823d6d09960336f1c749dc8a15b-1678089582257.jpg?v=1678089608247", price: "900.000₫" },
    { name: "switch", info: "SWITCH PH ANIY R2 - LINEAR", img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/1-1690609672054.png?v=1690609679970", price: "800.000₫" },
    { name: "switch", info: "SWITCH KTT JACARANDA - LINEAR", img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/z4599790500986-521f7c5d063b42ff004bab37a6cad3a0-1691912730671.jpg?v=1691912748637", price: "1.200.000₫" },
    { name: "switch", info: "SWITCH PH MILK TEA", img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/z4665911846548-caf195ca8b716852bab3284e027333f5-1693910335528.jpg?v=1693910340810", price: "1.100.000₫" },
    { name: "switch", info: "SWITCH KTT MATCHA - TACTILE", img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/z4159888312327-95d1c823d6d09960336f1c749dc8a15b-1678089582257.jpg?v=1678089608247", price: "900.000₫" },
    { name: "switch", info: "SWITCH PH ANIY R2 - LINEAR", img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/1-1690609672054.png?v=1690609679970", price: "800.000₫" },
    { name: "switch", info: "SWITCH MMD CREAM V4 - ÂM CREAMY", img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/1-1717905151861.png?v=1717905157950", price: "1.300.000₫" },
    { name: "switch", info: "SWITCH KAILH MX BCP - LINEAR CLACKY", img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/1-1715924917634.png?v=1715924924880", price: "1.300.000₫" },
    { name: "Keycap", info: "SWITCH MZ Z1 - LINEAR", img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/1-1696133505980.png?v=1696133512800", price: "1.500.000₫" },
    // { name: "keycap", info: "SWITCH KTT JACARANDA - LINEAR", img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/z4599790500986-521f7c5d063b42ff004bab37a6cad3a0-1691912730671.jpg?v=1691912748637", price: "1.200.000₫" },
    // { name: "keycap", info: "SWITCH PH MILK TEA", img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/z4665911846548-caf195ca8b716852bab3284e027333f5-1693910335528.jpg?v=1693910340810", price: "1.100.000₫" },
    // { name: "keycap", info: "SWITCH KTT MATCHA - TACTILE", img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/z4159888312327-95d1c823d6d09960336f1c749dc8a15b-1678089582257.jpg?v=1678089608247", price: "900.000₫" },
    // { name: "keycap", info: "SWITCH PH ANIY R2 - LINEAR", img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/1-1690609672054.png?v=1690609679970", price: "800.000₫" },
    // { name: "keycap", info: "SWITCH KTT JACARANDA - LINEAR", img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/z4599790500986-521f7c5d063b42ff004bab37a6cad3a0-1691912730671.jpg?v=1691912748637", price: "1.200.000₫" },
    // { name: "keycap", info: "SWITCH PH MILK TEA", img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/z4665911846548-caf195ca8b716852bab3284e027333f5-1693910335528.jpg?v=1693910340810", price: "1.100.000₫" },
    // { name: "switch", info: "SWITCH KTT MATCHA - TACTILE", img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/z4159888312327-95d1c823d6d09960336f1c749dc8a15b-1678089582257.jpg?v=1678089608247", price: "900.000₫" },
    // { name: "switch", info: "SWITCH KTT MATCHA - TACTILE", img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/z4159888312327-95d1c823d6d09960336f1c749dc8a15b-1678089582257.jpg?v=1678089608247", price: "900.000₫" },


]

function getdata() {
    return data_pr;
}
//load sp
function displays(arr, id) {

    const display = document.getElementById(id)
    let html = "";
    arr.map((item) => {
        html += ` <div class="product_it">
                    <a href="">
                        <img class="pr_img"
                            src="${item.img}"
                            alt="ảnh">
                        <div class="pr_info">
                            <h2>${item.name}</h2>
                            <h3>${item.info}</h3>
                            <em>${item.price}</em>
                        </div>

                    </a>
                </div>`

        display.innerHTML = html;
    })
}


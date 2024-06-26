
function lenght() {
    const TableRow = document.getElementById("body")
    const row = TableRow.getElementsByTagName("tr")
        ;
    return row.length;




}
function create_pr(number, Na, DM, numb, pri, img) {
    const Display = document.getElementById("body")
    const imgUrl = URL.createObjectURL(img); // Chuyển đổi đối tượng File thành URL

    const html = `
        <tr>
            <td>${number + 1}</td>
            <td>${Na}</td>
            <td>${DM}</td>
            <td>${numb}</td>
            <td>${pri}</td>
            <td><img src="${imgUrl}" alt=""></td>
            <td>
                <button>Edit</button>
                <button  class="btn-remove">Delete</button>
            </td>
        </tr>
    `;
    Display.insertAdjacentHTML('beforeend', html);
}

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("input").addEventListener("click", function () {
        const modal = document.getElementById("modal");
        modal.style.display = "block";
    });

    document.getElementById("close").addEventListener("click", function () {
        const modal = document.getElementById("modal");
        modal.style.display = "none";
    });




})


document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("create").addEventListener("click", function () {
        const nameInput = document.getElementById('name').value;
        const numberInput = document.getElementById('number').value;
        const imgInput = document.getElementById('img').files[0];
        const dmInput = document.getElementById('Dm').value;
        const priceInput = document.getElementById('price').value;

        let Nu = lenght()
        console.log(Nu)
        create_pr(Nu, nameInput, dmInput, numberInput, priceInput, imgInput);

    })





})



function lenght() {
    const TableRow = document.getElementById("body")
    const row = TableRow.getElementsByTagName("tr")
        ;
    return row.length;




}
function create_pr(nu) {
    const Display = document.getElementById("body")
    const html = ` <tr>
                       <td>${nu + 1}</td>
                                <td>Bộ keycap Wukds Summer Street</td>
                                <td>KeyCap</td>
                                <td>2</td>
                                <td>15.500.000 đ</td>
                                <td><img src="https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/1-1696133505980.png?v=1696133512800"
                                        alt=""></td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>`
    Display.insertAdjacentHTML('beforeend', html);




}


document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("create").addEventListener("click", function () {
        let Nu = lenght()
        console.log(Nu)
        create_pr(Nu);

    })





})
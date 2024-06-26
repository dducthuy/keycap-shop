
document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("createAccountBtn").addEventListener("click", function () {
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        const emailRegex = /^[a-zA-Z0-9]+@gmail\.com$/;
        ;
        const phoneRegex = /^0[0-9]{9,10}$/;
        const passwordRegex = /^.{8,}$/


        if (!emailRegex.test(email)) {
            alert("Email không hợp lệ!");
            return;
        }

        if (!phoneRegex.test(phone)) {
            alert("Số điện thoại không hợp lệ!");
            return;
        }

        if (!passwordRegex.test(password)) {
            alert("Mật khẩu phải có ít nhất 6 ký tự, bao gồm cả chữ và số!");
            return;
        }

        if (password !== confirmPassword) {
            alert("Mật khẩu nhập lại không khớp!");
            return;
        }

        alert("Tạo tài khoản thành công!");
    });



})
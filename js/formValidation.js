document.getElementById("bookingForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var startDate = new Date(document.getElementById("startDate").value);
    var endDate = new Date(document.getElementById("endDate").value);
    if (endDate <= startDate) {
        alert("End Date must be later than Start Date.");
        return;
    }
    alert("Booking successful!");
});

$(document).ready(function () {
    const passReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/;
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneReg = /^[0-9]{10}$/;

    $("#registerForm").on("submit", function (e) {
        e.preventDefault();
        let isValid = true;

        if ($("#fullName").val().trim() === "") {
            $("#fullNameError").html(`<span class="text-danger">Full Name is required.</span>`);
            isValid = false;
        } else {
            $("#fullNameError").html("");
        }

        if (!phoneReg.test($("#contact").val())) {
            $("#contactError").html(`<span class="text-danger">Contact number must be 10 digits.</span>`);
            isValid = false;
        } else {
            $("#contactError").html("");
        }

        if ($("#dob").val() === "") {
            $("#dobError").html(`<span class="text-danger">Date of Birth is required.</span>`);
            isValid = false;
        } else {
            $("#dobError").html("");
        }

        if (!emailReg.test($("#email").val())) {
            $("#emailError").html(`<span class="text-danger">Invalid email format.</span>`);
            isValid = false;
        } else {
            $("#emailError").html("");
        }

        const password = $("#password").val();
        if (!passReg.test(password)) {
            $("#passwordError").html(`<span class="text-danger">Password must be 8-15 characters long, include uppercase, lowercase, number, and special character.</span>`);
            isValid = false;
        } else {
            $("#passwordError").html(`<span class="text-success">Password is valid.</span>`);
        }

        if ($("#gender").val() === "") {
            $("#genderError").html(`<span class="text-danger">Please select a gender.</span>`);
            isValid = false;
        } else {
            $("#genderError").html("");
        }

        if (isValid) {
            $("#registerModal").modal('hide');

            $("#registerForm")[0].reset();

            setTimeout(() => {
                $("#loginModal").modal('show');
            }, 500);
        }
    });
});



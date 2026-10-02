/* =================================
   PORTIFY AUTHENTICATION
================================= */


/* =================================
   REGISTER
================================= */

const registerForm =
    document.getElementById("registerForm");


if (registerForm) {

    registerForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name")
                .value
                .trim();


            const email =
                document.getElementById("registerEmail")
                .value
                .trim();


            const password =
                document.getElementById("registerPassword")
                .value;


            const confirmPassword =
                document.getElementById("confirmPassword")
                .value;


            /* Check password */

            if (password.length < 6) {

                alert(
                    "Password must contain at least 6 characters."
                );

                return;
            }


            /* Check matching passwords */

            if (password !== confirmPassword) {

                alert(
                    "Passwords do not match."
                );

                return;
            }


            /* Create user object */

            const user = {

                name: name,

                email: email,

                password: password

            };


            /* Save user */

            localStorage.setItem(
                "portifyUser",
                JSON.stringify(user)
            );


            alert(
                "Account created successfully!"
            );


            /* Go to login */

            window.location.href =
                "login.html";

        }
    );

}
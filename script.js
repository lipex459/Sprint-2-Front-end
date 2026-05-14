window.onload = function () {
    if (window.location.pathname.includes("index.html") || 
        window.location.pathname === "/") {

        const logo = document.querySelector(".logo");

        let hue = 0;

        if (logo) {

            setInterval(() => {

                hue += 2;

                logo.style.color =
                `hsl(${hue}, 100%, 60%)`;

            }, 30);

        }

    }
    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", function(event) {

            event.preventDefault();

            alert("Login realizado com sucesso! 🚀");

            window.location.href = "../index.html";

        });

    }

};
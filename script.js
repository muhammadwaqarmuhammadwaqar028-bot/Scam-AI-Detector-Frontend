// URL Scanner
document.querySelectorAll(".card button")[0].addEventListener("click", async function () {
    const url = document.querySelector(".card input").value.trim();

    if (url === "") {
        alert("Please enter a website URL!");
        return;
    }

    try {
        const response = await fetch("YOUR_BACKEND_URL/scan-url", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ url: url })
        });

        const result = await response.json();
        alert(JSON.stringify(result, null, 2));

    } catch (error) {
        alert("Backend is not connected yet.");
    }
});


// Message Checker
document.querySelectorAll(".card button")[1].addEventListener("click", async function () {
    const message = document.querySelectorAll(".card textarea")[0].value.trim();

    if (message === "") {
        alert("Please enter a message!");
        return;
    }

    try {
        const response = await fetch("YOUR_BACKEND_URL/check-message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: message })
        });

        const result = await response.json();
        alert(JSON.stringify(result, null, 2));

    } catch (error) {
        alert("Backend is not connected yet.");
    }
});


// Email Checker
document.querySelectorAll(".card button")[2].addEventListener("click", async function () {
    const email = document.querySelectorAll(".card textarea")[1].value.trim();

    if (email === "") {
        alert("Please enter email content!");
        return;
    }

    try {
        const response = await fetch("YOUR_BACKEND_URL/check-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: email })
        });

        const result = await response.json();
        alert(JSON.stringify(result, null, 2));

    } catch (error) {
        alert("Backend is not connected yet.");
    }
});

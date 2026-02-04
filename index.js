fetch("data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // ===========Buttons===========
        const buttons = [
            document.getElementById("buttonOne"),
            document.getElementById("buttonTwo"),
            document.getElementById("buttonThree"),
            document.getElementById("buttonFour"),
        ];

        // ===========Circle Text===========
        const circleText = document.getElementById("circleText");

        data.forEach((item, index) => {
            if (!buttons[index]) return;
            // ===========Fill button text from JSON===========
            const icon = buttons[index].querySelector("img");
            const h3 = buttons[index].querySelector("h3");
            const span = buttons[index].querySelector("span");

            icon.src = item.icon;
            h3.textContent = item.category;
            span.textContent = item.score;

            // ==========Click Behavior===========
            buttons[index].addEventListener("click", () => {
                // ==========Change Circle Text===========
                circleText.textContent = item.score;
            })
        })
    })
    .catch(err => console.error(err));
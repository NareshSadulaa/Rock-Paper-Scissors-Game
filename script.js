const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image"),
    restartBtn = document.querySelector(".restart-btn");

optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        optionImages.forEach((img) => img.classList.remove("active"));
        image.classList.add("active");

        gameContainer.classList.add("start");

        setTimeout(() => {
            gameContainer.classList.remove("start");

            let imageSrc = e.target.querySelector("img").src;
            userResult.src = imageSrc;

            let randomNumber = Math.floor(Math.random() * 3);
            let cpuImages = ["rock.png", "paper1.png", "scissors.png"];
            cpuResult.src = cpuImages[randomNumber];

            let cpuValue = ["R", "P", "S"][randomNumber];
            let userValue = ["R", "P", "S"][index];

            let outcomes = {
                RR: "Draw",
                RP: "Computer",
                RS: "User",
                PP: "Draw",
                PR: "User",
                PS: "Computer",
                SS: "Draw",
                SP: "User",
                SR: "Computer"
            };

            let outComeValue = outcomes[userValue + cpuValue];
            result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!`;

        }, 1000);
    });
});

restartBtn.addEventListener("click", () => {
    result.textContent = "Let's Play";
    userResult.src = "rock.png";
    cpuResult.src = "rock.png";
    optionImages.forEach((img) => img.classList.remove("active"));
});
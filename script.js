document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");

    function checkPosition() {
        elements.forEach((el) => {
            const position = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (position < windowHeight - 100) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkPosition);
    checkPosition();

    const questions = document.querySelectorAll(".question_h3");

    questions.forEach((question) => {
        question.addEventListener("click", function () {
            this.classList.toggle("open");
            this.classList.toggle("close");
            const answer = this.nextElementSibling;
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});

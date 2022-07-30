const btnContainer = document.querySelector('.btn-container');
const contentContainer = document.querySelector(".tab-container");
const article = document.querySelector("article");
const articlePhoto = document.querySelector(".article-photo");
const articleText = document.querySelector(".article-text");

const buttons = document.querySelectorAll(".tab-btn");


contentContainer.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
        //remove hidden class from other buttons
        buttons.forEach(function (btn) {

            btn.classList.remove(".hidden");
        });
    }
})


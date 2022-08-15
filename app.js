//target = element that triggers the event
//currenttarget = element that targets the event listener

const about = document.querySelector('.about');
const buttons = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

//get the data id associated with the buttons
//then loop through all the buttons and remove the active class
about.addEventListener('click', function (e) {
    const buttonId = e.target.dataset.id;
    if (buttonId) {
        buttons.forEach(btn => {
            btn.classList.remove("active");
            //use event targeting to add the class to what you're clicking on 
            e.target.classList.add("active");
        })
        articles.forEach(article => {
            article.classList.remove("active");
        })
        const element = document.getElementById(buttonId);
        element.classList.add("active");
    }
});
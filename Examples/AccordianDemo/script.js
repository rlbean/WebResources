//grab the html element -- div tag -- called accordion so we can make changes 
var accordions = document.querySelectorAll('.accordion');

//for each element in the accordions array
accordions.forEach(function(accordion) {
    //adds a click event listener so that we can tell when something happens
    accordion.addEventListener('click', function() {
        //adds the "active" css class to the element when we click on
        //removes it when we click a second time. 
        this.classList.toggle('active');
    });
});

//<div class="accordion">
//<div class="accordion active">
//refer to the css to see how things work 
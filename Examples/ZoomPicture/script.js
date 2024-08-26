// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var apartmentImage = document.getElementsByClassName("dogImage");
var myModalImg = document.getElementById("myModalImg");
var myModalImgCaptionText = document.getElementById("myModalImgCaption");

document.body.onclick = function(e) {
    var clickedEl = window.event ? event.srcElement : e.target;
    while (clickedEl != null) {
        if (clickedEl.className && (" " + clickedEl.className + " ").indexOf("dogImage") != -1) {
            modal.style.display = "block";
            myModalImg.src = clickedEl.src;
            myModalImgCaptionText.innerHTML = clickedEl.alt;
            return;
        }
        clickedEl = clickedEl.parentNode;
    }
}

// Get the <span> element that closes the modal
var closeMyModal = document.getElementsByClassName("closeMyModal")[0];

// When the user clicks on <span> (x), close the modal
closeMyModal.onclick = function() { 
  modal.style.display = "none";
}
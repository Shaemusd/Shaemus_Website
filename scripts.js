const hoverBlob = document.getElementById('hoverBlob');
const navItems = document.querySelectorAll('.w3-bar-item.w3-button');

navItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const itemRect = item.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        
        const blobX = itemRect.left + itemRect.width / 2 + scrollLeft;
        const blobY = itemRect.top + itemRect.height / 2 + scrollTop;

        console.log(`Moving blob to X: ${blobX}, Y: ${blobY}`); // Debugging

        // Move the blob to the center of the hovered menu item
        hoverBlob.style.left = `${blobX}px`;
        hoverBlob.style.top = `${blobY}px`;
        hoverBlob.style.transform = 'translate(-50%, -50%) scale(1)';

        // Optionally, change the blob's color
        hoverBlob.style.backgroundColor = 'rgba(255, 99, 71, 0.8)';
    });

    item.addEventListener('mouseleave', () => {
        hoverBlob.style.transform = 'translate(-50%, -50%) scale(0)'; // Hide the blob when not hovering
    });
});


// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

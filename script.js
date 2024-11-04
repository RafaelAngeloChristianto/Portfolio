$(document).ready(function() {
    let lastScrollPosition = 0; 
    
    $(window).on("scroll", function() {
        let currentScrollPosition = $(this).scrollTop(); 

        if (currentScrollPosition > lastScrollPosition) {
            $(".wave").fadeOut()
            // $(".wave").css({"display": "none"});
        } 
        else if (currentScrollPosition === 0) {
            $(".wave").fadeIn()
            // $(".wave").css({"display": "block"});
        }

        lastScrollPosition = currentScrollPosition; 
    });
});




function copyToClipboard() {
    const textToCopy = document.getElementById("phone_number").textContent;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert("Text copied to clipboard!");
    }).catch(err => {
      console.error("Could not copy text: ", err);
    })
}

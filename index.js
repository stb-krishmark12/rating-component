let num = 0;

function colorchange(ratingId) {
    var ratingButton = document.getElementById(ratingId);
    ratingButton.style.backgroundColor = "hsl(25, 97%, 53%)";
    num = parseInt(ratingId); // Convert ratingId to integer and assign to num
}

function rating() {
    var text = document.getElementById("text");
    text.textContent = "You gave " + num + " out of 5.";

    document.getElementById("ratingValue").textContent = num; 
    window.location.href = "thankyou.html";

}

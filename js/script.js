$('.carousel').slick({
    dots: true,
    arrows: false,
});
$('.products').slick({
    arrows: false,
});

document.getElementById("dropdownMenu");

function dropdownMenu() {
    var dropdown = document.getElementById("dropdownMenu");
    var dropdownButton = document.getElementById("dropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
        dropdownButton.style.backgroundColor = "darkgrey";
    } else {
        dropdown.style.display = "block";
        dropdownButton.style.backgroundColor = "white";
        console.log("nope")
    }
}
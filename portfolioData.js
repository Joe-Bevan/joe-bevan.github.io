
window.onload = function() {

    var thumbnails = [
        "Images/Portfolio/Project_1.jpg",
        "Images/Portfolio/Honeycomb.gif",
        "Images/Placeholder.png"
    ];

    var img = new Image(200,200);
    img.src = thumbnails[0];
    document.getElementById('Project1').appendChild(img);
    
}

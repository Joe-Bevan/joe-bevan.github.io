
class Project {
    constructor(ID, img) {
        this.projectID = ID;
        this.image = new Image(200,200);

        // Set the image and inject it into the HTML
        this.image.src = img;
        document.getElementById(this.projectID).appendChild(this.image);
    }
}


window.onload = function() {

    var thumbnails = [
        "Images/Placeholder.png",
        "Images/Portfolio/Project_1.jpg",
        "Images/Portfolio/Honeycomb.gif"
        
    ];

    var Projects = [ 
        new Project("LD40", "Images/Portfolio/Project_1.jpg"),
        new Project("Honeycomb", "Images/Portfolio/Honeycomb.gif")
    ]

   
 
}




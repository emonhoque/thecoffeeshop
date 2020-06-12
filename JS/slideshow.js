var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 4000;	// Time Between Switch
	 
// Image List
images[0] = "images/bg-image-1.jpg";
images[1] = "images/bg-image-2.jpeg";
images[2] = "images/bg-image-3.jpg";
images[3] = "images/bg-image-4.jpg";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	if(i < images.length - 1){
	  i++; 
	} else { 
		i = 0;
	}
// Set Time
	setTimeout("changeImg()", time);
}
// Window Reload
window.onload=changeImg;
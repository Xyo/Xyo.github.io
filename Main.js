var myImage = document.querySelector('img');
var myImageReal = document.getElementById("image");

myImageReal.onclick = function(event) {
    var mySrc = myImage.getAttribute('src');
    var title = document.getElementById("mainTitle");
    if(mySrc === 'monkey.jpg') {
      myImage.setAttribute ('src','puppy.jpg');
      title.innerHTML = "Click the puppy.";
    } else {
      myImage.setAttribute ('src','monkey.jpg');
      title.innerHTML = "Click the monkey.";
    }
}
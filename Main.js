var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    var title = document.getElementById("mainTitle");
    if(mySrc === 'monkey.png') {
      myImage.setAttribute ('src','puppy.png');
      title.innerHTML = "Click the puppy.";
    } else {
      myImage.setAttribute ('src','monkey.png');
      title.innerHTML = "Click the monkey.";
    }
}
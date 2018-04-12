var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'monkey.png') {
      myImage.setAttribute ('src','puppy.png');
    } else {
      myImage.setAttribute ('src','monkey.png');
    }
}
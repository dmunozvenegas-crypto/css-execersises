const img = new Image();
img.onload = function (){
    alert(this.width + 'x' + this.height);
}


img.src='images/image0.jpeg'
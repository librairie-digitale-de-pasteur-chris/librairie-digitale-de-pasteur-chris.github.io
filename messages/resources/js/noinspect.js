

    $(document).bind("contextmenu",function(e) {
     e.preventDefault();
    });
    
    $(document).keydown(function(e){
        if(e.which === 123){
           return false;
        }
    });


  document.onkeydown = function(e) {
    if(event.keyCode == 123) {
     return false;
    }
    if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
     return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
     return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
     return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
     return false;
    }
    if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)){
      return false;
    }
    if(e.ctrlKey && e.keyCode == 'H'.charCodeAt(0)){
       return false;
    }
    if(e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)){
       return false;
    }
    if(e.ctrlKey && e.keyCode == 'F'.charCodeAt(0)){
       return false;
    }
    if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
    return false;
    }
    }
        document.addEventListener('keydown', function() {
  if (event.keyCode == 123) {
    alert("This function has been disabled to prevent you from stealing my code!");
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
    alert("This function has been disabled to prevent you from stealing my code!");
    return false;
  } else if (event.ctrlKey && event.keyCode == 85) {
    alert("This function has been disabled to prevent you from stealing my code!");
    return false;
  }
}, false);

if (document.addEventListener) {
  document.addEventListener('contextmenu', function(e) {
    alert("This function has been disabled to prevent you from stealing my code!");
    e.preventDefault();
  }, false);
} else {
  document.attachEvent('oncontex<<tmenu', function() {
    alert("This function has been disabled to prevent you from stealing my code!");
    window.event.returnValue = false;
  });
}
        window.setInterval(function(){
    var frame = document.getElementById("frame");
    if(frame.src  !== expectedSource){
        window.location.href = "unauthorized.html" // or something like that
    }
}, 300);

// load iframe
window.onload = function(){
   var frame = document.createElement("iframe");
   document.body.insertBefore(frame, container); // container implies an existin DOM element 
   frame.src = expectedSource; // you will need some way to get the expected source and load it
}
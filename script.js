function music(){
    var music=document.getElementById("music");
    var ply=document.getElementById("icon");
    if(music.paused)
    {
        music.play();
     ply.src="pause.jpg";    }
    else
    {
      music.pause();
      ply.src="play.jpg";
    }
      
    

}
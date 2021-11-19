var video =  document.querySelector("#player1");
video.volume  = 1;
window.addEventListener("load", function() {
	console.log("Good job opening the window")
});
document.querySelector("#play").addEventListener("click",function(){
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	video.play();
});
document.querySelector("#pause").addEventListener("click",function(){
 video.pause();
});
document.querySelector("#slower").addEventListener("click",function(){
	video.playbackRate *= 0.95;
	console.log(video.playbackRate);
});
document.querySelector("#faster").addEventListener("click",function(){
	video.playbackRate /= 0.95;
	console.log(video.playbackRate);
});
document.querySelector("#skip").addEventListener("click",function(){
	video.currentTime = video.currentTime + 15;
	if(video.currentTime >= video.duration)
	{
		video.currentTime = 0;
	}
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click",function(){
	if(video.muted == false)
	{
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute"
	}
	else{
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute"
	}
});

document.querySelector("#slider").addEventListener("click",function(){
	console.log("In slider");
	console.log(this.value);
	video.volume = this.value/100;
	document.querySelector("#volume").innerHTML = this.value + "%";

});
document.querySelector("#orig").addEventListener("click",function(){
	video.classList.remove("oldSchool");
});
document.querySelector("#vintage").addEventListener("click",function(){
	video.classList.add("oldSchool");
});



// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });


// alert("hi") for testing that it works as expected


/*const box = document.querySelectorAll(".drum");
box.forEach(box =>{
	box.addEventListener("click", handletClick);
})

function handletClick(){
	alert("clicked")

}*/

// Another way to solve this is by doing the following:

// Declaring a variable that containts the length of the number 
// of buttons elements in the class called '.drum'

var numberOfButtons = document.querySelectorAll(".drum").length;
// let arrayDrum = ["w", "a", "s", "d", "j", "k", "l"];
for (var position=0; position < numberOfButtons; position++){
	document.querySelectorAll(".drum")[position].addEventListener("click", function (){
		// this.style.color ="yellow";
		//alert("We got clicked the button");
		/*let audio = new Audio('./sounds/tom-1.mp3');
		audio.play();*/
		var buttonInnerHTML = this.innerHTML;
		// Implementing a new function for changing the color of the pressed key
		// var colorText = this.style.color;
		makeSound(buttonInnerHTML);
	
		
	});
}
document.addEventListener("keypress", function(event) {
	makeSound(event.key);
	//changeColor(event.key);
	buttonAnimation(event.key);

});

function makeSound(key){
	switch	(key) {
		case "w":
			
			let audio = new Audio('./sounds/tom-1.mp3');
			audio.play();
			break;
		case "a" :
			
			//this.style.color ="blue";
			let audio2 = new Audio('./sounds/tom-2.mp3');
			audio2.play();
			break;
		case "s" :
			//this.style.color ="green";
			let audio3 = new Audio('./sounds/tom-3.mp3');
			audio3.play();
			break;
		case "d" :
		//this.style.color ="violet";
			let audio4 = new Audio('./sounds/tom-4.mp3');
			audio4.play();
			break;
		case "j" :
		//this.style.color ="white";
			let audio5 = new Audio('./sounds/snare.mp3');
			audio5.play();
			break;
		case "k" :
		//this.style.color ="black";
			let audio6 = new Audio('./sounds/crash.mp3');
			audio6.play();
			break;
		case "l" :
		//this.style.color ="red";
			let audio7 = new Audio('./sounds/kick-bass.mp3');
			audio7.play();
			break;
		default:
			console.log("Sorry, we are out for now");
		}
}

function buttonAnimation(currentKey) {
	var activeButton = document.querySelector("." + currentKey);
	activeButton.classList.add("pressed");
	setTimeout( function() {
		activeButton.classList.remove("pressed");}, 100);
}

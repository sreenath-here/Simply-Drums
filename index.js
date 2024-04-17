// creating click event listeners
for (var i =0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click", function ()
    {
        var thisId= this.id;
        console.log(this.id);

        // calling sound function
        makeSound(thisId);

        // button animation
        buttonAnimation(thisId);

    });
}

// creating keyboard event listeners
document.addEventListener("keydown", function (event) { 
    // calling sound function
    makeSound(event.key);

    // button animation
    buttonAnimation(event.key);
})

function makeSound(key)
{
    switch(key)
        {
            case "a":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
        
            case "s":
                var tom2 = new Audio("sounds/tom-2.mp3")
                tom2.play();
                break;

            case "d":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            
            case "f":
                var tom4 = new Audio("sounds/tom-4.mp3")
                tom4.play();
                break;

            case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
                
            case "k":
                var crash = new Audio("sounds/crash.mp3")
                crash.play();
                break;

            case "l":
                var kickbass = new Audio("sounds/kick-bass.mp3")
                kickbass.play();
                break;

            default:
        }
}

function buttonAnimation(currentKey)
{
    var activeButton = document.querySelector("." + currentKey);
    var activeButtonTag = document.querySelector("#" + currentKey);

    activeButton.classList.add("pressed");
    activeButtonTag.style.color = "#4CCD99";

    setTimeout(function()
    {
        activeButton.classList.remove("pressed");
        activeButtonTag.style.color = "white";  
    }, 100);
}

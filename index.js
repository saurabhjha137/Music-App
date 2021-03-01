window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#60d394",
        "#d36060",
        "#db8beb",
        "#d3d160",
        "#606bd3",
        "#60c2d3",
        "#774d4d",
        "#c94cf0",
        "#166574",
        "#45f771"
    ];

    document.addEventListener("keypress", function(event) {
            if (event.keyCode == 48) {
                index = 0;
                sounds[index].currentTime = 0;
                sounds[index].play();
                createBubble(index);
                
            }else if (event.keyCode == 49) {
                index = 1;
                sounds[index].currentTime = 0;
                sounds[index].play();
                createBubble(index);
                
            }else if (event.keyCode == 50) {
                index = 2;
                sounds[index].currentTime = 0;
                sounds[index].play();
                createBubble(index);
                
            }else if (event.keyCode == 51) {
                index = 3;
                sounds[index].currentTime = 0;
                sounds[index].play();
                createBubble(index);
                
            }else if (event.keyCode == 52) {
                index = 4;
                sounds[index].currentTime = 0;
                sounds[index].play();
                createBubble(index);
                
            }else if (event.keyCode == 53) {
                index = 5;
                sounds[index].currentTime = 0;
                sounds[index].play();
                createBubble(index);
                
            }else if (event.keyCode == 54) {
                index = 6;
                sounds[index].currentTime = 0;
                sounds[index].play();
                createBubble(index);
                
            }else if (event.keyCode == 55) {
                index = 7;
                sounds[index].currentTime = 0;
                sounds[index].play();
                createBubble(index);
                
            }else if (event.keyCode == 56) {
                index = 8;
                sounds[index].currentTime = 0;
                sounds[index].play();
                createBubble(index);
                
            }else if (event.keyCode == 57) {
                index = 9;
                sounds[index].currentTime = 0;
                sounds[index].play();
                createBubble(index);
                
            }else{
            alert('You press something other than Mentioned Below key');
                }
        });

    pads.forEach((pad, index) => {
        pad.addEventListener("click", function () {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubble(index);
        });
    });


    const createBubble = index => {
        //Create bubbles
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = `jump 1s ease`;
        bubble.addEventListener("animationend", function () {
            visual.removeChild(this);
        });

    };
});

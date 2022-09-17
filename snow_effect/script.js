const snowContainer = document.querySelector(".snow-container");

const createSnow = () => {
    const snow = document.createElement("span")
    snow.classList.add("snow")

    minSize = 5;
    maxSize = 10;

    //random snow
    let snowSize = Math.random() * (maxSize - minSize) + minSize;

    snow.style.width = snowSize + "px";
    snow.style.height = snowSize + "px";

    //snow position when falling down
    snow.style.left = Math.random() *100 + "%";

    //disappear after 10s
    setTimeout(()=>{
        snow.remove();
    },10000)

    snowContainer.appendChild(snow);

    
};

setInterval(createSnow,100);
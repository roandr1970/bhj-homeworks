const image = document.getElementById("cookie");

const counter = document.getElementById("clicker__counter");

function changeSizes() {
    if (image.width === 200) {
        image.width = 300;
    } else {
        image.width = 200;
    }
    
    counter.textContent = Number(counter.textContent) + 1;
};


image.onclick = changeSizes;




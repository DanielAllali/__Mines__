/* cells id(so i dont write 36 lines) */
let cells = [];
for (let times = 1; times <= 36; times++) {
    cells[times] = "clean";
    window["cell" + times] = document.getElementById("cell" + times);
    window["cell" + times].addEventListener("click", function () {
        cellClick(times);
    })
}
/* display grid */
let cellNum = 0;
for (let grid = 1; grid <= 6; grid++) {
    for (let gridd = 1; gridd <= 6; gridd++) {
        cellNum++;
        window["cell" + cellNum].style.gridColumn = gridd + "/" + (gridd + 1);
    }
}

/* random bombs */
let randomPlace = [];
for (let times = 0; times <= 2; times++) {
    randomPlaces();
    function randomPlaces() {
        let random1To3 = Math.floor(Math.random(1 - 36) * 36 + 1);
        randomPlace[times] = random1To3;
        for (let timesRun = 0; timesRun <= 2; timesRun++) {
            if (randomPlace[times] == randomPlace[timesRun] && times != timesRun) {
                randomPlaces();
            }
        }
    }
}


/* click checker(if pressed on bomb) */
let points = document.getElementById("points");
let pointsNum = 0;
let wrapper = document.getElementById("wrapper")
let winLose = document.getElementById("winLose")
let winLosePoints = document.getElementById("winLosePoints")


function cellClick(location) {
    for (let t = 0; t <= 2; t++) {
        if (randomPlace[t] == location) {
            window["cell" + location].style.background = "none";
            window["cell" + location].style.backgroundImage = "url('./images/bomb.png')";
            window["cell" + location].style.backgroundSize = "cover";

            wrapper.style.display = "block";
            winLose.innerHTML = "Lose";
            winLose.style.color = "red";
            winLosePoints.innerHTML = "You had " + pointsNum + " points";

            return;
        }
    }
    pointsNum += 1;
    points.innerHTML = pointsNum;
    window["cell" + location].style.display = "none";


    if (pointsNum > 0 && pointsNum < 4) {
        points.style.color = "green";
    }
    else if (pointsNum > 4 && pointsNum < 8) {
        points.style.color = "lightgreen";
    }
    else if (pointsNum > 8 && pointsNum < 12) {
        points.style.color = "yellow";
    }
    else if (pointsNum > 12 && pointsNum < 16) {
        points.style.color = "orange";
    }
    else if (pointsNum > 20 && pointsNum < 24) {
        points.style.color = "orange";
    }
    else if (pointsNum > 24 && pointsNum < 28) {
        points.style.color = "red";
    }
    else if (pointsNum > 30 && pointsNum < 32) {
        points.style.color = "darkred";
    }
    else if (pointsNum == 33) {
        points.style.color = "black";
        points.style.fontWeight = "bold";


        wrapper.style.display = "block";
        winLose.innerHTML = "Win";
        winLose.style.color = "Gold";
        winLosePoints.innerHTML = "You had " + pointsNum + " points";
    }
}
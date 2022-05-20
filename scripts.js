const levels = [
    {
        maze: [
            [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
            [1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1],
            [1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1],
            [1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1],
            [1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1],
            [1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1],
            [1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1],
            [1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1],
            [1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1],
            [1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1],
            [1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        wallsSize: 50,
        exit: [0,18],
        playerStartPos: [0,1]
    },
    {
        maze: [
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
            [1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1],
            [1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1],
            [1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1],
            [1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1],
            [0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1],
            [1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1],
            [1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1],
            [1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        wallsSize: 50,
        exit: [10,19],
        playerStartPos: [6,0]
    },
    {
        maze: [
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1],
            [1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1],
            [1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1],
            [1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1],
            [1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1],
            [1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1],
            [1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1],
            [1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1],
            [1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1],
            [1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1],
            [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        wallsSize: 50,
        exit: [1,0],
        playerStartPos: [11,1]
    },
    {
        maze: [
            [1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1],
            [1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1],
            [1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1],
            [1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1],
            [1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1],
            [1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1],
            [1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1],
            [1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1],
            [1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1],
            [1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        wallsSize: 50,
        exit: [0,2],
        playerStartPos: [6,7]
    },
    {
        maze: [
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1],
            [1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1],
            [1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1],
            [1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1],
            [1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1],
            [1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1],
            [1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1],
            [1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1],
            [1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1],
            [1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1],
            [1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1],
            [1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1],
            [1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1],
            [1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1],
            [1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1],
            [1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1],
            [1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1],
            [1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1],
            [1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1],
            [1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1],
            [1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1],
            [1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1],
            [1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        wallsSize: 25,
        exit: [0,35],
        playerStartPos: [23,1]
    },
    // to do
    /*{
        maze: [
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        wallsSize: 25,
        exit: [0,35],
        playerStartPos: [23,1]
    },*/
];
let currentLevel = 1;
let playerCurrentPos = null;
let previousPos = [];
let step = 0;
let sideBarHidden = true; 
const svg = document.querySelector('svg');
let pt = svg.createSVGPoint();

const drawMaze = (mazeScheme, wallsSize) => {
    playerCurrentPos = [...levels[currentLevel-1].playerStartPos];
    let walls = `<rect width=${1000} height=${1000} x="0" y="0" fill="#FFF" stroke="none" stroke-width="5"/>`;
    for (let i = 0; i < mazeScheme.length; i++) {
        for (let j = 0; j < mazeScheme[i].length; j++) {
            if (mazeScheme[i][j] == 1) {
                walls += `<rect width=${wallsSize} height=${wallsSize} x=${j*wallsSize} y=${i*wallsSize} fill="#e9c34f" stroke="#e9c34f" stroke-width="5"/>`;
            }
        }
    }
    // add a player
    walls +=`<circle cx=${(wallsSize*levels[currentLevel-1].playerStartPos[1]) + wallsSize/2} cy=${(wallsSize*levels[currentLevel-1].playerStartPos[0]) + wallsSize/2} r=${wallsSize/2-6} fill="#EF5F3E" stroke="none" stroke-width="5" id="player"/>`;
    // define step
    step = wallsSize;
    document.querySelector("#maze").innerHTML = walls;
}


const fillSideBar = () => {
    let content = '<ul>';
    for (let i = 0; i < levels.length; i++) {
        content += `<li id='${i+1}' class='levelName'>Level ${i+1}</li>`;
    }
    content += '</ul>'
    document.querySelector('#levelsDiv').innerHTML += content;
}


const movePlayerWithArrows = (event) => {
    const player = document.querySelector('#player');
    player.style.transition = "0.5s";

    if (currentLevel == 'finish') {
        return false;
    }

    if (playerCurrentPos[0] === levels[currentLevel-1].exit[0] && playerCurrentPos[1] === levels[currentLevel-1].exit[1]) {
        return false;
    }

    if (event.key == 'ArrowUp') {
        if (levels[currentLevel-1].maze[playerCurrentPos[0]-1] != undefined
            && levels[currentLevel-1].maze[playerCurrentPos[0]-1][playerCurrentPos[1]] == 0) {
            //previousPos = [...playerCurrentPos];
            playerCurrentPos[0] -= 1;
            player.style.cy = step * playerCurrentPos[0] + step/2 + 'px';
           // leaveTrail(50);
        } 
    } else if (event.key == 'ArrowDown') {
        if (levels[currentLevel-1].maze[playerCurrentPos[0]+1] != undefined 
            && levels[currentLevel-1].maze[playerCurrentPos[0]+1][playerCurrentPos[1]] == 0) {
           // previousPos = [...playerCurrentPos];
            playerCurrentPos[0] += 1;
            player.style.cy = step * playerCurrentPos[0] + step/2 + 'px';
           // leaveTrail(50);
        } 
    } else if (event.key == 'ArrowLeft') {
      if (levels[currentLevel-1].maze[playerCurrentPos[0]][playerCurrentPos[1]-1] != undefined
          && levels[currentLevel-1].maze[playerCurrentPos[0]][playerCurrentPos[1]-1] == 0) {
          // previousPos = [...playerCurrentPos];
           playerCurrentPos[1] -= 1;
           player.style.cx = step * playerCurrentPos[1] + step/2 + 'px';
           //leaveTrail(50);
       }
    } else if (event.key == 'ArrowRight') {
        if (levels[currentLevel-1].maze[playerCurrentPos[0]][playerCurrentPos[1]+1] != undefined 
            && levels[currentLevel-1].maze[playerCurrentPos[0]][playerCurrentPos[1]+1] == 0) {
           // previousPos = [...playerCurrentPos];
            playerCurrentPos[1] += 1;
            player.style.cx = step * playerCurrentPos[1] + step/2 + 'px';
            //leaveTrail(50);
        } 
    }

    // check whether a player has reached the exit
    if (playerCurrentPos[0] === levels[currentLevel-1].exit[0] && playerCurrentPos[1] === levels[currentLevel-1].exit[1]) {
        window.setTimeout(() => {
            let victoryMessage = `<rect width=${1000} height=${100} x=${0} y=${300-50} fill="#1fde99" stroke="#1fde99" stroke-width="5" id="victoryMessage"/>`
            victoryMessage += `<text x=${450} y=${300} class="victoryMessage">Success!</text>`;
            document.querySelector("#maze").innerHTML += victoryMessage;
        }, 500);
        window.setTimeout(() => {
            changeLevel();
        }, 1500);
    }
}

const changeLevel = () => {
    if (currentLevel-1 < levels.length-1) {
        currentLevel++;
        document.querySelector("#maze").innerHTML = "";
        document.querySelector("#level").textContent = `Level ${currentLevel}`;
        playerCurrentPos = levels[currentLevel-1].playerStartPos;
        drawMaze(levels[currentLevel-1].maze, levels[currentLevel-1].wallsSize);
    } else if (currentLevel-1 == levels.length-1) {
        currentLevel = "finish";
        document.querySelector("#level").textContent = `Last level completed!`;
        document.querySelector("#maze").innerHTML = "";
        document.querySelector('.container').style.display = "none";
        document.querySelector("#victory").style.display = "block";
    }
}

const restartGame = () => {
    currentLevel = 1;
    document.querySelector("#level").textContent = `Level ${currentLevel}`;
    document.querySelector("#maze").innerHTML = "";
    playerCurrentPos = [...levels[currentLevel-1].playerStartPos];
    document.querySelector('.container').style.display = "flex";
    document.querySelector("#victory").style.display = "none";
    drawMaze(levels[currentLevel-1].maze, levels[currentLevel-1].wallsSize);
}

const showLevels = () => {
    if (sideBarHidden) {
        document.querySelector('#levelsDiv ul').style.display = 'block';
        document.querySelector('#levelsDiv').style.width = '250px';
        sideBarHidden = false;
        document.querySelector('#levelsButton').textContent = 'X';
    } else {
        document.querySelector('#levelsDiv ul').style.display = 'none';
        document.querySelector('#levelsDiv').style.width = '0';
        sideBarHidden = true;
        document.querySelector('#levelsButton').textContent = 'Levels';
    }
}

const loadLevel = (event) => {
    if (event.target.className == 'levelName') {
        currentLevel = event.target.id;
        document.querySelector("#level").textContent = `Level ${currentLevel}`;
        playerCurrentPos = [...levels[currentLevel-1].playerStartPos];
        document.querySelector('.container').style.display = "flex";
        document.querySelector("#victory").style.display = "none";
        drawMaze(levels[currentLevel-1].maze, levels[currentLevel-1].wallsSize);
    }
}

// optional functions; I may delete them later
const leaveTrail = (wallsSize) => {
    let trail = null;
    if (maze[previousPos[0]][previousPos[1]] == 0) {
        trail = `<rect width=${wallsSize-40} height=${wallsSize} x=${previousPos[1]*(wallsSize+20)} y=${previousPos[0]*(wallsSize)} fill="#e9664f" stroke="#e9664f" stroke-width="5"/>`;
        maze[previousPos[0]][previousPos[1]] = 2;
    } else if (maze[previousPos[0]][previousPos[1]] == 2) {
        trail = `<rect width=${wallsSize-40} height=${wallsSize} x=${previousPos[1]*(wallsSize+20)} y=${previousPos[0]*(wallsSize)} fill="#fff" stroke="#fff" stroke-width="5"/>`
        maze[previousPos[0]][previousPos[1]] = 0;
    }
    document.querySelector("#maze").innerHTML += trail;
}

// Move player with a mouse cursor
const followCursor = (event) => {
    const player = document.querySelector('#player');
   // player.style.left = event.clientX + 'px';
   // player.style.top = event.clientY + 'px';
     player.style.cx = event.clientX - 0 + 'px';
     player.style.cy = event.clientY - 0 + 'px';
}

const cursirPoint = (event) =>{
    pt.x = event.clientX;
    pt.y = event.clientY;
    return pt.matrixTransform(svg.getScreenCTM().inverse()) 
}


document.addEventListener("DOMContentLoaded", () => {
    fillSideBar();
    drawMaze(levels[currentLevel-1].maze, levels[currentLevel-1].wallsSize);
});
window.addEventListener("keydown", movePlayerWithArrows);
document.querySelector("#restartGameButton").addEventListener('click', restartGame);
document.querySelector("#levelsButton").addEventListener('click', showLevels);
document.querySelector('#levelsDiv').addEventListener('click', loadLevel);


//document.querySelector('#maze').addEventListener('mousemove', followCursor);
/*svg.addEventListener('mousemove', (event) => {
    const loc = cursirPoint(event);
    const player = document.querySelector('#player');

    player.style.cx = loc.x  + 'px';
    player.style.cy = loc.y  + 'px';
   // console.log(loc);
}, false);*/
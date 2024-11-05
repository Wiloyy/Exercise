let score = 0;
let scoreElement = null;

export function init() {
    scoreElement = null;
    scoreElement = document.createElement('p');
    scoreElement.innerHTML = `Score: ${mosraScore()}`;
    
    document.body.appendChild(scoreElement);
}

function mosraScore() {
    score++;
    return score;
}   
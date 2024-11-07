let score = 0;
let scoreElement = null;

export function init() {
    scoreElement = null;
    scoreElement = document.createElement('p');
    scoreElement.innerHTML = `Score: ${mosraScore()}`;
    scoreElement.id = score
    scoreElement.style.position = 'fixed';
    scoreElement.style.top = '0';
    scoreElement.style.padding = '10px';
    scoreElement.style.textAlign = 'center';
    scoreElement.style.fontSize = '20px';

    document.body.appendChild(scoreElement);
}

function mosraScore() {
    score++;
    return score;
}   
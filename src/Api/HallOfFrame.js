const url = "http://brodaleee.alwaysdata.net/?scores=";

export function load() {
    return fetch(`${url}all`)
        .then((response) => response.json())
        .catch((error) => console.log(error));
}

export function sendWinner(gamePost) {
    const http = new XMLHttpRequest();
    const link = `${url}add`;
    const params = `winner=${gamePost.winner}&score=${gamePost.score}&turnnumber=${gamePost.turn}&forscore=${gamePost.forscore}`;
    http.open('POST', link, true);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.send(params);
}
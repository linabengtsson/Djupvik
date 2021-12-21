import {getWeather} from './getdata.js';

main()

function main() {
    const P = document.createElement('p')
    document.querySelector('#weather').appendChild(P);
    P.innerHTML = "I Djupvikshamn är det under nästkommande timme "
    getWeather().then(temp=>getCel(temp, P))
   
}

function getCel(temp, P) {
    P.innerHTML += temp + " grader varmt."
}

const fetch = require("node-fetch");
fetch('http://192.168.0.77:20000/api/TOWN', {mode: 'no-cors'})
.then((response) => {
    return response.json();
})
.then((myJson) => {
    for(let town of myJson){
        
        console.log(town.TOWN_CODE);
    }
});


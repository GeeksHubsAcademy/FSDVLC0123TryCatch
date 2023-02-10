
//Voy a usar axios
const axios = require('axios');

const bringPokemon = async (nombre) => {

    try {
        
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`);

        console.log(res);

        
    } catch (error) {

        console.log(error);

    }


}

bringPokemon("articuno");
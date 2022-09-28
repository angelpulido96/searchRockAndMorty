import axios from "axios";

const rickAndMortyapi = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/character/'
})

export default rickAndMortyapi;
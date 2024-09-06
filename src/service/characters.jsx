import CryptoJS from "crypto-js"

const timeStamp = new Date().getTime()
const private_api_key = '90c666d31da8e04af9205cdde3c56663e4a2a0f0'
const public_api_key = '6d11e926679022012c5eee3d3f40a9a9'
const hash = CryptoJS.MD5(timeStamp + private_api_key + public_api_key).toString();

    export const reqCharacters = async (pagina) => {
        const offset = (pagina-1)*20
        const resp = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${public_api_key}&hash=${hash}&offset=${offset}`)
        const {data} = await resp.json()
        
        return data
    }


import { useEffect, useState } from "react"
import { reqCharacters } from "../service/characters"

export const useCharacters = (pagina) => {
    
    const [characters, setCharacters] = useState()
    const [total, setTotal] = useState();

    useEffect  (() => {
        // si no tiene dependecias, solo se ejecuta la primera carga del componente
        // Si si tiene dependecias, se ejecuta cada que la dependecia cambia
        
    
        reqCharacters(pagina).then((data) => {
            setCharacters(data.results)
            console.log(data.total)
        })
    }, [pagina]/*dependecias*/)


    //retorno del hook es con {} no con ()
    return {
        characters,
        total
    }
}


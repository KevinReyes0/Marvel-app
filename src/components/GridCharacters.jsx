export const GridCharacters = ({characters}) => {
    return(
    <>
        <div className="d-flex flex-row row row-cols-6">
                    {
                        //characters !== undefined &&
                        //si el objto viene nulo se pone ! al principio
                        //!characters &&
                        //caracteres vienen vacios se puebe abrebiar asi   
                        characters &&
                            characters.map((char) => (
                                <div key={char.id}>
                                    <h5 className="text-center">{char.name}</h5>
                                    <img style={{width: '200px'}} src={`${char.thumbnail.path}.${char.thumbnail.extension}`} alt=""></img>
                                </div>
                            ))
                    }
        </div>
    </>
    )

   
}



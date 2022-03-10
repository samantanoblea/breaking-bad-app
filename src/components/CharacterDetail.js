import React, { useContext, useEffect, useState } from 'react';
import { GeneralContext } from '../context/GeneralContext';
import { Link } from 'react-router-dom';
import { URLBase } from '../services/api';

const CharacterDetail = (selectedCharacter) => {
    const { t } = useContext(GeneralContext);
    const [ quote, setQuote ] = useState('');

    const separateName = selectedCharacter.selectedCharacter.name.split(' ');
    const quoteAuthor = separateName.join('+');

    useEffect(()=>{
        fetch(`${URLBase}/quote/random?author=${quoteAuthor}`)
        .then (response => response.json())
        .then (response =>{ 
            let singleQuote = response[0].quote
            setQuote(singleQuote)})
    },[quoteAuthor])

    return(
        <>
            <div className="detail__link">
                <Link to="/"><button className="detail__link--button">{t("main.back")}</button></Link>
            </div>
            <div className="detail__card">
                <img src={selectedCharacter.selectedCharacter.img} alt="img character" className="detail__card--img"/>
                <div className='detail__card--container'>
                    <p className='detail__card--title'>{selectedCharacter.selectedCharacter.name}</p>
                    <p className='detail__card--text'>{t("main.nickname")} {selectedCharacter.selectedCharacter.nickname}</p>
                    <p className='detail__card--text'>{t("main.birthday")} {selectedCharacter.selectedCharacter.birthday}</p>
                    <ul className='detail__card--list'>{selectedCharacter.selectedCharacter.occupation.map((i, index )=>(
                            <li key={index}>{i}</li>
                        ))}
                    </ul>
                    <p className='detail__card--text'>{t("main.portrayed")} {selectedCharacter.selectedCharacter.portrayed}</p>
                    <p className='detail__card--text'>{t("main.appearance")} {selectedCharacter.selectedCharacter.appearance.map(i=>(i)).join(' · ')}</p>
                    <p className='detail__card--text'>{selectedCharacter.selectedCharacter.status}</p>
                    <p className='detail__card--text'>{selectedCharacter.selectedCharacter.name} dixit:</p>
                    <p className='detail__card--quote'>"{quote}"</p>
                </div>
            </div>
        </>
    )
}

export default CharacterDetail



// export async function getPokemons() {
//     try {
//       const response = await fetch("https://pokeapi.co/api/v2/pokemon");
//       if (!response.ok) {
//         return handleError(response.status)
//       }
//       const { results } = await response.json();
//       return results;
//     } catch (err) {
//       if (err instanceof ServerError || err instanceof NotFoundError) {
//         throw err;
//       }
//       throw new NetworkError();
//     }
//   }
  
//   function handleError(status) {
//     if (status === 500) {
//       throw new ServerError();
//     }
//     if (status === 404) {
//       throw new NotFoundError();
//     }
//   }
  
//   export class NetworkError extends Error {
//     constructor() {
//       super('There was a network error. Please try again in a few seconds.');
//     }
//   }
  
//   export class NotFoundError extends Error {
//     constructor() {
//       super('The requested resource was a not found.');
//     }
//   }
  
//   export class ServerError extends Error {
//     constructor() {
//       super('There was a server error.');
//     }
//   }

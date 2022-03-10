import React from 'react';
import { Link } from 'react-router-dom';

const CharacterList = ({apiData}) =>{
    return(
        <div>
            <ul className='list'>
                {apiData.map(i => (
                    <li key={i.char_id} className="list__card">
                        <Link to={`/characterDetail/${i.char_id}`} className="list__card--link">
                            <p className="list__card--name">{i.name}</p> 
                            <img 
                                src={i.img} 
                                alt=""
                                className='list__card--img'
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CharacterList

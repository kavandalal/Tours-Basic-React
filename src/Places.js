import React from 'react';
import {data} from './data.js'
import Place from './Place'

const Places=()=>{
    const [place,setPlace] = React.useState(data);

    const removeEle =(key) =>{
        const newPlace = place.filter((singlePlace) => singlePlace.id !== key);
        setPlace(newPlace);
    }

    return(
        <div>
        {place.map((single) => {
            return <Place key={single.id} {...single} removeEle={removeEle}/>
            
        })}
        </div>
    );
        
};

export default Places ;

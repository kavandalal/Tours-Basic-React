import React from 'react';
import {data} from './data.js'

const Place=()=>{
    const [place,setPlace] = React.useState(data);
    const [showmore,setShowMore] = React.useState('False') // to expand the details
    React.useEffect(()=>{
        setShowMore(!showmore);
    },[])
    const removeEle =(key) =>{
        const newPlace = place.filter((singlePlace) => singlePlace.id != key);
        setPlace(newPlace);
    }
    return(
    <>
        {place.map((single)=>{
            return(
            <React.Fragment >
                <div className='box'>
                    <img src={single.img} alt=" " />
                    <footer className='content'>
                        <div className='info'>
                            <p>{single.pname}</p>
                            <p className="price">${single.price}</p>
                        </div>
                        <div className='detail'>
                            {showmore ? (
                                    <p>{single.details}
                                    <button type='button' className='dtls' onClick={()=>setShowMore(!showmore)}>show less</button>
                                    </p>
                                ):(
                                <p>{single.details.substring(0,125)}...
                                <button type='button' className='dtls' onClick={()=>setShowMore(!showmore)}>show more</button>
                                </p>
                                )
                            }
                        </div>
                        <button type='button' onClick={()=>{removeEle(single.id)}}>Not Interested</button>
                    </footer>
                </div>
            </React.Fragment>
        );
            })}
        </>
    );
        
}


export default Place ;

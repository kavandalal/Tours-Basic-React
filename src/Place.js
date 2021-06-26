import React from 'react'

const Place =({id,pname,img,details,price,removeEle})=>{
    const [showmore,setShowMore] = React.useState(false);
    
    return(
        <div className='box'>
            <img src={img} alt=" " />
            <footer className='content'>
                <div className='info'>
                    <p>{pname}</p>
                    <p className="price">${price}</p>
                </div>
                <div className='detail'>
                    {showmore ? (
                            <p>{details}
                            <button type='button' className='dtls' onClick={()=>setShowMore(!showmore)}>show less</button>
                            </p>
                        ):(
                        <p>{details.substring(0,125)}...
                        <button type='button' className='dtls' onClick={()=>setShowMore(!showmore)}>show more</button>
                        </p>
                        )
                    }
                </div>
                <button type='button' onClick={()=>{removeEle(id)}}>Not Interested</button>
            </footer>
        </div>
    );
}
export default Place;
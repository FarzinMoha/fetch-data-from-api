import React, { useState } from 'react'

// ======== USE THE PROPS OF PARENT (Tours.js) TO CREATE CARD

function Tour(props) {
    const [show , setShow] = useState(false)
    const {userId , id , title , body} = props.tour
  return (
    <div className='tour-list'>
        <div className='tour-picture'></div>
        <h1 className='tour-title'>{title}</h1>
        <div className='tour-id'>
            <p>{id}</p>
            <p>{userId}</p>
        </div>
        <p className='tour-body'>{show ? `${body}` : `${body.substring(0,20)}`  }<button className='showHide'  onClick={()=> setShow(!show)} >{show ? 'show less' :'show more'}</button></p>
        <button onClick={() => props.remove(id)} className='not-intrest-btn'>Not Intresting</button>
    </div>
  )
}

export default Tour
























// import React, { useState } from 'react'

// function Tour(props) {
//     const [show , setShow] = useState(false)
//     const {userId , id , title , body} = props.tour
//   return (
//     <div className='tour-list'>
//         <div className='tour-picture'></div>
//         <h1 className='tour-title' >{title}</h1>
//         <div className='tour-id'>
//             <p>{id}</p>
//             <p>{userId}</p>
//         </div>
//         <p className='tour-body'>{show ? body : `${body.substring(0,40)}` }<button className='showHide' onClick={()=>setShow(!show)}>{show?'show less' : 'show more' }</button></p>
//         <button className='not-intrest-btn'>Not intrest</button>
//     </div>
//   )
// }

// export default Tour
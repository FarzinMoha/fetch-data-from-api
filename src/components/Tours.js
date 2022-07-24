import React from 'react'
import Tour from './Tour'

// ======== SEND PROP TO TOURS.JS FOR CREATING CARD

function Tours(props) {
    const tours = props.list
  return (
    <div className='container'>
        <h1 className='title'>Ours Tours</h1>
        {tours.map((item) =>{
            return <Tour key={item.id} tour={item} remove = {props.remove}/>
        })}
    </div>
  )
}

export default Tours




























// import React from 'react'
// import Tour from './Tour'

// function Tours(props) {
//     const list = props.list
//   return (
//     <div className='container'>
//         {
//             list.map((tour) =>{
//                 return(
//                     <Tour key={tour.id} tour = {tour} />
//                 )
//             })
//         }

//     </div>
//   )
// }

// export default Tours
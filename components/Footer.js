// import React from 'react'

// export default function Footer() {
//     return (
//         <div>
//             <footer className="flex justify-between bg-emerald-700 py-4 items-center">
//                 <a href="career" className='m-1'>Careers</a>
//             </footer>
//         </div>
//     )
// }

export default function Footer(props) {
    return (
      <footer className="flex flex-col justify-center w-full py-3 pl-3 bg-green-400">
        {props.len ? <p > {props.len.length} Location World Wide</p> : <p > 0 Location World Wide</p>
        }</footer>
    )
  }
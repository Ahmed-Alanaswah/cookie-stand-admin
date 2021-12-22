import { hours } from "../data";
// export default function ReportTable(props) {
//   const sales = [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
//   const totalOfTotals= []
  
//   console.log(props.cookiesArray);
//   if (props.cookiesArray.length == 0) {
//     return <h2 className="mt-4 md:text-2xl">No Cookie Stands Available</h2>
//   } else {
//     return (
//       <table className="mt-4 bg-green-500 border border-separate border-green-800 rounded-md table-fixed ">
//         <thead >
//           <tr >
//             <td className="w-1/6 font-bold border border-separate border-green-800">Location</td>
//             {hours.map((hour, index) =>
//               <td key={index} className="w-12 font-bold border border-separate border-green-800">{hour}</td>
//             )}
//             <td className="w-1/6 font-bold border border-separate border-green-800">Totals</td>
//           </tr>
//         </thead>
//         <tbody>
//           {props.cookiesArray.map((cookie, index) =>
//             {  totalOfTotals.push(cookie.total)
              
//               return(
//                 <tr >
//               <td key={index} className="border border-separate border-green-800 ">{cookie.location}</td>
//               {cookie.customerPerHour.map((item, index) =>
//                { sales[index] += item
//                  return( <td key={index} className="border border-separate border-green-800 ">{item}</td>)
//                })}
//               <td key={index} className="border border-separate border-green-800 ">{cookie.total}</td>
//             </tr>
//               )
//             }
//           )}
//         </tbody>
//         <tfoot >
//           <tr >
//             <td className="font-bold border-green-800">Total</td>
//             {sales.map((item,index)=>{
//                 return(<td key ={index} className="font-bold border-green-700 ">{item}</td>)
//             })}
//             <td className="font-bold border-green-800" >{totalOfTotals ? totalOfTotals.reduce((acc,current)=>(acc+current)):0}</td>
//           </tr>
//         </tfoot>
//       </table>
//     )
//   }

// }

import axios from "axios"
import { useState } from "react/cjs/react.development";
const baseUrl ='https://cooke-stand.herokuapp.com/'
const endPoint = baseUrl + 'api/v1/cookie_stands/'
export default function ReportTable(props) {

  const [Branchees1,setBranch] = useState([])
    function config() {
      return {
        headers:{
          'Authorization': `Bearer ${props.token.access}`
        }
      }
  }
    useEffect(() => {
      axios.get(endPoint,config()).then(res =>{
        res.data.forEach(element => {
          Branchees1.push(element)
        });
        setBranch(Branchees1)
    })
    }, []);




    let totalOfHours = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let totalOfTotal = 0
    function config() {
        return {
            headers: {
                'Authorization': `Bearer ${props.token.access}`
            }
        }
    }
    async function deleteResource(id) {
        try {
            const url = endPoint + id;
            await axios.delete(url, config());
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
                <table>
                    <thead>
                        <tr className='border border-collapse border-black table-auto bg-green-500' >
                            <th>Location</th>
                            {hours.map(hour => {
                                return <th className='border border-collapse border-black table-auto'>{hour}</th>
                            })}
                            <th className='border border-collapse border-black table-auto'>
                                Total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Branchees1.map(Branche => {
                            let total = 0
                            return (
                                <tr className='border border-collapse border-black table-auto odd:bg-green-400 even:bg-green-300'>
                                    <td className='border border-collapse border-black table-auto'>{Branche.location}{<svg onClick={() => deleteResource(Branche.id)} xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>}</td>
                                    {Branche.hourly_sales.map((item, indx) => {
                                        total += item
                                        totalOfHours[indx] += item
                                        return (
                                            <td className='border border-collapse border-black table-auto'>{item}</td>
                                        )
                                    })}
                                    <td className='border border-collapse border-black table-auto'>{total}</td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                    <tfoot>
                        <tr className='border border-collapse border-black table-auto bg-green-500' >
                            <td className='border border-collapse border-black table-auto' >Totals</td>
                            {totalOfHours.map(item => {
                                totalOfTotal += item
                                return (
                                    <td className='border border-collapse border-black table-auto' >{item}</td>
                                )
                            })
                            }
                            <td className='border border-collapse border-black table-auto'>{totalOfTotal}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    )
}
import { hours } from "../data";
export default function ReportTable(props) {
  const sales = [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  const totalOfTotals= []
  
  console.log(props.cookiesArray);
  if (props.cookiesArray.length == 0) {
    return <h2 className="mt-4 md:text-2xl">No Cookie Stands Available</h2>
  } else {
    return (
      <table className="mt-4 bg-green-500 border border-separate border-green-800 rounded-md table-fixed ">
        <thead >
          <tr >
            <td className="w-1/6 font-bold border border-separate border-green-800">Location</td>
            {hours.map((hour, index) =>
              <td key={index} className="w-12 font-bold border border-separate border-green-800">{hour}</td>
            )}
            <td className="w-1/6 font-bold border border-separate border-green-800">Totals</td>
          </tr>
        </thead>
        <tbody>
          {props.cookiesArray.map((cookie, index) =>
            {  totalOfTotals.push(cookie.total)
              
              return(
                <tr >
              <td key={index} className="border border-separate border-green-800 ">{cookie.location}</td>
              {cookie.customerPerHour.map((item, index) =>
               { sales[index] += item
                 return( <td key={index} className="border border-separate border-green-800 ">{item}</td>)
               })}
              <td key={index} className="border border-separate border-green-800 ">{cookie.total}</td>
            </tr>
              )
            }
          )}
        </tbody>
        <tfoot >
          <tr >
            <td className="font-bold border-green-800">Total</td>
            {sales.map((item,index)=>{
                return(<td key ={index} className="font-bold border-green-700 ">{item}</td>)
            })}
            <td className="font-bold border-green-800" >{totalOfTotals ? totalOfTotals.reduce((acc,current)=>(acc+current)):0}</td>
          </tr>
        </tfoot>
      </table>
    )
  }

}
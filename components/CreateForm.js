export default function CreateForm(props) {
  return (
    <form className="bg-green-300 rounded-md" onSubmit={props.onSubmit}>
      <div className="grid grid-rows-3 gap-4">
        <div className="flex flex-col w-full pt-3 font-semibold text-center md:text-xl">Create Cookie Stand</div>
        <div className="flex-2">
          <lable className="mr-3 font-semibold text-black-50"> Location</lable>
          <input type="text" className="w-4/5 form-control" name="location" />
        </div>
        <div className="grid grid-cols-4 mb-5">
          <div className="grid grid-rows-2 gap-2 p-2 m-2 bg-green-200 rounded-md">
            <lable className="font-semibold"> Minimum Customers per Hour </lable>
            <input type="text" className="form-control" name='maxCustomer' />
          </div>
          <div className="grid grid-rows-2 gap-2 p-2 m-2 bg-green-200 rounded-md">
            <lable className="font-semibold" > Maximum Customers per Hour</lable>
            <input type="text" className="form-control" name="minCustomer" />
          </div>
          <div className="grid grid-rows-2 gap-2 p-2 m-2 bg-green-200 rounded-md">
            <lable className="font-semibold"> Average Cookies per Sale</lable>
            <input type="text" className="form-control" name="avg" />
          </div>
          <div className="grid grid-rows-1 gap-2 m-2">
            <button className="font-semibold bg-green-600 rounded-md form-control" >Create</button>
          </div>
        </div>
      </div>
    </form>
  )
}

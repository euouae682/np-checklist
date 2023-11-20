const AddPark = () => {
    return (
        <div className="bg-white shadow-lg rounded-3xl fixed w-[600px] h-[700px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] p-8">
            <h2 className="pb-4">Add to List</h2>
            <hr className="border-slate-300 border" />
            <form>
                <label htmlFor="name" className="py-4" >Park Name</label><br />
                <input type="text" id="name" className="shadow-inner rounded-md h-8 w-full py-4" /><br />
                <input type="submit" className="py-4" />
            </form>
        </div>
    )
}

export default AddPark;

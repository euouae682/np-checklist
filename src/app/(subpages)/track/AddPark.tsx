const AddPark = () => {
    return (
        <div className="bg-white shadow-lg rounded-3xl fixed w-1/4 left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] p-8">
            <h2 className="pb-4">Add to List</h2>
            <hr className="border-slate-300 border" />
            <form>
                <label htmlFor="name" className="pt-2" >Park Name</label><br />
                <input type="text" id="name" className="shadow-inner rounded-md h-8 w-full py-4" /><br />
                <label htmlFor="state" className="pt-2" >State</label><br />
                <input type="text" id="state" className="shadow-inner rounded-md h-8 w-full py-4" /><br />
                <label htmlFor="loc" className="pt-2" >Location</label><br />
                <input type="text" id="loc" className="shadow-inner rounded-md h-8 w-full py-4" /><br />
                <div className="text-center py-6">
                <input type="submit" className="bg-button-blue hover:bg-button-blue-hover rounded-full text-white py-2 px-8 transition" />
                </div>
            </form>
        </div>
    )
}

export default AddPark;

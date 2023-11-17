export default function ListHeader() {
    return (
        <div className="bg-white shadow-lg rounded-3xl grid grid-cols-5 grid-rows-2 py-4">
            <h2 className="col-span-3 p-4 pl-10">U.S. National Park Checklist</h2>
            <h2 className="col-span-2 p-4">Completion % (XX/YY)</h2>
            <h5 className="col-span-3 p-4 pl-10">List Description Here</h5>
            <div className="col-span-2 flex p-4 gap-16">
                <button className="bg-button-blue rounded-full text-white py-2 px-8">Show Stats</button>
                <button className="bg-button-blue rounded-full text-white py-2 px-8">Add to List</button>
            </div>
        </div>
    )
}

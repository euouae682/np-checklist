import { Park } from "./data";

interface ListHeaderProps {
    handleStatsClick: () => void;
    handleAddClick: () => void;
    parks: Park[];
    completed: string[];
}

const ListHeader = ({handleStatsClick, handleAddClick, parks, completed}: ListHeaderProps) => {
    return (
        <div className="bg-white shadow-lg rounded-3xl grid grid-cols-2 grid-rows-2 py-4">
            <h2 className="p-4 pl-10">U.S. National Park Checklist</h2>
            <h2 className="p-4">Completion: {completed.length}/{parks.length} ({Math.round((completed.length / parks.length) * 100 )}%)</h2>
            <h5 className="p-4 pl-10">Checklist of every national park in the U.S.</h5>
            <div className="flex p-4 gap-16">
                <button onClick={ handleStatsClick } className="bg-button-blue hover:bg-button-blue-hover rounded-full text-white py-2 px-8 transition">Show Stats</button>
                <button onClick={ handleAddClick } className="bg-button-blue hover:bg-button-blue-hover rounded-full text-white py-2 px-8 transition">Add to List</button>
            </div>
        </div>
    )
}

export default ListHeader;

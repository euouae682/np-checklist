import StatsItem from "./StatsItem";
import { types } from "./data";

const ListStats = () => {
    return (
        <div className="col-span-1 bg-white shadow-lg rounded-3xl p-8 pl-10">
            <h2 className="pb-4">List Statistics</h2>
            <hr className="border-slate-300 border" />
            { types.map((type) => {
                return <StatsItem key={type.id} data={type} totalParks={3} />
            }) }
        </div>
    )
}

export default ListStats;

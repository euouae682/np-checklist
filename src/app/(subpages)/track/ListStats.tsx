import StatsItem from "./StatsItem";
import { types } from "./data";

interface ListStatsProps {
    showStats: boolean;
}

const ListStats = ({showStats}: ListStatsProps) => {
    return (
        <div className={` bg-white shadow-lg rounded-3xl grow w-0 p-8 pl-10`}>
            <h2 className="pb-4">List Statistics</h2>
            <hr className="border-slate-300 border" />
            { types.map((type) => {
                return <StatsItem key={type.id} data={type} totalParks={3} />
            }) }
        </div>
    )
}

export default ListStats;

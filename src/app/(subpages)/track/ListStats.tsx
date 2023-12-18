import StatsItem from "./StatsItem";
import { StatType } from "./data";

interface ListStatsProps {
    showStats: boolean;
    types: StatType[];
    totalParks: number;
}

const ListStats = ({showStats, types, totalParks}: ListStatsProps) => {
    return (
        <div className={`${showStats ? 'right-0' : '-right-1/3'} bg-white shadow-lg rounded-3xl p-6 pt-8 w-[23%] absolute top-0 transition-right duration-500 ease`}>
            <h2 className="pb-4">List Statistics</h2>
            <hr className="border-slate-300 border" />
            { types.map((type) => {
                return <StatsItem key={type.id} data={type} totalParks={totalParks} />
            }) }
        </div>
    )
}

export default ListStats;

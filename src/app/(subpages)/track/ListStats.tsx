import StatsItem from "./StatsItem";
import { types } from "./data";

interface ListStatsProps {
    showStats: boolean;
}

const ListStats = ({showStats}: ListStatsProps) => {
    return (
        <div className={`${showStats ? 'right-10' : '-right-1/3'} bg-white shadow-lg rounded-3xl p-8 pl-10 w-1/5 absolute top-0 transition-right duration-500 ease`}>
            <h2 className="pb-4">List Statistics</h2>
            <hr className="border-slate-300 border" />
            { types.map((type) => {
                return <StatsItem key={type.id} data={type} totalParks={3} />
            }) }
        </div>
    )
}

export default ListStats;

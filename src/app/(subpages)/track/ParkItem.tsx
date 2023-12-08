import { Park } from './data';

interface ParkProps {
    data: Park;
    color: string;
}

const ParkItem = ({data, color}: ParkProps) => {
    return <div className="border-slate-400 rounded-xl border-2 my-4 relative">
        <div className="p-4 rounded-xl bg-no-repeat bg-right bg-[length:30em]" 
    style={{backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 1), 25%, rgba(0, 0, 0, 0)), url(/parks/${ data.image })`}}>
            <h4 className="leading-8">{ data.name }</h4>
            <h5 className="leading-8">{ data.state }</h5>
            <a>Show more</a>
            <div className={`${color} h-full w-10 absolute right-0 top-0 rounded-r-lg`}></div>
        </div>
    </div>;
}

export default ParkItem;

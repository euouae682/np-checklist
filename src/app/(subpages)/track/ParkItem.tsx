import { useState } from 'react';
import { Park } from './data';

interface ParkProps {
    data: Park;
    color: string;
}

const ParkItem = ({data, color}: ParkProps) => {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
        setShowMore(!showMore);
    }

    return <div className="border-slate-400 rounded-xl border-2 my-4 relative">
        <div className="p-4 rounded-xl bg-no-repeat bg-right bg-[length:30em]" 
    style={{backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 1), 25%, rgba(0, 0, 0, 0)), url(/parks/${ data.image })`}}>
            <h4 className="leading-8">{ data.name }</h4>
            <h5 className="leading-8">{ data.state }</h5>
            <a onClick={handleShowMore} className="text-md">Show more</a>
            <div className={`${color} h-full w-10 absolute right-0 top-0 rounded-r-lg`}></div>
        </div>
        <div className={`${showMore ? 'h-40 border-t-2' : 'h-0'} transition-all flex`}>
            <div>
                <h5>Status: Completed</h5>
                <p>Region: California/Nevada</p>
                <p>Location: White Pine County, NV (see on <a>Google Maps</a>)</p>
                <p><a>See park information</a></p>
                <p><a>See park conditions</a></p>
            </div>
            <div>
                <h5>Comments</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem. </p>
            </div>
            <div>
                <button></button>
                <button></button>
            </div>
        </div>
    </div>;
}

export default ParkItem;

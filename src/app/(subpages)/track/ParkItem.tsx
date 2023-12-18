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

    const handleChangeStatus = () => {
        console.log("change the status");
    }

    const handleRemovePark = () => {
        console.log("remove the park");
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
            <div className={`${showMore ? 'opacity-100 visibile infoFadeOut' : 'opacity-0 invisible infoFade'} m-4 transition-opacity`}>
                <h5 className="pb-1">Status: Completed</h5>
                <p className="py-1">Region: { data.region }</p>
                <p className="py-1">Location: { data.location } (see on <a>Google Maps</a>)</p>
                <p className="py-1"><a>See park information</a></p>
                <p className="py-1"><a>See park conditions</a></p>
            </div>
            <div className={`${showMore ? 'opacity-100 visibile infoFadeOut' : 'opacity-0 invisible infoFade'} my-4 w-2/5 transition-opacity`}>
                <h5 className="pb-1">Description</h5>
                <p className="py-1">{ data.description }</p>
            </div>
            <div className={`${showMore ? 'opacity-100 visibile infoFadeOut' : 'opacity-0 invisible infoFade'} my-4 mr-12 flex flex-col ml-auto`}>
                <button onClick={ handleChangeStatus } className="bg-button-blue hover:bg-button-blue-hover rounded-full text-white py-2 px-8 m-4 transition">Change Status</button>
                <button onClick={ handleRemovePark } className="bg-bright-red hover:bg-bright-red-hover rounded-full text-white py-2 px-8 m-4 transition">Remove Park</button>
            </div>
        </div>
    </div>;
}

export default ParkItem;

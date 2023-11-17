import { FC } from 'react';
import { Park } from "./SectionItem";

interface ParkProps {
    data: Park;
    color: string;
}

const ParkItem: FC<ParkProps> = (props: ParkProps) => {
    return <div className="border-slate-400 border-2 rounded-xl my-4 p-4 relative bg-no-repeat bg-right bg-[length:33%]" 
    style={{backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255, 1), rgba(0, 0, 0, 0)), url(${ props.data.image })`}}>
        <h4 className="leading-8">{ props.data.name }</h4>
        <h5 className="leading-8">{ props.data.state }</h5>
        <a className="text-button-blue">Show more</a>
        <div className={`${props.color} h-full w-10 absolute right-0 top-0 rounded-r-lg`}></div>
    </div>;
}

export default ParkItem;

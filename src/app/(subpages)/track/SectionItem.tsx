import { FC } from 'react';
import ParkItem from "./ParkItem";

interface Section {
    header: string;
    id: string;
    color: string;
    parks: Park[];
}

export interface Park {
    name: string;
    id: string;
    state: string;
    status: string;
    region: string;
    location: string;
    comments: string;
    image: string;
}

interface SectionProps {
    data: Section;
}

const SectionItem: FC<SectionProps> = ( props: SectionProps ) => {
    return (<div className="p-8 pl-10">
        <h2 className="pb-4">{ props.data.header }</h2>
        <hr className="border-slate-300 border" />
        { props.data.parks.map((park) => {
            return <ParkItem key={park.id} data={park} color={props.data.color} />
        }) }
    </div>);
}

export default SectionItem;

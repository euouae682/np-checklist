import { FC } from 'react';
import ParkItem from './ParkItem';
import { Section } from './data';

interface SectionProps {
    data: Section;
}

const SectionItem: FC<SectionProps> = ( props: SectionProps ) => {
    return (<div className="p-8 pl-10">
        <h2 className="pb-4">{ `${props.data.header} (${ props.data.parks.length })` }</h2>
        <hr className="border-slate-300 border" />
        { props.data.parks.map((park) => {
            return <ParkItem key={park.id} data={park} color={props.data.color} />
        }) }
    </div>);
}

export default SectionItem;

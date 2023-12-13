import ParkItem from './ParkItem';
import { parks, Section } from './data';

interface SectionProps {
    data: Section;
}

const SectionItem = ( {data}: SectionProps ) => {
    return (<div className="p-8 pl-10">
        <h2 className="pb-4">{ `${data.header} (${ data.parks.length })` }</h2>
        <hr className="border-slate-300 border" />
        { data.parks.map((park) => {
            return <ParkItem key={park} data={parks.filter(p => p.id == park)[0]} color={data.color} />
        }) }
    </div>);
}

export default SectionItem;

import ParkItem from './ParkItem';
import { Section, Park } from './data';

interface SectionProps {
    section: Section;
    parks: Park[];
}

const SectionItem = ( { section, parks }: SectionProps ) => {
    return (<div className="p-8 pl-10">
        <h2 className="pb-4">{ `${ section.header} (${  section.parks.length })` }</h2>
        <hr className="border-slate-300 border" />
        { section.parks.map((park) => {
            return <ParkItem key={park} data={parks.filter(p => p.id == park)[0]} color={section.color} />
        }) }
    </div>);
}

export default SectionItem;

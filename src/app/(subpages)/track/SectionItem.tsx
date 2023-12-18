import ParkItem from './ParkItem';
import { Section, Park } from './data';

interface SectionProps {
    section: Section;
    parks: Park[];
    handleChangeStatus: (id: string) => void;
    handleRemovePark: (id: string) => void;
}

const SectionItem = ( { section, parks, handleChangeStatus, handleRemovePark }: SectionProps ) => {
    return (<div className="p-8 pl-10">
        <h2 className="pb-4">{ `${ section.header} (${  section.parks.length })` }</h2>
        <hr className="border-slate-300 border" />
        { section.parks.map((park) => {
            return <ParkItem key={park} data={parks.filter(p => p.id == park)[0]} color={section.color} handleChangeStatus={handleChangeStatus} handleRemovePark={handleRemovePark} />
        }) }
    </div>);
}

export default SectionItem;

import SectionItem from "./SectionItem";
import { Section, Park } from './data';

interface ParkListProps {
    sections: Section[];
    parks: Park[];
}

const ParkList = ({ sections, parks }: ParkListProps) => {
    return (
        <div className="bg-white shadow-lg rounded-3xl"> 
            { sections.map((section) => {
                return <div key={section.id}><SectionItem section={section} parks={parks} /></div>
            }) }
        </div>
    )
}

export default ParkList;

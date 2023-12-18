import SectionItem from "./SectionItem";
import { Section, Park } from './data';

interface ParkListProps {
    sections: Section[];
    parks: Park[];
    handleChangeStatus: (id: string) => void;
    handleRemovePark: (id: string) => void;
}

const ParkList = ({ sections, parks, handleChangeStatus, handleRemovePark }: ParkListProps) => {
    return (
        <div className="bg-white shadow-lg rounded-3xl"> 
            { sections.map((section) => {
                return <div key={section.id}><SectionItem 
                    section={section} 
                    parks={parks} 
                    handleChangeStatus={handleChangeStatus}
                    handleRemovePark={handleRemovePark}
                /></div>
            }) }
        </div>
    )
}

export default ParkList;

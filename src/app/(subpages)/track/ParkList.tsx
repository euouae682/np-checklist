import SectionItem from "./SectionItem";
import { sections } from "./data";

const ParkList = () => {
    return (
        <div className="bg-white shadow-lg rounded-3xl"> 
            { sections.map((section) => {
                return <div key={section.id}><SectionItem data={section} /></div>
            }) }
        </div>
    )
}

export default ParkList;

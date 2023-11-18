import { FC } from 'react';

interface StatsProps {
    name: string;
    totalParks: number;
    categories: {
        category: string;
        parksInCategory: number;
    }[];
    collapsible: boolean;
}

const SectionItem: FC<StatsProps> = ( props: StatsProps ) => {
    return (<div className="p-8 pl-10">
        <h2 className="pb-4">{ props.name }</h2>
    </div>);
}

export default StatsProps;

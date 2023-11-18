import { FC } from 'react';
import { StatType } from './data';

interface StatsProps {
    data: StatType;
    totalParks: number;
}

const StatsItem: FC<StatsProps> = ( props: StatsProps ) => {
    return (<div className="py-4">
        <h2 className="pb-4">{ props.data.name }</h2>
        <ul className="pl-8 list-disc">
            { props.data.categories.map((category) => {
                return (<li className="leading-6" key={ category.id }>
                    { `${ category.category }: ${ category.parksInCategory } (${Math.round( (category.parksInCategory / props.totalParks) * 100 )}%)` }
                    </li>);
            })}
        </ul>
    </div>);
}

export default StatsItem;

import SectionItem from "./SectionItem";

const sections = [
    {
        'header': 'Completed',
        'id': '1',
        'color': 'bg-bright-green',
        'parks': [
            {
                'name': 'Black Rock Desert - High Rock Canyon Emigrant Trails National Conservation Area',
                'id': '1',
                'state': 'Nevada',
                'status': 'Completed',
                'region': 'California/Nevada',
                'location': 'Humboldt County, NV',
                'comments': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.'
            },
            {
                'name': 'Great Basin National Park',
                'id': '2',
                'state': 'Nevada',
                'status': 'Completed',
                'region': 'California/Nevada',
                'location': 'White Pine County, NV',
                'comments': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.'
            },
        ],
    },
    {
        'header': 'Not Completed',
        'id': '2',
        'color': 'bg-bright-red',
        'parks': [
            {
                'name': 'Acadia National Park',
                'id': '3',
                'state': 'Maine',
                'status': 'Not Completed',
                'region': 'Northeast',
                'location': 'Hancock/Knox County, ME',
                'comments': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.'
            },
        ],
    },
]

const ParkList = () => {
    return (
        <div className="h-[600px] bg-white shadow-lg rounded-3xl"> 
            { sections.map((section) => {
                return <div key={section.id}><SectionItem data={section} /></div>
            }) }
        </div>
    )
}

export default ParkList;

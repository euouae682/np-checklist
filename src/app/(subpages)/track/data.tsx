export interface StatType {
    name: string;
    id: number;
    categories: {
        category: string;
        id: number;
        parksInCategory: number;
    }[];
    collapsible: boolean;
}

export interface Section {
    header: string;
    id: string;
    color: string;
    parks: Park[];
}

export interface Park {
    name: string;
    id: string;
    state: string;
    status: string;
    region: string;
    location: string;
    comments: string;
    image: string;
}

export const sections = [
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
                'comments': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': '/blackrock.jpg',
            },
            {
                'name': 'Great Basin National Park',
                'id': '2',
                'state': 'Nevada',
                'status': 'Completed',
                'region': 'California/Nevada',
                'location': 'White Pine County, NV',
                'comments': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': '/greatbasin.jpg',
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
                'comments': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': '/acadia.jpg',
            },
        ],
    },
]

export const types: StatType[] = [
    {
        'name': 'Status',
        'id': 1,
        'categories': [
            {
                'category': 'Completed',
                'id': 1,
                'parksInCategory': 2,
            },
            {
                'category': 'Partially Complete',
                'id': 2,
                'parksInCategory': 0,
            },
            {
                'category': 'Not Complete',
                'id': 3,
                'parksInCategory': 1,
            },
        ],
        'collapsible': false,
    },
    {
        'name': 'Regions',
        'id': 2,
        'categories': [
            {
                'category': 'Pacific Northwest',
                'id': 1,
                'parksInCategory': 0,
            },
            {
                'category': 'California/Nevada',
                'id': 2,
                'parksInCategory': 2,
            },
            {
                'category': 'Idaho/Montana/Wyoming',
                'id': 3,
                'parksInCategory': 0,
            },
            {
                'category': 'Four Corners',
                'id': 4,
                'parksInCategory': 0,
            },
            {
                'category': 'Great Plains',
                'id': 5,
                'parksInCategory': 0,
            },
            {
                'category': 'Great Lakes',
                'id': 6,
                'parksInCategory': 0,
            },
            {
                'category': 'Midwest',
                'id': 7,
                'parksInCategory': 0,
            },
            {
                'category': 'South',
                'id': 8,
                'parksInCategory': 0,
            },
            {
                'category': 'Southeast',
                'id': 9,
                'parksInCategory': 0,
            },
            {
                'category': 'Northeast',
                'id': 10,
                'parksInCategory': 1,
            },
            {
                'category': 'Alaska',
                'id': 11,
                'parksInCategory': 0,
            },
            {
                'category': 'Hawaii',
                'id': 12,
                'parksInCategory': 0,
            },
            {
                'category': 'Other Territories',
                'id': 13,
                'parksInCategory': 0,
            },
        ],
        'collapsible': true,
    }
]


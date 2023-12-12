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
    description: string;
    image: string;
}

export const sections = [
    {
        'header': 'Completed',
        'id': '1',
        'color': 'bg-bright-green',
        'parks': [
            {
                'name': 'Bryce Canyon National Park',
                'id': '8',
                'state': 'Utah',
                'status': 'Completed',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'brycecanyonnp.jpg',
            },
            {
                'name': 'Carlsbad Caverns National Park',
                'id': '11',
                'state': 'New Mexico',
                'status': 'Completed',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'carlsbadcavernsnp.jpg',
            },
            {
                'name': 'Great Sand Dunes National Park',
                'id': '27',
                'state': 'Colorado',
                'status': 'Completed',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'greatsanddunesnp.jpg',
            },
            {
                'name': 'New River Gorge National Park',
                'id': '45',
                'state': 'West Virginia',
                'status': 'Completed',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'newrivergorgenp.jpg',
            },
            {
                'name': 'Petrified Forest National Park',
                'id': '48',
                'state': 'Arizona',
                'status': 'Completed',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'petrifiedforestnp.jpg',
            },
            {
                'name': 'Saguaro National Park',
                'id': '52',
                'state': 'Arizona',
                'status': 'Completed',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'saguaronp.jpg',
            },
            {
                'name': 'Sequoia National Park',
                'id': '53',
                'state': 'California',
                'status': 'Completed',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'sequoianp.jpg',
            },
            {
                'name': 'Wind Cave National Park',
                'id': '59',
                'state': 'South Dakota',
                'status': 'Completed',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'windcavenp.jpg',
            },
        ],
    },
    {
        'header': 'Visited',
        'id': '2',
        'color': 'bg-bright-yellow',
        'parks': [
            {
                'name': 'Arches National Park',
                'id': '3',
                'state': 'Utah',
                'status': 'Visited',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'archesnp.jpg',
            },
            {
                'name': 'Badlands National Park',
                'id': '4',
                'state': 'South Dakota',
                'status': 'Visited',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'badlandsnp.jpg',
            },
            {
                'name': 'Canyonlands National Park',
                'id': '9',
                'state': 'Utah',
                'status': 'Visited',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'canyonlandsnp.jpg',
            },
            {
                'name': 'Crater Lake National Park',
                'id': '14',
                'state': 'Oregon',
                'status': 'Visited',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'craterlakenp.jpg',
            },
            {
                'name': 'Death Valley National Park',
                'id': '16',
                'state': 'California',
                'status': 'Visited',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'deathvalleynp.jpg',
            },
            {
                'name': 'Glacier National Park',
                'id': '22',
                'state': 'Montana',
                'status': 'Visited',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'glaciernp.jpg',
            },
            {
                'name': 'Grand Canyon National Park',
                'id': '24',
                'state': 'Arizona',
                'status': 'Visited',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'grandcanyonnp.jpg',
            },
            {
                'name': 'Grand Teton National Park',
                'id': '25',
                'state': 'Wyoming',
                'status': 'Visited',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'grandtetonnp.jpg',
            },
            {
                'name': 'Great Basin National Park',
                'id': '26',
                'state': 'Nevada',
                'status': 'Visited',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'greatbasinnp.jpg',
            },
            {
                'name': 'Great Smoky Mountains National Park',
                'id': '28',
                'state': 'North Carolina/Tennessee',
                'status': 'Visited',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'greatsmokymountainsnp.jpg',
            },
            {
                'name': 'Guadalupe Mountains National Park',
                'id': '29',
                'state': 'Texas',
                'status': 'Visited',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'guadalupemountainsnp.jpg',
            },
            {
                'name': 'Joshua Tree National Park',
                'id': '35',
                'state': 'California',
                'status': 'Visited',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'joshuatreenp.jpg',
            },
            {
                'name': 'Kings Canyon National Park',
                'id': '38',
                'state': 'California',
                'status': 'Visited',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'kingscanyonnp.jpg',
            },
            {
                'name': 'Lassen Volcanic National Park',
                'id': '41',
                'state': 'California',
                'status': 'Visited',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'lassenvolcanicnp.jpg',
            },
            {
                'name': 'Mammoth Cave National Park',
                'id': '42',
                'state': 'Kentucky',
                'status': 'Visited',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'mammothcavenp.jpg',
            },
            {
                'name': 'Mount Rainier National Park',
                'id': '44',
                'state': 'Washington',
                'status': 'Visited',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'mountrainiernp.jpg',
            },
            {
                'name': 'North Cascades National Park',
                'id': '46',
                'state': 'Washington',
                'status': 'Visited',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'northcascadesnp.jpg',
            },
            {
                'name': 'Olympic National Park',
                'id': '47',
                'state': 'Washington',
                'status': 'Visited',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'olympicnp.jpg',
            },
            {
                'name': 'Pinnacles National Park',
                'id': '49',
                'state': 'California',
                'status': 'Visited',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'pinnaclesnp.jpg',
            },
            {
                'name': 'Redwood National and State Parks',
                'id': '50',
                'state': 'California',
                'status': 'Visited',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'redwoodnp.jpg',
            },
            {
                'name': 'Rocky Mountain National Park',
                'id': '51',
                'state': 'Colorado',
                'status': 'Visited',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'rockymountainnp.jpg',
            },
            {
                'name': 'Shenandoah National Park',
                'id': '54',
                'state': 'Virginia',
                'status': 'Visited',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'shenandoahnp.jpg',
            },
            {
                'name': 'Theodore Roosevelt National Park',
                'id': '55',
                'state': 'North Dakota',
                'status': 'Visited',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'theodorerooseveltnp.jpg',
            },
            {
                'name': 'White Sands National Park',
                'id': '58',
                'state': 'New Mexico',
                'status': 'Visited',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'whitesandsnp.jpg',
            },
            {
                'name': 'Yellowstone National Park',
                'id': '61',
                'state': 'Wyoming',
                'status': 'Visited',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'yellowstonenp.jpg',
            },
            {
                'name': 'Yosemite National Park',
                'id': '62',
                'state': 'California',
                'status': 'Visited',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'yosemitenp.jpg',
            },
            {
                'name': 'Zion National Park',
                'id': '63',
                'state': 'Utah',
                'status': 'Visited',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'zionnp.jpg',
            },
        ],
    },
    {
        'header': 'Not Completed',
        'id': '3',
        'color': 'bg-bright-red',
        'parks': [
            {
                'name': 'Acadia National Park',
                'id': '1',
                'state': 'Maine',
                'status': 'Not Completed',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'acadianp.jpg',
            },
            {
                'name': 'National Park of American Samoa',
                'id': '2',
                'state': 'American Samoa',
                'status': 'Not Completed',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'americansamoanp.jpg',
            },
            {
                'name': 'Big Bend National Park',
                'id': '5',
                'state': 'Texas',
                'status': 'Not Completed',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'bigbendnp.jpg',
            },
            {
                'name': 'Biscayne National Park',
                'id': '6',
                'state': 'Florida',
                'status': 'Not Completed',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'biscaynenp.jpg',
            },
            {
                'name': 'Black Canyon of the Gunnison National Park',
                'id': '7',
                'state': 'Colorado',
                'status': 'Not Completed',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'blackcanyonnp.jpg',
            },
            {
                'name': 'Capitol Reef National Park',
                'id': '10',
                'state': 'Utah',
                'status': 'Not Completed',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'capitolreefnp.jpg',
            },
            {
                'name': 'Channel Islands National Park',
                'id': '12',
                'state': 'California',
                'status': 'Not Completed',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'channelislandsnp.jpg',
            },
            {
                'name': 'Congaree National Park',
                'id': '13',
                'state': 'South Carolina',
                'status': 'Not Completed',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'congareenp.jpg',
            },
            {
                'name': 'Cuyahoga Valley National Park',
                'id': '15',
                'state': 'Ohio',
                'status': 'Not Completed',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'cuyahogavalleynp.jpg',
            },
            {
                'name': 'Denali National Park',
                'id': '17',
                'state': 'Alaska',
                'status': 'Not Completed',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'denalinp.jpg',
            },
            {
                'name': 'Dry Tortugas National Park',
                'id': '18',
                'state': 'Florida',
                'status': 'Not Completed',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'drytortugasnp.jpg',
            },
            {
                'name': 'Everglades National Park',
                'id': '19',
                'state': 'Florida',
                'status': 'Not Completed',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'evergladesnp.jpg',
            },
            {
                'name': 'Gates of the Arctic National Park',
                'id': '20',
                'state': 'Alaska',
                'status': 'Not Completed',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'gatesofthearcticnp.jpg',
            },
            {
                'name': 'Gateway Arch National Park',
                'id': '21',
                'state': 'Missouri',
                'status': 'Not Completed',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'gatewayarchnp.jpg',
            },
            {
                'name': 'Glacier Bay National Park',
                'id': '23',
                'state': 'Alaska',
                'status': 'Not Completed',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'glacierbaynp.jpg',
            },
            {
                'name': 'Haleakala National Park',
                'id': '30',
                'state': 'Hawaii',
                'status': 'Not Completed',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'haleakalanp.jpg',
            },
            {
                'name': 'Hawai\'i Volcanoes National Park',
                'id': '31',
                'state': 'Hawaii',
                'status': 'Not Completed',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'hawaiivolcanoesnp.jpg',
            },
            {
                'name': 'Hot Springs National Park',
                'id': '32',
                'state': 'Arkansas',
                'status': 'Not Completed',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'hotspringsnp.jpg',
            },
            {
                'name': 'Indiana Dunes National Park',
                'id': '33',
                'state': 'Indiana',
                'status': 'Not Completed',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'indianadunesnp.jpg',
            },
            {
                'name': 'Isle Royale National Park',
                'id': '34',
                'state': 'Michigan',
                'status': 'Not Completed',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'isleroyalenp.jpg',
            },
            {
                'name': 'Katmai National Park',
                'id': '36',
                'state': 'Alaska',
                'status': 'Not Completed',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'katmainp.jpg',
            },
            {
                'name': 'Kenai Fjords National Park',
                'id': '37',
                'state': 'Alaska',
                'status': 'Not Completed',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'kenaifjordsnp.jpg',
            },
            {
                'name': 'Kobuk Valley National Park',
                'id': '39',
                'state': 'Alaska',
                'status': 'Not Completed',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'kobukvalleynp.jpg',
            },
            {
                'name': 'Lake Clark National Park',
                'id': '40',
                'state': 'Alaska',
                'status': 'Not Completed',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'lakeclarknp.jpg',
            },
            {
                'name': 'Mesa Verde National Park',
                'id': '43',
                'state': 'Colorado',
                'status': 'Not Completed',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'mesaverdenp.jpg',
            },
            {
                'name': 'Virgin Islands National Park',
                'id': '56',
                'state': 'U.S. Virgin Islands',
                'status': 'Not Completed',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'virginislandsnp.jpg',
            },
            {
                'name': 'Voyageurs National Park',
                'id': '57',
                'state': 'Minnesota',
                'status': 'Not Completed',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'voyageursnp.jpg',
            },
            {
                'name': 'Wrangell-St. Elias National Park',
                'id': '60',
                'state': 'Alaska',
                'status': 'Not Completed',
                'region': '',
                'location': '',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut. Dictum varius duis at consectetur lorem.',
                'image': 'wrangellsteliasnp.jpg',
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


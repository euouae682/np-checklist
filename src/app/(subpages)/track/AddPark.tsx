import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { Park } from './data';

interface AddParkProps {
    showAdd: boolean;
    handleExit: () => void;
    handleSubmit: (newPark: Park) => void;
}

const AddPark = ({showAdd, handleExit, handleSubmit}: AddParkProps) => {
    const [newPark, setNewPark] = useState({
        'name': '',
        'id': '64',
        'state': '',
        'status': 'Not Completed',
        'region': '',
        'description': '',
        'image': '',
    });

    const getNewRegion = (state: string) => {
        if (['Washington', 'Oregon'].includes(state)) {
            return 'Pacific Northwest';
        }
        else if (['California', 'Nevada'].includes(state)) {
            return 'California, Nevada';
        }
        else if (['Idaho', 'Montana', 'Wyoming'].includes(state)) {
            return 'Yellowstone';
        }
        else if (['Utah', 'Arizona', 'Colorado', 'New Mexico'].includes(state)) {
            return 'Four Corners';
        }
        else if (['North Dakota', 'South Dakota', 'Nebraska', 'Kansas'].includes(state)) {
            return 'Great Plains';
        }
        else if (['Minnesota', 'Wisconsin', 'Michigan'].includes(state)) {
            return 'Great Lakes';
        }
        else if (['Iowa', 'Missouri', 'Illinois', 'Indiana', 'Ohio'].includes(state)) {
            return 'Midwest';
        }
        else if (['Texas', 'Oklahoma', 'Arkansas', 'Louisiana'].includes(state)) {
            return 'South';
        }
        else if (['Mississippi', 'Alabama', 'Georgia', 'Florida', 'South Carolina'].includes(state)) {
            return 'Southeast';
        }
        else if (['North Carolina', 'Tennessee', 'Kentucky', 'Virginia', 'West Virginia'].includes(state)) {
            return 'Appalachians';
        }
        else if (['Maryland', 'Pennsylvania', 'New Jersey', 'New York', 'Connecticut', 'Rhode Island', 'Massachusetts', 'Vermont', 'New Hampshire', 'Maine'].includes(state)) {
            return 'Northeast';
        }
        else if (state === 'Alaska' || state === 'Hawaii') {
            return state;
        }
        else {
            return 'Other';
        }
    }

    const handleSubmitPark = (e: any) => {
        e.preventDefault();

        if (newPark.name === '') {
            alert("Name of park cannot be empty!");
        }
        else if (newPark.state === '') {
            alert("State cannot be empty!");
        }
        else {
            const newRegion = getNewRegion(newPark.state);

            console.log(newRegion);

            handleSubmit({
                ...newPark,
                'region': newRegion
            });

            setNewPark({
                'name': '',
                'id': '64',
                'state': '',
                'status': 'Not Completed',
                'region': '',
                'description': '',
                'image': '',
            })
        }
    }

    return (
        <div className={`${showAdd ? 'opacity-100 visible fadeOut' : 'opacity-0 invisible fadeIn'}  bg-white shadow-lg rounded-3xl fixed w-1/4 left-1/2 top-[55%] translate-x-[-50%] translate-y-[-50%] p-8 border`}>
            <div className="flex justify-content align-items">
                <h2 className="pb-4">Add to List</h2>
                <FontAwesomeIcon onClick={handleExit} icon={faXmark} size="2x" className="text-bright-red cursor-pointer flex-right ml-auto" />
            </div>
            <hr className="border-slate-300 border" />
            <form onSubmit={handleSubmitPark}>
                <label htmlFor="name" className="pt-2" >Park Name</label><br />
                <input type="text" id="name" name="name" className="shadow-inner rounded-md h-8 w-full py-4" onChange={
                    (e: any) => {
                        setNewPark({
                            ...newPark,
                            'name': e.target.value
                        })
                    }
                } /><br />
                <label htmlFor="state" className="pt-2" >State</label><br />
                <input type="text" id="state" name="state" className="shadow-inner rounded-md h-8 w-full py-4" onChange={
                    (e: any) => {
                        setNewPark({
                            ...newPark,
                            'state': e.target.value
                        })
                    }
                } /><br />
                <label htmlFor="desc" className="pt-2" >Description</label><br />
                <textarea id="desc" name="desc" className="shadow-inner rounded-md h-16 w-full py-2" onChange={
                    (e: any) => {
                        setNewPark({
                            ...newPark,
                            'description': e.target.value
                        })
                    }
                } /><br />
                <div className="text-center py-6">
                    <input type="submit" className="bg-button-blue hover:bg-button-blue-hover rounded-full text-white py-2 px-8 transition" />
                </div>
            </form>
        </div>
    )
}

export default AddPark;

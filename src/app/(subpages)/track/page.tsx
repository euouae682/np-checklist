'use client';

import { useState } from "react";
import ListHeader from "./ListHeader";
import ParkList from "./ParkList";
import ListStats from "./ListStats";
import AddPark from "./AddPark";
import { parkData, sectionData, typeData } from "./data";

const Track = () => {
    const [parks, setParks] = useState(parkData);
    const [sections, setSections] = useState(sectionData);
    const [types, setTypes] = useState(typeData);
    const [showStats, setShowStats] = useState(false);
    const [showAdd, setShowAdd] = useState(false);

    const handleAddPark = (e: any) => {
        e.preventDefault();

        console.log(`adding park, name=${e.target.name.value}, state=${e.target.state.value}, loc=${e.target.loc.value}`);

        setParks([
            ...parks,
            {
                'name': e.target.name.value,
                'id': '64',
                'state': e.target.state.value,
                'status': 'Not Completed',
                'region': 'Pacific Northwest',
                'location': e.target.loc.value,
                'description': '',
                'image': '',
            }
        ])
    }

    const handleStatusChange = (id: string) => {
        console.log(`changing status of park with id ${id}`);
    }

    const handleRemovePark = (id: string) => {
        console.log(`deleting park with id ${id}`);
    }

    const toggleShowStats = () => {
        setShowStats(!showStats);
    }

    const toggleShowAdd = () => {
        document.body.style.overflowY = 'hidden';
        setShowAdd(!showAdd);
    }

    const handleExitAdd = () => {
        document.body.style.overflowY = 'visible';
        setShowAdd(false);
    }

    return (
        <main className="p-10 bg-pastel-green relative z-0 overflow-hidden">
            <div className={`${showAdd ? 'blur-md pointer-events-none' : ''} relative transition-all duration-500`}>
                <div className={`${showStats ? 'w-3/4' : 'w-full'} flex flex-col gap-10 transition-width duration-500 ease`}>
                    <ListHeader handleStatsClick={ toggleShowStats } handleAddClick={ toggleShowAdd } />
                    <ParkList sections={ sections } parks={ parks } handleChangeStatus={ handleStatusChange } handleRemovePark={ handleRemovePark } />
                </div>
                <ListStats showStats={showStats} types={types} totalParks={ parks.length } />
            </div>
            <AddPark showAdd={showAdd} handleExit={handleExitAdd} handleSubmit={handleAddPark} />
        </main>
    );
}

export default Track;

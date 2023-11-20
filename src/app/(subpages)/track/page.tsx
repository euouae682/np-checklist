'use client';

import { useState } from "react";
import ListHeader from "./ListHeader";
import ParkList from "./ParkList";
import ListStats from "./ListStats";
import AddPark from "./AddPark";

const Track = () => {
    const [showStats, setShowStats] = useState(false);
    const [showAdd, setShowAdd] = useState(false);

    const toggleShowStats = () => {
        setShowStats(!showStats);
    }

    const toggleShowAdd = () => {
        setShowAdd(!showAdd);
    }

    return (
        <main className="p-10 grid grid-rows-2 grid-cols-4 gap-10 bg-pastel-green relative">
            <div className={`${showStats ? 'col-span-3' : 'col-span-4'} flex flex-col gap-10`}>
                <ListHeader handleStatsClick={ toggleShowStats } handleAddClick={ toggleShowAdd } />
                <ParkList />
            </div>
            { showStats && <ListStats /> }
            { showAdd && <AddPark />}
        </main>
    );
}

export default Track;

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
        document.body.style.overflowY = 'hidden';
        setShowAdd(!showAdd);
    }

    const handleExitAdd = () => {
        document.body.style.overflowY = 'scroll';
        setShowAdd(false);
    }

    return (
        <main className="p-10 bg-pastel-green relative z-0 overflow-hidden">
            <div className={`${showAdd ? 'blur-md pointer-events-none' : ''} relative transition-all duration-500`}>
                <div className={`${showStats ? 'w-3/4' : 'w-full'} flex flex-col gap-10 transition-width duration-500 ease`}>
                    <ListHeader handleStatsClick={ toggleShowStats } handleAddClick={ toggleShowAdd } />
                    <ParkList />
                </div>
                <ListStats showStats={showStats} />
            </div>
            <AddPark showAdd={showAdd} handleExit={handleExitAdd} />
        </main>
    );
}

export default Track;

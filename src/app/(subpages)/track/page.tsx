'use client';

import { useState } from "react";
import ListHeader from "./ListHeader";
import ParkList from "./ParkList";
import ListStats from "./ListStats";

const Track = () => {
    const [showStats, setShowStats] = useState(false);

    const toggleShowStats = () => {
        setShowStats(!showStats);
    }

    return (
        <main className="p-10 grid grid-rows-2 grid-cols-4 gap-10 bg-pastel-green relative">
            <div className={`${showStats ? 'col-span-3' : 'col-span-4'} flex flex-col gap-10`}>
                <ListHeader handleStatsClick={ toggleShowStats } />
                <ParkList />
            </div>
            { showStats && <ListStats /> }
        </main>
    );
}

export default Track;

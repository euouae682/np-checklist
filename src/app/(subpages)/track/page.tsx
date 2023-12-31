'use client';

import { useState } from "react";
import ListHeader from "./ListHeader";
import ParkList from "./ParkList";
import ListStats from "./ListStats";
import AddPark from "./AddPark";
import { parkData, Park, sectionData, typeData } from "./data";

const Track = () => {
    const [parks, setParks] = useState(parkData);
    const [sections, setSections] = useState(sectionData);
    const [types, setTypes] = useState(typeData);
    const [showStats, setShowStats] = useState(false);
    const [showAdd, setShowAdd] = useState(false);

    const handleAddPark = (newPark: Park) => {
        setParks([
            ...parks,
            newPark
        ])
        setSections(sections.map((s) => {
            if (s.header === 'Not Completed') {
                return {
                    ...s,
                    'parks': [...s.parks, newPark.id]
                }
            }
            else {
                return s;
            }
        }));
        setTypes(types.map((t) => {
            if (t.name === 'Status') {
                return {
                    ...t,
                    'categories': t.categories.map((c) => {
                        if (c.category === newPark.status) {
                            return {
                                ...c,
                                'parksInCategory': [...c.parksInCategory, newPark.id]
                            }
                        }
                        return c;
                    })
                };
            }
            else if (t.name === 'Regions') {
                return {
                    ...t,
                    'categories': t.categories.map((c) => {
                        if (c.category === newPark.region) {
                            return {
                                ...c,
                                'parksInCategory': [...c.parksInCategory, newPark.id]
                            }
                        }
                        return c;
                    })
                };
            }
            else {
                return t;
            }
        }))

        handleExitAdd();
    }

    const handleStatusChange = (id: string) => {
        console.log(`changing status of park with id ${id}`);
        let curStatus = "";
        let newStatus = "";
        setParks(parks.map((park) => {
            if (park.id === id) {
                curStatus = park.status;
                if (curStatus === 'Not Completed') {
                    newStatus = 'Visited';
                }
                else if (curStatus === 'Visited') {
                    newStatus = 'Completed';
                }
                else {
                    newStatus = 'Not Completed';
                }
                return {
                    ...park,
                    'status': newStatus
                };
            }
            else {
                return park;
            }
        }))
        setSections(sections.map((s) => {
            if (s.header === newStatus) {
                return {
                    ...s,
                    'parks': [...s.parks, id]
                }
            }
            else if (s.header === curStatus) {
                return {
                    ...s,
                    'parks': s.parks.filter((p) => { return p !== id })
                }
            }
            else {
                return s;
            }
        }))
        setTypes(types.map((t) => {
            if (t.name === 'Status') {
                return {
                    ...t,
                    'categories': t.categories.map((c) => {
                        if (c.category === curStatus) {
                            return {
                                ...c,
                                'parksInCategory': c.parksInCategory.filter((s) => {
                                    return s !== id;
                                })
                            }
                        }
                        else if (c.category === newStatus) {
                            return {
                                ...c,
                                'parksInCategory': [...c.parksInCategory, id]
                            }
                        }
                        return c;
                    })
                };
            }
            else {
                return t;
            }
        }))

        console.log('replaced park');
    }

    const handleRemovePark = (id: string) => {
        console.log(`deleting park with id ${id}`);

        setParks(parks.filter((park) => {
            return park.id !== id;
        }))
        setSections(sections.map((s) => {
            if (s.parks.includes(id)) {
                return {
                    ...s,
                    'parks': s.parks.filter((p) => { return p !== id })
                }
            }
            else {
                return s;
            }
        }))
        setTypes(types.map((t) => {
            return {
                ...t,
                'categories': t.categories.map((c) => {
                    if (c.parksInCategory.includes(id)) {
                        return {
                            ...c,
                            'parksInCategory': c.parksInCategory.filter((s) => {
                                return s !== id;
                            })
                        }
                    }
                    else {
                        return c;
                    }
                })
            }
        }))
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
        <main className="p-6 bg-pastel-green relative z-0 overflow-hidden">
            <div className={`${showAdd ? 'blur-md pointer-events-none select-none' : ''} relative transition-all duration-500`}>
                <div className={`${showStats ? 'w-3/4' : 'w-full'} flex flex-col gap-6 transition-width duration-500 ease`}>
                    <ListHeader handleStatsClick={ toggleShowStats } handleAddClick={ toggleShowAdd } parks={parks} completed={sections[0].parks} />
                    <ParkList sections={ sections } parks={ parks } handleChangeStatus={ handleStatusChange } handleRemovePark={ handleRemovePark } />
                </div>
                <ListStats showStats={showStats} types={types} totalParks={ parks.length } />
            </div>
            <AddPark showAdd={showAdd} handleExit={handleExitAdd} handleSubmit={handleAddPark} />
        </main>
    );
}

export default Track;

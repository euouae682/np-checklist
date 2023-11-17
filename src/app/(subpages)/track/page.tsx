import ListHeader from "./ListHeader";
import ParkList from "./ParkList";
import ListStats from "./ListStats";

export default function Track() {
    return (
        <main className="p-10 grid grid-rows-2 grid-cols-4 gap-10 bg-pastel-green">
            <div className="col-span-3 flex flex-col gap-10">
                <ListHeader />
                <ParkList />
            </div>
            <ListStats />
        </main>
    );
}

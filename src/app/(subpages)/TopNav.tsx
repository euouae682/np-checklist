import Link from "next/link";

const TopNav = () => {
    return (
        <nav className="w-full h-16 fixed shadow-dark z-10 bg-white top-0">
            <ul className="h-full flex flex-row">
                <li className="flex items-center justify-center w-1/6 cursor-pointer"><h1><Link className="text-gray-900 text-[28px] font-normal" href="/">Main Header</Link></h1></li>
                <li className="flex items-center justify-center w-1/12 font-light cursor-pointer hover:bg-slight-gray transition"><h3><Link className="text-gray-900 text-[28px] font-light" href="/explore">Explore</Link></h3></li>
                <li className="flex items-center justify-center w-1/12 font-light cursor-pointer hover:bg-slight-gray transition"><h3><Link className="text-gray-900 text-[28px] font-light" href="/track">Track</Link></h3></li>
                <li className="flex items-center justify-center w-1/12 font-light cursor-pointer hover:bg-slight-gray transition"><h3><Link className="text-gray-900 text-[28px] font-light" href="/plan">Plan</Link></h3></li>
                <li className="flex items-center justify-center w-1/12 ml-auto cursor-pointer"><div className="w-12 h-12 bg-slight-gray rounded-full"></div></li>
            </ul>
        </nav>
    )
}

export default TopNav;

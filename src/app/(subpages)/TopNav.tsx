const TopNav = () => {
    return (
        <nav className="w-full h-20 relative shadow-dark">
            <ul className="h-full flex flex-row">
                <li className="flex items-center justify-center w-1/6 cursor-pointer"><h1>Main Header</h1></li>
                <li className="flex items-center justify-center w-1/12 font-light cursor-pointer hover:bg-slight-gray transition"><h3>Explore</h3></li>
                <li className="flex items-center justify-center w-1/12 font-light cursor-pointer hover:bg-slight-gray transition"><h3>Track</h3></li>
                <li className="flex items-center justify-center w-1/12 font-light cursor-pointer hover:bg-slight-gray transition"><h3>Plan</h3></li>
                <li className="flex items-center justify-center w-1/12 ml-auto cursor-pointer"><div className="w-16 h-16 bg-slight-gray rounded-full"></div></li>
            </ul>
        </nav>
    )
}

export default TopNav;

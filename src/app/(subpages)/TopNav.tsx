export default function TopNav() {
    return (
        <nav className="w-full h-24">
            <ul className="h-full flex flex-row">
                <li className="flex items-center justify-center w-1/6">Main Header</li>
                <li className="flex items-center justify-center w-1/12">Explore</li>
                <li className="flex items-center justify-center w-1/12">Track</li>
                <li className="flex items-center justify-center w-1/12">Plan</li>
                <li className="flex items-center justify-center w-1/12 ml-auto">Profile</li>
            </ul>
        </nav>
    )
}

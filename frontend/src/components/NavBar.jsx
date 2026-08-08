function NavBar() {
    return (
        <div className="sticky top-0 w-full h-12">
            <select data-choose-theme className="select">
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="dracula">Dracula</option>
                <option value="forest">Forest</option>
            </select>
        </div>
    )
}

export default NavBar

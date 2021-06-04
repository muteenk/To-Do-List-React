import React from 'react'

const Nav = () => {
    return (
        <nav>
            <a href="!#">To-Do List</a>
            <div className="search">
                <input type="search" name="search" placeholder="Search Here" />
                <button>Search</button>
            </div>
        </nav>
    )
}

export default Nav;

import './Nav_Module.css';

export default function Navbar() {

    const menu = [
        {nav: "Home"},
        {nav: "About"},
        {nav: "Services"},
        {nav: "Contact"}
    ];
    return (
        <div>
            <nav>
                <ul className='menu'>
                {menu.map((menus, index)=>
                <li key={index}>
                    <a>{menus.nav}</a>
                </li> )}
                </ul>
            </nav>
        </div>
    )
}
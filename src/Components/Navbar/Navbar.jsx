import './Nav_Module.css';
import logo from '../../assets/Logo q.png'


export default function Navbar() {

    const menu = [
        {nav: "Home"},
        {nav: "About"},
        {nav: "Services"},
        {nav: "Contact"}
    ];
    return (
            <nav>
                <img src={logo} alt='logo'/>
                <h1>Tickify.click</h1>
                <ul className='menu'>
                {menu.map((menus, index)=>
                <li key={index}>
                    <a>{menus.nav}</a>
                </li> )}
                </ul>

                <button type='button'>Login</button>
                <button type='button'>Sign Up</button>
            </nav>
     )
}
import './Nav_Module.css';
import logo from '../../assets/Logo white.png'


export default function Navbar() {

    const menu = [ 
        {nav: "Home"},
        {nav: "Event"},
        {nav: "About"},
        {nav: "Services"},
        {nav: "Contact"}
    ];
    return (
            <nav>
                <div className='info'>
                <img src={logo} alt='logo'/>
                <h1>Tickify.click</h1>
                </div>

                <ul className='menu'>
                {menu.map((menus, index)=>
                <li key={index}>
                    <a href='#'>{menus.nav}</a>
                </li> )}
                </ul>

                    <div className='info2'>
                    <a href='#' className='pricing'>pricing</a>
                      <button className='login'>Login</button> <hr/>
                         <button className='getStarted'>Get Started</button>
                    </div>
               
            </nav>
     )
}
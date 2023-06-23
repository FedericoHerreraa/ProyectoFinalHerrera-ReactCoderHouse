import CartWidget from '../CartWidget/CartWidget.jsx'
import stylesNav from './Navbar.module.css'
import { NavLink, Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className={stylesNav.nav}>
            <div className={stylesNav.navTitle}>
                <section className={stylesNav.button}>
                    <NavLink to={'/category/hombre'} className={({ isActive }) => isActive ? stylesNav.active : stylesNav.inactive}>Hombre</NavLink>
                    <NavLink to={'/category/mujer'} className={({ isActive }) => isActive ? stylesNav.active : stylesNav.inactive}>Mujer</NavLink>
                    <NavLink to={'/:home'} className={({ isActive }) => isActive ? stylesNav.active : stylesNav.inactive}>Todos</NavLink>
                </section>
                <img src="" alt="" />
                <Link to={'/:home'} className={stylesNav.title}>All New Style</Link>
            </div>
            <div className={stylesNav.navCarrito}>
                <Link to={'/cart'}><CartWidget/></Link>
            </div>
        </nav>
    )
}

export default Navbar;
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
                    <NavLink to={'/category/mixto'} className={({ isActive }) => isActive ? stylesNav.active : stylesNav.inactive}>Mixto</NavLink>
                </section>
                <img src="" alt="" />
                <Link to={'/'} className={stylesNav.title}>All New Style</Link>
            </div>
            <div className={stylesNav.navCarrito}>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default Navbar;
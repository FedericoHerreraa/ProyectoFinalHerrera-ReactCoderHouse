import styles from './FilterMenu.module.css'
import { NavLink } from 'react-router-dom'


const FilterMenu = () => {
    return (
        <div>
            <h4 className={styles.title}>Filtros:</h4>
            <div className={styles.container}>
                <NavLink to={'/'} className={({ isActive }) => isActive? styles.active : styles.option}>Todos</NavLink>
                <NavLink to={'/category/RayBan'} className={({ isActive }) => isActive? styles.active : styles.option}>RayBan</NavLink>
                <NavLink to={'/category/Vulk'} className={({ isActive }) => isActive? styles.active : styles.option}>Vulk</NavLink>
                <NavLink to={'/category/Rusty'} className={({ isActive }) => isActive? styles.active : styles.option}>Rusty</NavLink>
            </div>
        </div>
    )
}

export default FilterMenu;
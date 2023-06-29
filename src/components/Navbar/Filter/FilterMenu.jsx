import stylesFilterMenu from './FilterMenu.module.css'
import { NavLink } from 'react-router-dom'


const FilterMenu = () => {
    return (
        <div>
            <h4>Filtros:</h4>
            <div className={stylesFilterMenu.container}>
                <NavLink to={'/'} className={({ isActive }) => isActive? stylesFilterMenu.active : stylesFilterMenu.option}>Todos</NavLink>
                <NavLink to={'/category/RayBan'} className={({ isActive }) => isActive? stylesFilterMenu.active : stylesFilterMenu.option}>RayBan</NavLink>
                <NavLink to={'/category/Vulk'} className={({ isActive }) => isActive? stylesFilterMenu.active : stylesFilterMenu.option}>Vulk</NavLink>
                <NavLink to={'/category/Rusty'} className={({ isActive }) => isActive? stylesFilterMenu.active : stylesFilterMenu.option}>Rusty</NavLink>
            </div>
        </div>
    )
}

export default FilterMenu;
import styles from './Aside.module.css'
import { NavLink, Link} from 'react-router-dom'
import FilterMenu from '../Filter/FilterMenu'
import CartWidget from '../CartWidget/CartWidget.jsx'


const Aside = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.subContainer}>
                    <div className={styles.buttonCarrito}>
                        <Link to={'/cart'}><CartWidget/></Link>
                    </div>
                    <div className={styles.containerLink}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAARRJREFUSEvtlLFOwzAURc/9CgaGAoIFhJAYixi7deRz2PmZrmxsFUxILC0SQoJ26NCveMiRE6XBjZ8R3eolSvR8jp99HbHjoR3zcQvM7AB4BAwYS1p7FucSRPgLcBKhX8DQI8kKInwKnAHLKBgAn8BtTtIr6Kx8BdxEwTNwCGQ72SpIwSVVHZhZ6MAlSQr64PXBeiW/BB54iWRDUAL3ShpBJy1h/rGkhSfrZnYEfMfajXRVAjMLzzfgqgZKyka4LTezcAHrMZN0GV7aglfg+p8ET5JGjSC1kr920J2XSlHV6l7QnGU3hnUa9lvUt0Vz4NxzgxM175Iu2t9TMb0DHoDTQskHcC9p0isohGbLi/43WVqi4AcdgqsZWC8YwQAAAABJRU5ErkJggg=="/>
                        <NavLink to={'/'} className={styles.options}>Home</NavLink>
                    </div>
                    <div className={styles.containerLink}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAT1JREFUSEu1lj0uBVEUx39/toDkJSLRobEGhQVIVDageYVQKKh8NEgkCo1CpbAGCkvQ6CmIhBVIOHKemXiZuW/mzrsztz7n/zv3fNxzRcdHHetTApjZOnAALCbAHyStuH8I8AQsJYgPXCUNtEMASxVPARwCl1kAfWBvVDDj3GBb0vmwoJk54CgEKQHMrC4105I+C4Ae8NYWoCfpvQCYAj6iALlRxU12JZ0UABvATVsA1zkGLoBJYBU4BWaiABE1aNS94xTZAS/Ac0aaB+baatNb4Bq4k/TjomY2kaVpE1grgmLn4AvoS7qqyo+Z7QBnwzaxKdqX5IWtPWbmQ7iVG8YCZiW91qr/pWwZeBwJCM1BHkUkwGvy3QgQI9xWFzVmVXVR5wvHV6a/+wuNw/53uJfkT0l5oyWIBl07/1X8AmWIhxmV05BPAAAAAElFTkSuQmCC"/>
                        <NavLink to={'/contact'} className={styles.options}>Contact</NavLink>
                    </div>
                    <div className={styles.containerLink}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUZJREFUSEvFlUlOw0AURF8BglMwSAhWnIIVl0jCJrkTkxgvwYJrIAYBEudAfNRRd7A7HeebYMUr26r+VfWnFh0/6jg+yyEwszXgHjh0OnwAjiR95fiiAzMbASfO4Ak2knQ2lyCqfwO2Iji870v6LhGa2QC4Aj6B3dzFlAMzGwKnwCuwEg4BPUl3MwgC5gnYA4aSzqu4GkGmPigLhy+BP7vICVLuxwFh3GUfwCbQl3Tb4OIluq3VYkKQqZ8EM7PjRVxUCWrqU1HNbHURF1WCkIqdUkErLryd+y4pNMfvJJtZE0EfuPZGB4oETSl6jgUcSLppU+j/LHJyWRu4Nm3aWn2tBuEja9UesA5cOAatqH6KIJKkVREGZwPYdgyZb1UUXIRf89bETPVFB5Gku3VdcfEYN6Sn/UMbH7gvHE9EL2Y5d7JXnQf3AwD4zBnGd6SjAAAAAElFTkSuQmCC"/>
                        <NavLink to={'/aboutUs'} className={styles.options}>About us</NavLink>
                    </div>
                    <div className={styles.containerFilter}>
                        <FilterMenu/>
                    </div>
                </div>
            </div>        
        </>
    )
}

export default Aside;
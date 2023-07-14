import stylesNav from './Navbar.module.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className={stylesNav.nav}>
            <div className={stylesNav.navTitle}>
                <Link to={'/'} className={stylesNav.title}>All New Style</Link>
            </div>
            <div className={stylesNav.navCarrito}>
                <Link to={'/profile'}>
                    <img className={stylesNav.img} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABBBJREFUaEPtmWuojVkYx3+H0hjUuIzkfkthGjKKyZeZyeUDSZSGKZQvJDOR+2Uod4MZ90+MiFKioajBpEhSGtchYWRcZtxGDZok9K91Tu/eZ7/vetbae+ecOs+XXfv9r+d5/u9a67m9FdRyqajl/lNH4H3vYCl3oBUwGPgCGAi0yyP3F/ArcML9PiwF+WIJtARmAMOA7oEOXQYOAeuAx4Frq+DFEJgDLAQ+jDXu1j13en6K0RNDoB+wB+gcYzBjzVVgNKCdMUsogQnAz2bt4UDtxlh3tEyrQwisAHRsyi1vgSnAVoshCwFhdgHfWBSWELME+N6nz0JgAzDVp6hMz6cBmZfbR2AAcKpMzlnUvgJ6AjfSwFkEGgF/AO0tlsqIOQv0B3Q3qkkWgU3uMoX69r+7gD8Cyr6SDsB3gI5EjOgIyx8zAZUBdyIsXQeGALdT1nYFjjlCIeofAK1DCKwGZoZYAP4BegN/e9ZpN3Q0QzP4OBcNc9SnHaG7QJtAAt6IkdC3FJgfqP8wMDR/TSECKhXOBCoXvAtwy7juc+C0EZuENQGUraukEIFlwLwI5fWBN8Z1HwH/GrFJ2Chgv4/Ab8CXEcobAy+M64T9z4hNwnQ3Z/sI3Eu78R6DnwKXjE71Ac4ZsUnYAWCkj0DBhGEwpkJvlQEnyGJgkRGbhF0EepWLwCPgE8DXKnYE5IguZKg8A5qWi4D0XnOJLC0J9gCOFFGeKMs39BF4AjQLfTUJ/EtgvUv9993/6t6mR5YmSVe0y+rDq6RQGL0C6E3VRLngsn0mAd30ETXRe2Av8LVvBxRnV9ZQAqpo1WBl7oAiiTWeJ3VptrPDNR/KJTkpH1DyUn3VDRgPNI94SZ3yK920Yu5mwNhEl17zIVMT7pxWJJkIqO9VWWERJb6++cA0AlK8wKB1HzAJEIkYUUTZXqjKLKBME8C1VgJqHv4EGmR4ddBd9tjMXam6HqDAMTzDlo6jmiwlshzJaikVy79NUaqEIoXRM808vS0Axfg00XhFp6KaZBHQpVNmTWtsNCkYlNE+Wo+U2kxlZ/0WEpUdnwGvQwkI/xVwPMMT1fRqPbdZvc3D6SKv8VzkzCrXNxeSvS3AZI+Dmh1pcnDeSERdnwZWGpdkidrO5VkACwGt3+2Grj7/fnfYk+5MKxDoKCrafOw+fqg5t5QqPwCzfAatBITbbNgJnz3Lc0U1HctqITPmDuSvUVRSdCqXqJLVeP0XqwHrDiT1qV/eCbS1GjHiVL6MAVQNmyWGgJR/4Ebfc82W0oGKZGovN8boiiVQaUtTNp1XZdH8r5I+fxSx9JFP0eipD5z2vFgCSb3quvR5VblDxyync3JVqnKKPrMeLaJ+yuFSSgKxL7GodXUEinp9JVhc63fgHaOCpTFsHG3WAAAAAElFTkSuQmCC"/>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;
import { Link } from 'react-router-dom'
import styles from './Profile.module.css'
import { useAuth } from '../../../context/authContext'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const { user, logout, loading } = useAuth()
    const navigate =  useNavigate()

    const handleLogout = async () => {
        await logout()
        navigate('/login')
    }

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className={styles.fondo}>
            <div>
                <nav className={styles.navProfile}>
                    <h2>Perfil</h2>
                    <div className={styles.home}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMZJREFUSEvtkzEKAjEQRd8/hKC9imcQwVsI1oLXEWvBu6jgHWzsBe8QCWRhsfDPsgYsTJvw3syfiah8VJnPX2AT/r2IUkpDYC1pZ8uHbkMu8DMwAbaSDk4SjqjAL8AYuANzSY+vCFJKA+Ba4DdgGYFnue2gwHMsMyDDF5KervLm/qOgL9x2UF2QK+grsTNoSdpDDs8hJCiS/MGaNQ1vUljQkpyAKbCRdHTb1ElQJCNgJWnv4HaLIgD3pnMHDvh+/xfYxKpH9AJ1S0IZU7zyeQAAAABJRU5ErkJggg=="/>
                        <Link to={'/'}><button>Home</button></Link>
                    </div>
                </nav>
            </div>
            <div className={styles.container}>
                <div className={styles.subContainer}>
                    <div className={styles.information}>
                        <div>
                            <img src="data:image/png;base64,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"/>
                        </div>
                        <div>
                            <label className={styles.email}><b>Email:</b></label>    
                            <p className={styles.user}>{user.email}</p>
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <button onClick={handleLogout}>Cerrar sesion</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
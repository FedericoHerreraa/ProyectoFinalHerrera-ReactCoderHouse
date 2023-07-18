import { Link } from 'react-router-dom';
import styles from './Login.module.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/authContext';

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const [error,setError] = useState('')

    const navigate = useNavigate()

    const { login } = useAuth()

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await login(user.email, user.password)
            navigate('/')
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                setError('El email es invalido, prueba con otro.')
            } else if (error.code === 'auth/wrong-password') {
                setError('La contraseña es invalida, prueba con otra.')

            }
        } 
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.returnHome}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALxJREFUSEvt0jFqAmEQhuHHQwRMn4hnEMFbCKmFXCdYC97FCLmDjb2QQ4SBLAQLZ343Cxa77b+878w338TA32RgvlGQJvyQEU3xho90fJqPHPBPvOIdu0zSElHAj3jBGQtc/kvwhK9f+AmrCjzklQ0CHrHMEfAlvrPJu/dM0Ate2WBwQQzRS5JF1EV5feTyHaqCEP2tablJLYJOcsAMG+yzNrUKgveMNbYZvNKiCuPmP/ds0CQdBWlcg0f0A4wQHhnVdK5sAAAAAElFTkSuQmCC"/>
                <Link to={'/'}><button>HOME</button></Link>
            </div>
            <div className={styles.containerForm}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.title}>
                        <img src="data:image/png;base64,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"/>
                        <h4>Iniciar sesion</h4>
                    </div>
                    {error && <p className={styles.error}>{error}</p>}
                    <div class="form-floating mb-3">
                        <input name="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
                            onChange={handleChange}
                        />
                        <label for="floatingInput">Direccion de email</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" name="password" class="form-control" id="floatingPassword" placeholder="Password"
                            onChange={handleChange}
                        />
                        <label for="floatingPassword">Contraseña</label>
                    </div>
                    <div className={styles.linkContainer}>
                        <Link className={styles.link} to={'/register'}>Todavia no tienes una cuenta? Registrate!</Link>
                    </div>
                    <div className={styles.button}>
                        <button class="btn btn-primary" type="submit">Ingresar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}  

export default Login;
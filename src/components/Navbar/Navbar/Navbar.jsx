import CartWidget from '../CartWidget/CartWidget.jsx'
import stylesNav from './Navbar.module.css'
import { Link } from 'react-router-dom'
import Profile from '../Profile/Profile.jsx'


const Navbar = () => {
    return (
        <nav className={stylesNav.nav}>
            <div className={stylesNav.navTitle}>
                <section className={stylesNav.button}>
                    <Link to={'/cart'}><CartWidget/></Link>
                </section>
                <Link to={'/'} className={stylesNav.title}>All New Style</Link>
            </div>
            <div className={stylesNav.navCarrito}>
                <Link to={'/profile'}>
                    <img className={stylesNav.img} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABVZJREFUaEPtmW2IVUUYx//Pubvh1hr2JqHtbpkElZRUUNEXFcsPRURhmLF6Zg5IKSqGpmXqBXu1NzVbYdszM+7FIIikhATLEJKIQDI1k9gyNXtbLaEtl/buPHG2u7LevfecOffukoLzce//+T/Pb+acOc/MEs7xQed4/TgP8H+v4JCtgO/7V3qedw+YJwGYCqChCO4omLcz0c58Pr89l8v9NhTwVQE0NzePrs1kFoPoPgDXpyxoPwNba2trX2ttbT2eMva0vGIAKeUyMK8AcGGlyQtxXSBaoZRaW4lPagAhxO0EvA1gXCUJY2K+Ic97OAzD/Wl8UwFIKX0w6zQJUmq7iHlmaMxW1zhnAOn7L4BomatxFTpmYJ7WeqOLhwsASd/PgehRF8Mh0zCvVsasTPJLBJBSrgfz/CSjYfmdaFHSyx0LEMyefRd73q5hKc7N9B/yvBvDMOwoJy8L0NzcfFFNTc0BAhrdcg2TivkLZcwdALhUhrIA0vc3gGheBWV1E7DRAq9rrY9G8UEQNMHahQwsqsAvatjmh1pvcAYQQjQQcCR1MqJvrbXTjDE/lIoNgmA8W/sxgKZU3sw/K2PGOANI318DoiWpkgC/WuaJxphf4uKi1WBrD6T9ghPzrNCYXLF3yUdICvEjgLGpABx2jH6/QIhnGViexp+AD0Ot700EKLQKn6cx79MSXauU+t4lTkp5J5g/c9EO1IyoqxvZ0tLSNfBvg1ZASvkcmJ9Oa97Y1JTJZrPWJc73/VEe0R8u2oEaj/mhNmPeiwcQ4hMAk9Oa9+Tz9blc7i+XuLlz59Z3nzr1p4u2qNg1odZLkwCOASj5xscltMw3GWP2uRQlhLiFgN0u2iLNFqX1g0kAJT8YScmIeVlozEtJuuh3KWUWzKtctGdoiPYqpW4eFgAAnT35/ISko6Lv+1d7RHsBjEwNAJxUWl8yXACR78GafH5aay5X8iMohLgBwLYq2pNupXVdEsAJAJdWMDv9IX8zsI6INiilfio8MuNg7RMVtiYDS+lUWo9OAvgaQDRTZ+P4Smk9MR5Ayi1gfuBsrJ6Ad0KtZ8QCBL6/lIlePBsBGFiotV4fDxAEE9hap/28CPI4A8YDOixwLMN8xie/l6jeA8Yy0XVgng3gsrSTZJmvKe50yzVz36W4NjnBwArXQ3hU9PTp0+surq8PGFgNYJQLCAO7tda3FWtLAgghVhPwjIPxu/ne3sfa29ujnSv1KNzsKRAN6jIHmREtVkq96gQgpRwD5kMALoip6gOldfSyV/Tl7vfNZrPekcOHtwC4PyZXl2VuMMacdALo27uFWAdgQRnT7pra2oZq7jQH+s6ZM+fyfE9PZ1kAopVKqehxG7ww5YIKHePBmINNh2W+u9zx0fV5KhwztwEYXzKGaG9jY+Ot2Ww2nwogEgshphCwI2Zmop5+iVIqdC14oE5KGYD5lbgXOanLTbzYCoRoYeDxhAJ3Web5xpg9LiDRqQ/AWgKi65Lyg3m5Mub5OEkiQGElNhMw06G4L0G0mYg+JaLOtra2Q32PYnf3aGa+wmOexESznFoV5peVMU8m5XQCiE68gRBvOqxEUj6X3zm6ESm1ZaZ+B4oDhBALCIh2p+EaUSc7U2v9vmsC1xU47SelnAzmdgBXuSZx1O3LWPvIW5s2Rd2w80gNEDn7vj+CiFYS8JRzpnLC6HbC2lXKmDcq8aoIoD9R3y1bb+8SEEVf0eL/SsbWQ8AeZt5KmczaMAx/r6T4KKYqgIFJpZTjmHmqB0zh/65lzjg5AehgYIfHvLPH2o8q7Z+KQYcMoNIZrDbuPEC1M1ht/Dm/Av8Cf3f6QJYzVZQAAAAASUVORK5CYII="/>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;
import React, { Fragment } from 'react'
import "../../App.css"
import { Link } from "react-router-dom"
import { Search } from './Search'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { logout} from "../../actions/userActions"


const Header = () => {
    const {cartItems} = useSelector(state=>state.cart)

    const alert = useAlert();
    const dispatch = useDispatch();

    const { user, loading } = useSelector(state => state.auth)

    const logoutHandler = () => {
        dispatch(logout());
        alert.success("Sesión cerrada exitosamente")
    }

    return (
        <Fragment>
            <nav className='navbar row'>
                <div className='col-12 col-md-1'>
                    <div className='navbar-brand'>
                        <img src="../images/icono.png" alt="Liqueurs Styles Logo"></img>

                    </div>
                </div>

                <div className='col-12 col-md-2'>
                    <div className='nombre'>
                        <h3><Link to={`/`} class="text-dark">Liqueurs Styles</Link></h3>
                    </div>
                </div>

                {/* Barra de busqueda */}
                <div className='col-12 col-md-4 mt-2 mt-md-0'>
                    <Search />
                </div>
                <div className="col-12 col-md-3 mt-3 mt-md-0 text-center">

                    {/*carrito de compras */}
                    <Link to="/carrito"><i class="fa fa-shopping-cart fa-2x text-white ml-4" aria-hidden="false"></i>
                        <span className="ml-1 mr-4" id="cart_count">{cartItems.length}</span></Link>

                    {user ? (

                        <div className="ml-0 dropdown d-inline">
                            <Link to="#!" className="btn dropdown-toggle text-white mr-4 " type="button"
                                id="dropDownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                <figure className='avatar avatar-nav'>
                                    <img
                                        src={user.avatar && user.avatar.url}
                                        alt={user && user.nombre}
                                        className="rounded-circle"></img>
                                </figure>
                                <span>{user && user.nombre}</span>

                            </Link>
                            <div className='dropdown-menu' aria-labelledby='dropDownMenu'>
                                {/*Preguntamos el rol de quien esta online*/}
                                {user && user.role === "admin" && (
                                    <Link className="dropdown-item" to="/dashboard">Adm. Productos</Link>
                                )}
                                <Link className="dropdown-item" to="/">Pedidos</Link>
                                <Link className="dropdown-item" to="/usuarioLogueado">Mi cuenta</Link>
                                <Link className="dropdown-item" to="/" onClick={logoutHandler}>Cerrar Sesion</Link>
                            </div>
                        </div>

                    ) : !loading && <Link to="/login" className='btn ml-1 mr-4' id='login_btn'>Inicia Sesión</Link>}

                </div>
            </nav>

        </Fragment>
    )

}

export default Header


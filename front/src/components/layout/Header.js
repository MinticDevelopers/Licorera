import React, { Fragment } from 'react'
import "../../App.css"
import { Link } from "react-router-dom"
import Search from './Search'


const Header = () => {

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

                <div className='col-12 col-md-6 mt-2 mt-md-0'>
                    <Search/>

                </div>
                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                    <div className="ml-4 dropdown d-inline">
                        <Link to="#!" className="btn dropdown-toggle text-white mr-4" type="button"
                            id="dropDownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span>Panel de Control</span></Link>
                        <div className='dropdown-menu' aria-labelledby='dropDownMenu'>
                            <Link className="dropdown-item" to="/dashboard">Adm. Productos</Link>
                            <Link className="dropdown-item" to="/">Pedidos</Link>
                            <Link className="dropdown-item" to="/">Mi cuenta</Link>
                            <Link className="dropdown-item" to="/">Cerrar Sesion</Link>
                        </div>
                    </div>

                    <Link to="/carrito"><i class="fa fa-shopping-cart fa-2x text-white" aria-hidden="false"></i>
                        <span className="ml-1" id="cart_count">2</span></Link>
                </div>

            </nav>

        </Fragment>
    )

}

export default Header


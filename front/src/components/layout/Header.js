import React, {Fragment} from 'react'
import "../../App.css"
import {Link} from "react-router-dom"


const Header = () => {

    return (
        <Fragment>
            <nav className='navbar row'>
                <div className='col-12 col-md-1'>
                    <div className='navbar-brand'>
                        <img src="./images/icono.png" alt="Liqueurs Styles Logo"></img>
                        
                    </div>
                </div>

                <div className='col-12 col-md-2'>
                    <div className='nombre'>
                        <h3>Liqueurs Styles</h3>
                    </div>
                </div>

                <div className='col-12 col-md-5 mt-2 mt-md-0'>
                    <div className="input-group">

                        <input
                            type="text"
                            id="search_field"
                            class="form-control"
                            placeholder='Busca productos, marcas y más...'>

                        </input>

                        <div class="input-group-append">
                            <button id="search-btn" class="btn">
                            <i class="fa fa-search fa-2x text-white" aria-hidden="true"></i>
                                
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                    <div className='ml-4 dropdown d-inline'>
                        <Link to= "#" className='btn dropdown-toggle text-white mr-4' type = "button" id ="dropDownMenu" data-toggle= "dropdown" aria-haspopup="true" aria-expanded="false">
                            <span>Panel de Control</span></Link>
                            <div className='dropdown-menu' aria-labelledby='dropDownMenu'>

                                <Link className="dropdown-item" to="/admin/dashboard">Administrador de productos</Link>

                                <Link className="dropdown-item" to="/">Pedidos</Link>

                                <Link className="dropdown-item" to="/">Cuenta</Link>

                                <Link className="dropdown-item" to="/">Cerrar Sesion</Link>
                                
                            </div>
                    </div>
                    <i class="fa fa-shopping-cart fa-2x text-white" aria-hidden="false"></i>
                    <span className="ml-1" id="cart_count">1</span>
                </div>

            </nav>

        </Fragment>
    )

    }

export default Header

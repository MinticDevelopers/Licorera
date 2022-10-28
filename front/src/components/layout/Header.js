import React, {Fragment} from 'react'
import "../../App.css"

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
                    <span><button className='btn' id="login_btn">Iniciar Sesión</button></span>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <i class="fa fa-shopping-cart fa-2x text-white" aria-hidden="false"></i>
                    <span className="ml-1" id="cart_count">1</span>
                </div>

            </nav>

        </Fragment>
    )

    }

export default Header

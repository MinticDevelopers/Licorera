import React from 'react'
import { Link } from "react-router-dom"

export const Sidebar = () => {
    return (
        <div className='sidebar-wraper'>
            <nav id="sidebar">
                <ul className='list-unstyled components'>
                    <li>
                        <Link to="/dashboard"><i className='fa fa-tachometer'></i>Administracion</Link>
                    </li>

                    {/*botones de productos*/}

                    <li>
                        <a href='#productSubmenu' data-toggle="collapse" aria-expanded="false" className='dropdown-toggle'><i className='fa fa-product-hunt'></i>Productos</a>
                        <ul className='"collapse list-unstyled' id="productSubmenu">
                            <li>
                                <Link to="/listadoProductos"><i className='fa fa-clipboard'> Lista de productos</i></Link>
                            </li>

                            <li>
                                <Link to="/nuevoProducto"><i className='fa fa-plus'> Nuevo producto</i></Link>
                            </li>
                        </ul>
                    </li>

                    {/*botones de pedido*/}

                    <li>
                        <Link to="/"><i className='fa fa-shopping-basket'></i>Pedidos</Link>
                    </li>

                    {/*botones de usuarios*/}

                    <li>
                        <Link to="/"><i className='fa fa-users'></i>Usuarios</Link>
                    </li>

                    {/*botones de opinion*/}

                    <li>
                        <Link to="/"><i className='fa fa-shopping-basket'></i>Opiniones</Link>
                    </li>

                </ul>

            </nav>
        </div>
    )
}

export default Sidebar

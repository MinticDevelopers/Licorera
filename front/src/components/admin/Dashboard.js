import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'


export const Dashboard = () => {
    return (
        <Fragment>
            <div className='row'>

                <div className='col-12 col-md-3'>
                    <Sidebar />
                </div>

                <div className='col-12 col-md-9'>
                    <h1 className='my-4'>Panel de Control</h1>

                    <Fragment>
                        <MetaData title={"Panel de Control"}></MetaData>

                        <div className='row pr-4'>

                            {/*tarjeta 1 ventas totales*/}


                            <div className='col-xl-12 col-sm-12 mb-3'>
                                <div className='card text-white bg-primary o-hidden h-100'>
                                    <div className='card-body'>
                                        <div className='text-center card-font-size'>Ventas totales<br /><b>$25.000.000</b>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/*tarjeta 2*/}


                            <div className='col-xl-3 col-sm-6 mb-3'>
                                <div className='card text-white bg-info o-hidden h-100'>
                                    <div className='card-body'>
                                        <div className='text-center card-font-size'>Productos<br /><b>250</b>
                                        </div></div>
                                    <Link className='card-footer text-white clearfix samll z-1 ' to="/">
                                        <span className='float-left'>Detalles</span>
                                        <span className='float-right'><i className='fa fa-angle-right'></i></span>
                                    </Link>
                                </div>
                            </div>



                            {/*tarjeta 3*/}


                            <div className='col-xl-3 col-sm-6 mb-3'>
                                <div className='card text-white bg-warning o-hidden h-100'>
                                    <div className='card-body'>
                                        <div className='text-center card-font-size'>Pedidos<br /><b>80</b>
                                        </div></div>
                                    <Link className='card-footer text-white clearfix samll z-1 ' to="/">
                                        <span className='float-left'>Detalles</span>
                                        <span className='float-right'><i className='fa fa-angle-right'></i></span>
                                    </Link>
                                </div>
                            </div>



                            {/*tarjeta 4*/}


                            <div className='col-xl-3 col-sm-6 mb-3'>
                                <div className='card text-white bg-success o-hidden h-100'>
                                    <div className='card-body'>
                                        <div className='text-center card-font-size'>Usuarios<br /><b>500</b>
                                        </div></div>
                                    <Link className='card-footer text-white clearfix samll z-1 ' to="/">
                                        <span className='float-left'>Detalles</span>
                                        <span className='float-right'><i className='fa fa-angle-right'></i></span>
                                    </Link>
                                </div>
                            </div>



                            {/*tarjeta 5*/}


                            <div className='col-xl-3 col-sm-6 mb-3'>
                                <div className='card text-white bg-danger o-hidden h-100'>
                                    <div className='card-body'>
                                        <div className='text-center card-font-size'>Agotado<br /><b>20</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                </div>



            </div>

        </Fragment>
    )
}

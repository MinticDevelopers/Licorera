import React, { Fragment } from 'react'

export const Home = () => {
  return (
    <Fragment>
        <h1 id = "encabezado_productos">Últimos Productos</h1>

        <section id="productos" className='container mt-5'>
            <div className='row'>
                 {/*Producto 1*/}
                 <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>

                        <img className='card-img-top mx-auto' src="./images/imagesProducts/AMARETTO_GOZIO.jpg" alt="Amaretto Gozio"></img>

                        <div className='card-body d-flex flex-column'>
                        <h5 id="titulo_producto"><a href='http://localhost:3000'>Amarreto Gozie 250ML</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id='numero_opiniones'> 5 reviews</span>
                                <p className='card-text'>$120.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>
                    </div>
                </div>



                {/*Producto 2*/}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>

                        <img className='card-img-top mx-auto' src="./images/imagesProducts/AÑEJO_PATRON.jpg" alt="Añejo Patron"></img>

                        <div className='card-body d-flex flex-column'>
                        <h5 id="titulo_producto"><a href='http://localhost:3000'>Añejo Patron 250ML</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id='numero_opiniones'> 10 reviews</span>
                                <p className='card-text'>$150.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                {/*Producto 3*/}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>

                        <img className='card-img-top mx-auto' src="./images/imagesProducts/BUCHANANS_DELUXE.jpg" alt="Buchanans DeLuxe"></img>

                        <div className='card-body d-flex flex-column'>
                        <h5 id="titulo_producto"><a href='http://localhost:3000'>Buchanans DeLuxe 280ML</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id='numero_opiniones'> 17 reviews</span>
                                <p className='card-text'>$175.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Producto 1*/}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>

                        <img className='card-img-top mx-auto' src="./images/imagesProducts/AMARETTO_GOZIO.jpg" alt="Amaretto Gozio"></img>

                        <div className='card-body d-flex flex-column'>
                        <h5 id="titulo_producto"><a href='http://localhost:3000'>Amarreto Gozie 250ML</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id='numero_opiniones'> 5 reviews</span>
                                <p className='card-text'>$120.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </section>
    </Fragment>

  )
}


export default Home
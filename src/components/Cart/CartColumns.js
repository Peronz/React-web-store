import React from 'react';

export default function CartColumns() {
  return ( 
    <div className='container-fluid text-center d-none d-lg-block'>
        <div className='row'>
            <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">Proizvodi</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">Ime proizvoda</p>
            </div> 
            <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">Cijena</p>
            </div> 
            <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">Količina</p>
            </div> 
            <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">Ukloni</p>
            </div> 
            <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">Ukupna cijena</p>
            </div>   
        </div>
    </div>
  
  );

}


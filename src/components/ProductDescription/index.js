import React from 'react';
import './style.scss';

const ProductDescription = ({ layout, name, classNameDescription, regularPrice, actualPrice, installments}) => {
  return (
    <section className={`productDescription ${layout}`}>
      <p className='productDescription__name'>
        {name}
      </p>
      <div className='productDescription__pricingGroup'>
        <div className='productDescription__actual'>
          <span className='productDescription__price--actual'>
            {actualPrice}{' '}
          </span>
          <span className={classNameDescription}>
            {regularPrice}
          </span>
          <span className='productDescription__installments'>
            {installments}
          </span>
        </div>
        {/* <div className='productDescription__reg'> */}
          {/* <span className='productDescription__price--reg'>R$ 109,90</span> */}
          {/* <span className='productDescription__discountPercent'>(desconto de 30%)</span> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default ProductDescription;

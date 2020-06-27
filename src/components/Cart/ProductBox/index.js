import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateProduct, removeProduct } from '../../../actions';
import './style.scss';
import ProductDescription from '../../ProductDescription';
import Image from '../../Image';
import SelectUnit from '../../SelectUnit';
import ProductPhoto from '../../../assets/product.png';

const ProductBox = ({ product, updateProduct, removeProduct }) => {
  const [amount, setAmount] = useState(product.amount);

  const handleMinusClick = () => {
    if (amount - 1 > 0) {
      updateProduct({
        id: product.id,
        amount: -1,
        price: product.price,
      });
      setAmount(amount - 1);
    } else {
      removeProduct({ id: product.id });
    }
  };

  const handlePlusClick = () => {
    if (amount !== 5) {
      updateProduct({
        id: product.id,
        amount: 1,
        price: product.price,
      });

      setAmount(amount + 1);
    }
  };

  return (
    <div className='productBox product__cart'>
      <Image src={ProductPhoto} />
      <div className='productBox__text'>
        <ProductDescription layout='isInsideCart' {...product} />
        <div>
          <p className='productBox__size'>Tamanho: {product.size}</p>
        </div>
        <SelectUnit
          amount={amount}
          handleMinusClick={handleMinusClick}
          handlePlusClick={handlePlusClick}
        />
        <button
          className='productBox__removeItemBtn'
          onClick={() => removeProduct({ id: product.id })}
        >
          Remover Produto
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ updateProduct, removeProduct }, dispatch);

export default connect(null, mapDispatchToProps)(ProductBox);
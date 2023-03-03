import React from 'react'
import { formatDateDDMMYY } from '../../utils/date'
import "./styles/PurchaseCard.css"

const PurchaseCard = ({purchase}) => {

  // const navigate = useNavigate();

  // const handleClickProduct = () => {
  //   navigate(`/products/${product.id}`)
  // };

  return (
    <article className='all'>
      <div className='container__1'>
        <div className='container__img'>
          <img src={purchase.product.images[0].url} alt="" />
        </div>
        <h4 className='title'>{purchase.product.title}</h4>
      </div>
      <div className='container__2'>
        <h4 className='date'>{formatDateDDMMYY(purchase.createdAt)}</h4>
        <div className='quantity'>
          <h4>{purchase.quantity}</h4>
        </div>
        <h4 className='price'>$ {purchase.product.price}</h4>
      </div>
    </article>
  )
}

export default PurchaseCard
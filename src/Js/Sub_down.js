import React from 'react'
import '../css/subdown.css'
function subdown({id,title,image,price,rating}) {
  return (
    <div className='subdown'>
        <div className='sub_down_img'>
          <img src={image} />
        </div>
        <div className='sub_down_main'>
          <div className='sub_down_text'>
            <a href='https://www.amazon.com/GIGIZAZA-Velvet-Decorative-Pillow-Cushion/dp/B07CVGRQ8D/ref=pd_cart_crc_cko_cp_sccl_1_1/139-5744991-3812764?pd_rd_w=4EWA1&content-id=amzn1.sym.7c768d31-fcb6-4e60-bb16-7d8e97d21350&pf_rd_p=7c768d31-fcb6-4e60-bb16-7d8e97d21350&pf_rd_r=46MPCA40SDZA48FB5GTX&pd_rd_wg=w9a45&pd_rd_r=bd6e8934-f54a-4489-867b-2d1d8a1fab11&pd_rd_i=B07CVGRQ8D&psc=1'>{title}</a>
          </div>
          <div className="sub_down_rating">
              {Array(rating)
              .fill()
              .map((_, i) => (
              <p>🌟</p>
              ))}
          </div>
          <p className="sub_down_price">
            <small>$</small>
            <strong>{price}</strong>
          </p>

          <button>Add to cart</button>


        </div>
    </div>
  )
}

export default subdown

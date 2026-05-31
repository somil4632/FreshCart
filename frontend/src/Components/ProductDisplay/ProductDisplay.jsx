import React from 'react'
import "./ProductDisplay.css"
import staricon from "../../assets/star icon.png"
const ProductDisplay = (props) => {
    const {product} = props;
    if(!product){
        return <div>Loading...</div>
    }
    return (
        <div className='productdisplay'>
          <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" height="150px"/>
                 <img src={product.image} alt=""height="150px"/>
            </div>
            <div className='productdisplay-img'>
                <img className='productdisplay-main-img' src={product.image} alt="" height="300px"/>
            </div>
          </div>

          <div className="productdisplay-right">
            <h1 className="productdisplay-h1">{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={staricon} alt="" height="20px" />
                 <img src={staricon} alt="" height="20px" />
                  <img src={staricon} alt="" height="20px" />
                   <img src={staricon} alt="" height="20px" />
                    <img src={staricon} alt="" height="20px" />
            </div>
             <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                     &#8377;{product.old_price}
                </div>
                 <div className="productdisplay-right-price-new">
                     &#8377;{product.new_price}
                 </div>
                 </div>
                 <div className="productdisplay-right-description">
                    Fresh and high-quality grocery products available at affordable prices for everyday shopping needs
                 </div>
                 <div className='productdisplay-right-quantity'>
                    <h1>Select Quantity</h1>
                    <div className="productdisplay-right-quantity">
                        <div>1 Pack</div>
                        <div>2 Pack</div>
                        <div>3 Pack</div>
                    </div>
                 </div>
                 <button>ADD TO CART</button>
                 <div className="productdisplay-right-category">
                    <span>Category:<span> Snacks , Drinks , Vegetables , Dairy Products</span></span>
                 </div>
                 <div className="productdisplay-right-category">
                    <span>Tags:<span> Fresh , Oragnic , Healthy , Best Quality</span></span>
                 </div>
             </div>
          </div>
    )
}
export default ProductDisplay
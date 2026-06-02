import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Description from '../Components/Description/Description';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
const Product = () => {
    const{all_products} = useContext(ShopContext);
    const{productId} = useParams();
    const product = all_products.find((e)=> e.id === Number(productId));
    if(!product){
        return <div>Product not found</div>
    }
    return (
        <div >
            <Breadcrums product={product}/>
            <ProductDisplay product={product}/>
            <Description/>
            <RelatedProducts/>
        </div>
    )
}
export default Product 
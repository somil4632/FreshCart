import React , {useContext} from 'react'
import "../CSS/ShopCategory.css"
import {ShopContext} from "../Context/ShopContext"
const ShopCategory = (props) => {
    const {all_products}=useContext(ShopContext)
    return (
        <div className='shop-category'>
            
            <img src={props.banner} alt="" />

            {all_products.map((item, i) => {

                if (props.category === item.category) {
                    return (
                        <div key={i}>
                            {item.name}
                        </div>
                    )
                }

                return null
            })}

        </div>
    )
}
export default ShopCategory
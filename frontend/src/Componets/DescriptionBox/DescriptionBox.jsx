import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-nav">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (112)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is a digital platform that allows businesses or individuals to sell products and services online. 
                These websites typically feature a catalog of items, categorized by product type, and offer tools for browsing, searching,
                 and filtering. Customers can view detailed product descriptions, images, prices, and customer reviews to make informed purchase decisions. 
                 The site usually includes secure payment gateways for transactions and options for delivery or pickup.
                  Key components of an e-commerce site include user accounts, shopping carts, order tracking,
                 and customer support, often designed for ease of use on both desktop and mobile devices.</p>
                 <p>
                 An e-commerce website is an online platform where businesses sell products or services. It includes features like product listings,
                  secure payment options, shopping carts, and customer accounts. Users can browse, compare, 
                 and purchase items from anywhere, with delivery or pickup options. These sites prioritize a seamless shopping experience across devices.
                 </p>
        </div>
    </div>
  )
}

export default DescriptionBox
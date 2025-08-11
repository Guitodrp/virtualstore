import React from 'react';
import Header from "../Header";
import SidebarCart from "../SidebarCart";
import ProductsList from "../ProductsList";
import ExclusiveSection from "../ExclusiveSection";
import CommentsSection from "../CommentsSection";

export default function HomePage({ products, setShowSideCart, showSideCart }) {
    return (
        <>
            <Header />
            <SidebarCart setShowSideCart={setShowSideCart} showSideCart={showSideCart} />
            <div className='page-inner-content'>

                <div className='section-title'>
                    <h3>
                        Produtos Selecionados
                    </h3>
                    <div className='underline'>

                    </div>
                </div>

                <div className='main-content'>
                    <ProductsList products={products} />
                </div>
            </div>
            <ExclusiveSection />
            <CommentsSection />
        </>
    )
}

import { useContext, useState } from 'react';
import './Explore.css'
import { AppContext } from '../../Context/AppContext';
import DisplayCategory from '../../Components/DisplayCategory/DisplayCategory';
import DisplayItems from '../../Components/DisplayItems/DisplayItems';
import CustomerForm from '../../Components/CustomerForm/CustomerForm';
import CartItems from '../../Components/CartItems/CartItems';
import CartSummary from '../../Components/cartSummary/cartSummary';
const Explore = () => {
    const {categories} = useContext(AppContext);
    const [selectedCategory, setSelectedCategory] = useState("");
    return (
        <div className="expolore-container text-light" >
            <div className="left-column">
                <div className="first-row" style={{overflowY: 'auto'}}>
                    <DisplayCategory 
                    selectedCategory={selectedCategory}
                    setSelectedCategory = {setSelectedCategory}
                    categories={categories}/>
                </div>
                <hr className="horizontal-line"/>
                <div className="second-row" style={{overflowY: 'auto'}}>
                    <DisplayItems/>
                </div>
            </div>
            <div className="right-column d-flex flex-column ">
                <div className="customer-form-container" style={{height: '15%'}}>
                        <CustomerForm/>
                </div>
                <hr className="my-3 text-light"/>
                <div className="cart-item-container" style={{height:'55%',overflowY: 'auto'}}>
                        <CartItems/>
                </div>
                <div className="cart-summary-container" style={{height:'30%'}}>
                        <CartSummary/>
                </div>
            </div>
        </div>
    )
}

export default Explore;
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./SearchModal.scss";
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '@stores/slices/product.slice';
import { convertToVND } from '@mieuteacher/meomeojs';
import { useNavigate } from 'react-router-dom';
import FoodModal from './FoodModal';

function SearchModal() {
    const [show, setShow] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();

    const userLoginStore = useSelector(store => store.userLoginStore);

    const productStore = useSelector(store => store.productStore);

    const [timeOutTarget, setTimeOutTarget] = useState(null);

    const handleChange = (e) => {

        clearTimeout(timeOutTarget); // hủy các timeout đã được đặt trước đó

        setTimeOutTarget(setTimeout(() => {

            if (!userLoginStore.loading) {
                if (e.target.value != "") {
                    setShowSearch(true)
                    dispatch(productActions.searchProductByName(e.target.value))
                }
                if (e.target.value == "") {
                    setShowSearch(false)
                }

            }

        }, 1000));
    };

    console.log(productStore.searchData)

    return (
        <>

            <Button variant="light" onClick={handleShow} size="sm" className="search-btn-container">
                <div id="search-btn" className="fas fa-search search-btn"></div>
            </Button>

            <Modal show={show} onHide={handleClose} size='xl'>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <input onChange={(e) => handleChange(e)} className='input-search' type="text" placeholder='SEARCH FOOD' autoFocus />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='modal-body-container'>
                        <div className='category'>
                            <h2>Category</h2>
                            <p onClick={() => {
                                navigate("/menu/combo")
                                handleClose()
                            }}>combo</p>
                            <p onClick={() => {
                                navigate("/menu/pizza")
                                handleClose()
                            }}>pizza</p>
                            <p onClick={() => {
                                navigate("/menu/burger")
                                handleClose()
                            }}>burger</p>
                            <p onClick={() => {
                                navigate("/menu/chicken")
                                handleClose()
                            }}>chicken</p>
                            <p onClick={() => {
                                navigate("/menu/dinner")
                                handleClose()
                            }}>dinner</p>
                            <p onClick={() => {
                                navigate("/menu/drink")
                                handleClose()
                            }}>drink</p>
                        </div>
                        <div className='search-render'>
                            <h3>SUGGESTED PRODUCTS</h3>
                            <div className='search-food-container'>
                                {/* {showSearch ? (productStore.searchData?.map((food) =>
                                    <div className='food-container'>
                                        <div className='food-image'>
                                            <img src={food.url} alt="" />
                                        </div>
                                        <div className='food-infor'>
                                            <h5>{food.name}</h5>
                                            <p>{convertToVND(food.price)}</p>
                                        </div>
                                    </div>)) : (<></>)} */}
                                {showSearch ? (productStore.searchData?.map((food) =>
                                    <div className='food-container'>
                                        <FoodModal food={food} />
                                        <div className='food-infor'>
                                            <p>{food.name}</p>
                                            <p>{food.price}</p>
                                        </div>
                                    </div>)) : (<></>)}
                            </div>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default SearchModal;
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./FoodModal.scss";
import { convertToVND } from '@mieuteacher/meomeojs';
import { useDispatch, useSelector } from 'react-redux';
import { userLoginActions } from '@stores/slices/userLogin.slice';
import toast, { Toaster } from 'react-hot-toast';

function FoodModal({ food }) {
  const [show, setShow] = useState(false);
  const [quantity, setQuantity] = useState(1)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const userLoginStore = useSelector(store => store.userLoginStore);

  useEffect(() => {
    dispatch(userLoginActions.checkTokenLocal(localStorage.getItem("token")))
  }, [])

  function addToCart(buyItem) {
    if (localStorage.getItem("token")) {


      let carts = [];
      let flag = false;

      carts = userLoginStore.userInfor.carts?.slice().map(item => {
        if (item.productId == buyItem.productId) {
          let temp = { ...item };
          temp.quantity += buyItem.quantity;
          flag = true;
          return temp
        }

        return item
      })

      if (!flag) {
        carts?.push(buyItem)
      }

      dispatch(userLoginActions.updateCart(
        {
          userId: userLoginStore.userInfor.id,
          carts: {
            carts: carts
          }
        }
      ))
      return
    }

    // chưa đăng nhập

    if (localStorage.getItem("carts")) {
      // đã từng có giỏ hàng
      let carts = JSON.parse(localStorage.getItem("carts"));
      console.log(carts);
      let flag = false;
      carts.map(item => {
        if (item.productId == buyItem.productId) {
          item.quantity += buyItem.quantity
          flag = true;
        }
        return item
      })
      if (!flag) {
        carts.push(buyItem)
      }
      localStorage.setItem("carts", JSON.stringify(carts));
    } else {
      // chưa từng có
      let carts = [buyItem]
      localStorage.setItem("carts", JSON.stringify(carts));
    }
  }

  const notify = () => {
    toast.success('Add To Cart success!', {
      position: 'top-right',
    });
  };

  return (
    <div >
      <Button variant="primary" onClick={handleShow} className='detail-btn'>
        <img src={food.url} alt="" />
      </Button>

      <Modal show={show} onHide={handleClose} className='modal-container' size='lg'>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className='product-container'>
          <div className='product-img'>
            <img src={food.url} alt="" />
          </div>
          <div className="product-detail">
            <h5>{food.name}</h5>
            <div className='quantity-container'>
              <div>
                <button onClick={() => {
                  if (quantity > 1) {
                    setQuantity(quantity - 1)
                  }
                }}>
                  <span class="material-symbols-outlined">
                    remove
                  </span>
                </button>

                <span className='quantity' style={{ fontSize: "18px" }}>{quantity}</span>

                <button onClick={() => setQuantity(quantity + 1)}>
                  <span class="material-symbols-outlined">
                    add
                  </span>
                </button>
              </div>

              <div>
                <span style={{ fontSize: "18px" }}>{convertToVND(food.price * quantity)}</span>
              </div>

            </div>
            <Button onClick={() => {
              handleClose()
              notify()
              addToCart({
                productId: food.id,
                quantity: quantity,
                des: "hello",
                userId: userLoginStore.userInfor.id,
                url: food.url,
                name: food.name,
                price: food.price
              })
            }} className='addToCart-btn'>
              Add to cart
            </Button>
          </div>
        </Modal.Body>
      </Modal>
      <Toaster />
    </div>
  );
}

export default FoodModal;
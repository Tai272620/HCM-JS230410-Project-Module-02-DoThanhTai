import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { convertToVND, randomId } from "@mieuteacher/meomeojs";
import { userLoginActions } from "../../stores/slices/userLogin.slice";
import { Link } from "react-router-dom";

export default function Checkout() {

  const dispatch = useDispatch();

  const userLoginStore = useSelector(store => store.userLoginStore);

  let carts = [...userLoginStore.userInfor.carts]

  function handleDeleteProduct(productId) {

    let carts = userLoginStore.userInfor.carts;

    let updatedCart = carts.filter((product) => product.productId !== productId);

    // setCartData(updatedCart);

    dispatch(userLoginActions.updateCart(
      {
        userId: userLoginStore.userInfor.id,
        carts: {
          carts: updatedCart
        }
      }
    ))
  }

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard>
              <MDBCardBody className="p-4">
                <MDBRow>
                  <MDBCol lg="7">
                    <MDBTypography tag="h5">
                      <Link to="/" className="text-body">
                        <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continue
                        shopping
                      </Link>
                    </MDBTypography>

                    <hr />

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Shopping cart</p>
                        <p className="mb-0">You have {carts.length} items in your cart</p>
                      </div>
                      <div>
                        <p>
                          <span className="text-muted">Sort by:</span>
                          <a href="#!" className="text-body">
                            price
                            <MDBIcon fas icon="angle-down mt-1" />
                          </a>
                        </p>
                      </div>
                    </div>

                    {carts?.map((product) => (
                      <MDBCard className="mb-3" key={randomId()}>
                        <MDBCardBody>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <MDBCardImage
                                  src={product.url}
                                  fluid className="rounded-3" style={{ width: "65px" }}
                                  alt="Shopping item" />
                              </div>
                              <div className="ms-3">
                                <MDBTypography tag="h5">
                                  {product.name}
                                </MDBTypography>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{ width: "50px" }}>
                                <MDBTypography tag="h5" className="fw-normal mb-0">
                                  {product.quantity}
                                </MDBTypography>
                              </div>
                              <div style={{ width: "80px" }}>
                                <MDBTypography tag="h5" className="mb-0">
                                  {convertToVND(product.price)}
                                </MDBTypography>
                              </div>
                              <a href="#!" style={{ color: "#cecece" }} onClick={() => handleDeleteProduct(product.productId)}>
                                <MDBIcon fas icon="trash-alt" />
                              </a>
                            </div>
                          </div>
                        </MDBCardBody>
                      </MDBCard>
                    ))}
                  </MDBCol>

                  <MDBCol lg="5">
                    <MDBCard className="bg-primary text-white rounded-3">
                      <MDBCardBody>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <MDBTypography tag="h5" className="mb-0">
                            Card details
                          </MDBTypography>
                          <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                            fluid className="rounded-3" style={{ width: "45px" }} alt="Avatar" />
                        </div>

                        <p className="small">Card type</p>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-visa fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-amex fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                        </a>

                        <form className="mt-4">
                          <MDBInput className="mb-4" label="Cardholder's Name" type="text" size="lg"
                            placeholder="Cardholder's Name" contrast />

                          <MDBInput className="mb-4" label="Card Number" type="text" size="lg"
                            minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast />

                          <MDBRow className="mb-4">
                            <MDBCol md="6">
                              <MDBInput className="mb-4" label="Expiration" type="text" size="lg"
                                minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
                            </MDBCol>
                            <MDBCol md="6">
                              <MDBInput className="mb-4" label="Cvv" type="text" size="lg" minLength="3"
                                maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
                            </MDBCol>
                          </MDBRow>
                        </form>

                        <hr />

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2">$4798.00</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Shipping</p>
                          <p className="mb-2">$20.00</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Total(Incl. taxes)</p>
                          <p className="mb-2">$4818.00</p>
                        </div>

                        <MDBBtn color="info" block size="lg">
                          <div className="d-flex justify-content-between">
                            <span>$4818.00</span>
                            <span>
                              Checkout{" "}
                              <i className="fas fa-long-arrow-alt-right ms-2"></i>
                            </span>
                          </div>
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useParams } from "react-router";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  //console.log(...product);
  console.log(state.length);




  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {state.length === 0 ? (
              <div>
                <h1 className="text-center mt-5 text-capitalize">
                  your cart is currently empty
                </h1>
              </div>
            ) : (
              <div className="col-md-12">
                <div>
                  {state?.map((product) => (
                    <>
                      <div class="card mb-3 mt-5" key={product.id} >
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img
                              src={product.image}
                              class="img-fluid rounded-start"
                              alt={product.title} height="200px"
                            />
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h3 class="card-title">{product.title}</h3>
                              <p class="card-text lead fw-bold">
                              {product.qty} x ${product.price} = $
                              {product.qty * product.price}
                              </p>

                            </div>
                          </div>
                        </div>
                      </div>{" "}
                    </>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;

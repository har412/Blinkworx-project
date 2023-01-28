import React from 'react'
import "../styles/BookOrder.css"
function BookOrder() {
  return (
<div>
      <div className="row">
        <div className="col-lg-8 offset-lg-2 box mt-5">
          <h2 className='text-center'>Orders</h2>

                <form action="">
                    <div className='row'>
                        <div className="col col-12 col-lg-9 px-3">
                    <input type="text"  className='form-control' placeholder='Search Description'/>
                        </div>
                        <div className="col col-12 col-lg-2 px-0">
                    <input type="submit" className='btn btn-outline-info form-control' value="Search"  />

                        </div>
                        </div>
                </form> 

                <div className="row-order">
                    <input type="checkbox" />
                  
                        <div className="mybox">
                            <h6>Hp Laptop</h6>
                            <h6>This is a HP Laptop</h6>
                        </div>
                   
                </div>



              <div >
                <button className="btn btn-warning ">New Order</button>
              </div>
        </div>
      </div>
    </div>
  )
}

export default BookOrder

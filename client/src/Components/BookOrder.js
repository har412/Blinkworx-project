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
                        <div className="col-lg-10">
                    <input type="text"  className='form-control' placeholder='Search Description'/>
                        </div>
                        <div className="col-lg-2">
                    <input type="submit" className='btn btn-outline-info' value="Search"  />

                        </div>
                        </div>
                </form> 

                <div className="row">
                    <div className="col-lg-1">

                    <input type="checkbox" />
                    </div>
                    <div className="col-lg-11">
                        <div className="mybox">
                            <h6>Hp Laptop</h6>
                            <h6>This is a HP Laptop</h6>
                        </div>
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

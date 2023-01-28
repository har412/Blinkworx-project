
import React from 'react'
import '../styles/Dashboard.css'
function Dashboard() {
  return (
    <div>
      <div className="row">
        <div className="col-lg-8 offset-lg-2 box mt-5">
          <h2 className='text-center'>Orders</h2>
              <table className='table table-dark'>
                <thead>
                  <tr>
                  <th>Order Id</th>
                    <th>Order Description</th>
                    <th>Count Of Products</th>
                    <th>Created Data</th>
                    <th colspan="2" ></th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Order for Customer 1</td>
                        <td>2</td>
                        <td>2022-06-01</td>
                        <td><a href=""><i class="bi bi-pen-fill"></i></a></td>
                        <td><a href=""><i class="bi bi-trash"></i></a></td>
                    </tr>
                </tbody>
              </table>

              <div >
                <button className="btn btn-warning ">New Order</button>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard


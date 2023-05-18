import {orders} from './MockData'
import { useState } from 'react';
import './Order.css'

const Order = ()=>{
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const filteredOrders = orders.filter((item)=>{
            return(
                item.orderId.toString().includes(searchTerm) || item.vendorName.toLowerCase().includes(searchTerm.toLowerCase())
                || item.pickupDate.includes(searchTerm) || item.status.toLowerCase().includes(searchTerm.toLowerCase())
            )
        })

        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); // Reset to first page when search term changes
      };

      const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

    return(
        <div className='container'>
            <input type="text" placeholder='Search...' value={searchTerm} onChange={handleSearch} className='orderField'/>
            <h2>Order details</h2>
            <table>
                <thead>
                    <tr>
                    <th>Order ID</th>
                    <th>Vendor Name</th>
                    <th>Pickup Date</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                {currentItems.map((item) => (
                    <tr key={item.orderId}>
                    <td>{item.orderId}</td>
                    <td>{item.vendorName}</td>
                    <td>{item.pickupDate}</td>
                    <td>{item.status}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div>
        {filteredOrders.length > itemsPerPage && (
          <ul className="pagination">
            {Array.from({ length: Math.ceil(filteredOrders.length / itemsPerPage) }, (_, i) => (
              <li key={i} className={currentPage === i + 1 ? 'active' : ''}>
                <button onClick={() => handlePageChange(i + 1)}>{i + 1}</button>
              </li>
            ))}
          </ul>
        )}
      </div>
        </div>
    )
}

export default Order
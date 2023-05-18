import React from 'react';
import { shallow } from 'enzyme';

describe('Order Component', () => {
  const orders = [
    {
        orderId: 1,
        vendorName: "Vendor A",
        pickupDate: "2023-05-15",
        status: "Shipped",
        username: "userA",
        password: "passwordA"
      },
      {
        orderId: 2,
        vendorName: "Vendor B",
        pickupDate: "2023-05-16",
        status: "Pending",
        username: "userB",
        password: "passwordB"
      },
      {
        orderId: 3,
        vendorName: "Vendor C",
        pickupDate: "2023-05-17",
        status: "Cancelled",
        username: "userC",
        password: "passwordC"
      }
  ];

  it('should render table rows correctly', () => {
    const wrapper = shallow(<NextPage order={orders} />);
    const tableRows = wrapper.find('tbody tr');

    expect(tableRows).toHaveLength(3);
    expect(tableRows.at(0).find('td').at(0).text()).toEqual('1');
    expect(tableRows.at(0).find('td').at(1).text()).toEqual('Vendor A');
    expect(tableRows.at(0).find('td').at(2).text()).toEqual('2023-05-15');
    expect(tableRows.at(0).find('td').at(3).text()).toEqual('Shipped');
  });

  it('should filter table rows based on search term', () => {
    const wrapper = shallow(<NextPage order={orders} />);
    const searchInput = wrapper.find('input[type="text"]');
    searchInput.simulate('change', { target: { value: 'Vendor B' } });

    const tableRows = wrapper.find('tbody tr');

    expect(tableRows).toHaveLength(1);
    expect(tableRows.at(0).find('td').at(0).text()).toEqual('2');
    expect(tableRows.at(0).find('td').at(1).text()).toEqual('Vendor B');
    expect(tableRows.at(0).find('td').at(2).text()).toEqual('2023-05-16');
    expect(tableRows.at(0).find('td').at(3).text()).toEqual('Pending');
  });

  it('should handle page change correctly', () => {
    const wrapper = shallow(<NextPage order={orders} />);
    const pageButton = wrapper.find('.pagination button').at(1);
    pageButton.simulate('click');

    expect(wrapper.state('currentPage')).toEqual(2);
  });
});
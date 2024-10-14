import { useSelector } from 'react-redux';

function Customer() {
  const costumer = useSelector((store) => store.customer.fullName);

  return <h2>👋 Welcome, {costumer}</h2>;
}

export default Customer;

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export const Payment = () => {
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [errors, setErrors] = useState({});
//   const navigate = useNavigate();


  const formatCardNumber = (value) => {
    const rawValue = value.replace(/\D/g, '');

    if (rawValue.length > 16) {
      return cardNumber;
    }

    const formattedValue = rawValue.replace(/(\d{4})(?=\d)/g, '$1 ');

    return formattedValue;
  };

  const formatExpiryDate = (value) => {
    return value
      .replace(/^(\d{2})(\d{1,2})$/, '$1/$2')
      .slice(0, 5);
  };

  const validateInputs = () => {
    const errors = {};

    if (cardHolder.trim() === '') {
      errors.cardHolder = 'Card holder name is required';
    }
    if (!/^\d{16}$/.test(cardNumber.replace(/\s/g, ''))) {
      errors.cardNumber = 'Card number must be 16 digits';
    }
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      errors.expiryDate = 'Expiry date must be in MM/YY format';
    }
    if (!/^\d{3,4}$/.test(cvv)) {
      errors.cvv = 'CVV must be 3 or 4 digits';
    }

    return errors;
  };

  const handlePayment = (paymentMethod) => {
    const validationErrors = validateInputs();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Proceed with payment logic
      toast.success(`${paymentMethod} Payment Successful!`);
    //   navigate('/')
    }
  };

  return (
    <div className=" min-h-screen">
      <div className='flex  border-t border-b'>
          <h2 className="text-5xl font-poppins font-semibold mt-[50px] ml-12">Payment</h2>
        </div>
    <div className='flex items-center justify-center '>
      <div className="w-[600px] p-8 bg-white shadow-2xl rounded-2xl">
        <h2 className="text-center text-3xl font-montserrat font-bold text-blue-600">Complete Your Payment</h2>
        
        <div className="flex justify-between mb-6 mt-7">
          <button 
            name="paypal" 
            type="button" 
            onClick={() => handlePayment('PayPal')}
            className="flex items-center justify-center w-1/3 px-4 py-2 border border-blue-300 rounded-md hover:bg-blue-100 transition duration-200"
          >
            {/* <img src="paypal-logo.svg" alt="PayPal" className="h-6"/> */}<h1>PayPal</h1>
          </button>
          <button 
            name="apple-pay" 
            type="button" 
            onClick={() => handlePayment('Apple Pay')}
            className="flex items-center justify-center w-1/3 ml-5 px-4 py-2 border border-red-300 rounded-md hover:bg-red-100 transition duration-200"
          >
            {/* <img src="apple-pay-logo.svg" alt="Apple Pay" className="h-6"/> */}<h1>Apple Pay</h1>
          </button>
          <button 
            name="google-pay" 
            type="button" 
            onClick={() => handlePayment('Google Pay')}
            className="flex items-center justify-center w-1/3 px-4 ml-5 py-2 border border-blue-300 rounded-md hover:bg-red-100 transition duration-200"
          >
            {/* <img src="google-pay-logo.svg" alt="Google Pay" className="h-6"/> */}<h1>Google Pay</h1>
          </button>
        </div>

        <div className="flex items-center justify-center my-4">
          <span className="w-1/3 border-b border-blue-300"></span>
          <span className="px-2 text-gray-500">or using credit card</span>
          <span className="w-1/3 border-b border-blue-300"></span>
        </div>

        <form className="space-y-6">
          <div>
            <label htmlFor="card-holder" className="block text-sm font-medium text-gray-700">Card holder full name</label>
            <input 
              type="text" 
              id="card-holder" 
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
              placeholder="Enter your full name" 
              className="w-full px-3 py-2 mt-1 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {errors.cardHolder && <p className="text-blue-500 text-xs mt-1">{errors.cardHolder}</p>}
          </div>
          <div>
            <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Card Number</label>
            <input 
              type="text" 
              id="card-number" 
              value={cardNumber}
              onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
              placeholder="0000 0000 0000 0000" 
              className="w-full px-3 py-2 mt-1 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              maxLength={19} // 16 digits + 3 spaces
            />
            {errors.cardNumber && <p className="text-blue-500 text-xs mt-1">{errors.cardNumber}</p>}
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="expiry-date" className="block text-sm font-medium text-gray-700">Expiry Date</label>
              <input 
                type="text" 
                id="expiry-date" 
                value={expiryDate}
                onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
                placeholder="MM/YY" 
                className="w-full px-3 py-2 mt-1 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {errors.expiryDate && <p className="text-blue-500 text-xs mt-1">{errors.expiryDate}</p>}
            </div>
            <div className="flex-1">
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
              <input 
                type="text" 
                id="cvv" 
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="CVV" 
                className="w-full px-3 py-2 mt-1 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {errors.cvv && <p className="text-blue-500 text-xs mt-1">{errors.cvv}</p>}
            </div>
          </div>
          <button 
            type="button" 
            className="w-full px-4 py-2 text-white bg-blue-700 rounded-md focus:outline-none hover:from-blue-500 hover:to-blue-700 transition duration-200"
            onClick={() => handlePayment('Credit Card')}
          >
            Checkout
          </button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;

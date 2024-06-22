import React from 'react';
import Card from '../components/Card'; // Assuming Card is in the same directory

const cardsData = [
  { imgSrc: 'https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/Box._CB485927553_.png', title: 'Your Orders', detail: 'Track, return, or buy things again', link: '/accounts-lists' },
  { imgSrc: 'https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/sign-in-lock._CB485931504_.png', title: 'Login & Security', detail: 'Edit login, name, and mobile number', link: '/accounts-lists' },
  { imgSrc: 'https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/rc_prime._CB485926807_.png', title: 'Prime', detail: 'View benefits and payment settings', link: '/accounts-lists' },
  { imgSrc: 'https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/address-map-pin._CB485934183_.png', title: 'Your Addresses', detail: 'Edit addresses for orders and gifts', link: '/accounts-lists' },
  { imgSrc: 'https://m.media-amazon.com/images/G/31/AmazonBusiness/YAPATF/amazon_business_yap_atf._CB588250268_.jpg', title: 'Your Business Account', detail: 'Sign up for free to save up to 28% with GST invoice and bulk discounts and purchase on credit.', link: '/accounts-lists' },
  { imgSrc: 'https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/Payments._CB485926359_.png', title: 'Payment Options', detail: 'Edit or add payment methods', link: '/accounts-lists' },
  { imgSrc: 'https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/amazon_pay._CB485946857_.png', title: 'Amazon Pay Balance', detail: 'Edit or add payment methods', link: '/accounts-lists' },
  { imgSrc: 'https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/self-service/contact_us._CB623781998_.png', title: 'Contact Us', detail: 'Ask your queries', link: '/accounts-lists' },
  { imgSrc: 'https://www.salesforce.com/content/dam/blogs/eu/2022/business-analytics.jpg', title: 'Budget Dashboard', detail: 'Budget Dashboard', link: '/accounts-lists/budget-dashboard' },
];

function AccountAndList() {
  return (
    <div>
    <h1 className="font-bold text-center text-3xl mt-6">Your Account</h1>
    <div className="flex flex-col items-center justify-center mb-64">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            imgSrc={card.imgSrc}
            title={card.title}
            detail={card.detail}
            link={card.link}
          />
        ))}
      </div>
    </div>
    </div>
  );
}

export default AccountAndList;


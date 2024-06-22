// Function to generate random date within a range and return as yyyy-mm-dd
const getRandomDate = (start, end) => {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero based
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
};

// Function to generate random category
const getRandomCategory = () => {
    const categories = ['Electronics', 'Clothing', 'Books', 'Home & Kitchen', 'Sports', 'Beauty', 'Toys', 'Food', 'Health', 'Education'];
    return categories[Math.floor(Math.random() * categories.length)];
};

// Function to trim a number to 2 decimal places
const trimToTwoDecimalPlaces = (number) => {
    return parseFloat(number.toFixed(2));
};

// Generate sample data for purchases
const generatePurchases = () => {
    const purchases = [];
    for (let i = 0; i < 10; i++) {
        const purchase = {
            product_id: `PROD${i + 1}`,
            paid_amount: trimToTwoDecimalPlaces(Math.random() * 1000), // Generate random paid amount
            saving_on: Math.random() < 0.5 ? trimToTwoDecimalPlaces(Math.random() * 200) : null, // 50% chance of having saving
            date_of_purchase: getRandomDate(new Date(2022, 0, 1), new Date(2024, 11, 31)),
            category: getRandomCategory()
        };
        purchases.push(purchase);
    }
    return purchases;
};

// Generate sample data for payments
const generatePayments = () => {
    const payments = [];
    for (let i = 0; i < 10; i++) {
        const payment = {
            payment_id: `PAY${i + 1}`,
            amount: trimToTwoDecimalPlaces(Math.random() * 1000), // Generate random amount
            date_of_payment: getRandomDate(new Date(2024, 0, 1), new Date(2024, 11, 31)),
            category: getRandomCategory()
        };
        payments.push(payment);
    }
    return payments;
};

// Generate sample data for savings
const generateSavings = () => {
    const savings = [];
    for (let i = 0; i < 10; i++) {
        const saving = {
            saving_id: `SAV${i + 1}`,
            amount: trimToTwoDecimalPlaces(Math.random() * 500), // Generate random amount
            date_of_saving: getRandomDate(new Date(2024, 0, 1), new Date(2024, 11, 31)),
            category: getRandomCategory()
        };
        savings.push(saving);
    }
    return savings;
};

// Combine all data into a single object
const data = {
    purchases: generatePurchases(),
    payments: generatePayments(),
    savings: generateSavings()
};

// Print the generated data
console.log(JSON.stringify(data, null, 2));

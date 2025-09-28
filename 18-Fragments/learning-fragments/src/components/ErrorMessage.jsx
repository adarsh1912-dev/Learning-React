const ErrorMessage = () => {
     let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk"];
    return <>
        {foodItems.length === 0 && <h1>I am still hungry</h1>}
    </> 
};


export default ErrorMessage;
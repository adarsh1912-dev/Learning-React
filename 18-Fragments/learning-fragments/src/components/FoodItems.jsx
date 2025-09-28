import Items from "./Items";

const FoodItems = () => {
     let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk"];
    return <>

        <ul className="list-group">
      {foodItems.map(item => <Items key={item}  foodItem={item}></Items>)}
    </ul> 
    
    </>
     
};

export default FoodItems;
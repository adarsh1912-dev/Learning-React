import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";


function App() {
  
  // let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk"];

  return <>

  <h1 className="food-heading">Healthy Food Items</h1>
  <ErrorMessage></ErrorMessage>
  <FoodItems></FoodItems> 
  
  </> 
}

export default App;

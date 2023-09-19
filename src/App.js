import { getAdvertsByQuery } from './Redux/operations';
import { useDispatch } from 'react-redux';
import AdvertItem from './Components/AdvertItem/AdvertItem';
import AdvertsList from './Components/AdvertsList/AdvertsList';

const advert = {
        "id": 9582,
        "year": 2008,
        "make": "Buick",
        "model": "Enclave",
        "type": "SUV",
        "img": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/buick_enclave.jpg",
        "description": "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.",
        "fuelConsumption": "10.5",
        "engineSize": "3.6L V6",
        "accessories": [
            "Leather seats",
            "Panoramic sunroof",
            "Premium audio system"
        ],
        "functionalities": [
            "Power liftgate",
            "Remote start",
            "Blind-spot monitoring"
        ],
        "rentalPrice": "$40",
        "rentalCompany": "Luxury Car Rentals",
        "address": "123 Example Street, Kiev, Ukraine",
        "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit required",
        "mileage": 5858
    }

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={()=> {dispatch(getAdvertsByQuery())}}>Click</button>
        <AdvertsList />
      </header>
    </div>
  );
}

export default App;

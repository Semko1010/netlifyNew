import CarItem from "./CarItem";
import cars from './cars.json'

const CarList = () => {

    return (
        <div className="grid">
            {cars.map(e =>
                <CarItem
                    key={e.id}
                    CarMake={e.CarMake}
                    id={e.id}
                />
            )}
        </div>
    );
}

export default CarList;
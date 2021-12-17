import cars from './cars.json'
import { useParams } from 'react-router-dom';

const CarDetail = () => {
    let { id } = useParams()

    console.log(useParams().id)

    let car = cars.filter(elt => {
        return elt.id.toString() === id.toString()
    })

    console.log(car)
    return (
        <div>
            <h2>{car[0].CarMake}</h2>
            <h2>{car[0].carModel}</h2>
            <h2>{car[0].CarYear}</h2>
        </div>
    );
}

export default CarDetail;
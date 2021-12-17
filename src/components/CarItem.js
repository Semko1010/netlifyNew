import { Link } from 'react-router-dom'

const CarItem = (props) => {
    return (
        <div className='grid-item'>
            <h2>{props.CarMake}</h2>
            <Link to={`/cars/${props.id}`}>Read More</Link>
        </div>
    );
}

export default CarItem;
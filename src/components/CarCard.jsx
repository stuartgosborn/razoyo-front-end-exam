export default function CarCard({ car }) {
const price = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(car.price);

  return (
    <div>
      <h1>{car.year} {car.make} {car.model}</h1>
      <img className= 'carImg' src={car.image} alt="" />
      <p><strong>Price:</strong> {price}  </p>
      <p><strong>Seats:</strong> {car.seats} </p>
      <p><strong>MPG:</strong> {car.mpg} </p>
    </div>
  );
}
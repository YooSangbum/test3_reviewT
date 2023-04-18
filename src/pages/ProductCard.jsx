import { Link } from 'react-router-dom';

function ProductCard({ data }) {
  return (
    <div className="ProductCard">
      <div className="img">
        <img
          src={`${process.env.PUBLIC_URL}/img/${data.img}`}
          alt={data.title}
        />
        <span className="addcart">add to card</span>
        {data.discount === '0' ? null : (
          <span className="discount">{data.discount}%</span>
        )}
      </div>
      <div>
        <p>{data.title}</p>
        <p>{data.price}</p>
      </div>
      <Link to={`/Detail/${data._id}`} className="btn_add"></Link>
    </div>
  );
}

export default ProductCard;

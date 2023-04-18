import { useState } from 'react';
import ProductCard from './ProductCard';

function Shop({ data }) {
  let [dataList, setDataList] = useState(data);

  return (
    <section className="Shop mw">
      <h2>shop</h2>
      <nav className="btnCon">
        <button
          className="btn"
          onClick={() => {
            setDataList([...dataList].sort((a, b) => a._id - b._id));
          }}
          data-sortname=""
        >
          상품등록순
        </button>
        <button
          className="btn"
          onClick={() => {
            setDataList([...dataList].sort((a, b) => b._id - a._id));
          }}
          data-sortname=""
        >
          최신 등록순
        </button>
        <button
          className="btn"
          onClick={() => {
            setDataList([...dataList].sort((a, b) => a.price - b.price));
          }}
        >
          낮은가격순
        </button>
        <button
          className="btn"
          onClick={() => {
            setDataList([...dataList].sort((a, b) => b.price - a.price));
          }}
        >
          높은가격순
        </button>
        <button
          className="btn"
          onClick={() => {
            setDataList([...dataList].sort((a, b) => a.dicount - b.discount));
          }}
        >
          높은 할인율
        </button>
      </nav>
      <ul className="listCon">
        {dataList.map((item) => {
          return (
            <li className="list" key={item._id}>
              <ProductCard data={item} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Shop;

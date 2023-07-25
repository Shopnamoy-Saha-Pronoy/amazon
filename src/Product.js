import React, { useState } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const [showFullTitle, setShowFullTitle] = useState(false);

  const toggleTitle = () => {
    setShowFullTitle(!showFullTitle);
  };

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        {showFullTitle ? (
          <p className="product__title">{title}</p>
        ) : (
          <p className="product__title">
            {title.length > 40 ? title.slice(0, 40) + "..." : title}
            
            
          </p>
        )}

        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
      {title.length > 40 && (
        <p className="product__toggleTitle" onClick={toggleTitle}>
          {showFullTitle ? "See Less Details" : "See More Details"}
        </p>
      )}
    </div>
  );
}

export default Product;

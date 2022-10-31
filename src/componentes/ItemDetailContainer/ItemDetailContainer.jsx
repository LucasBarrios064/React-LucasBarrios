import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleData } from "../../services/firebase";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer(props) {
  const [item, setItem] = useState({});
  const [feedBack, setFeedBack] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getSingleData(id)
      .then((data) => {
        if (data.id === 0) {
          setFeedBack("ERROR: Producto No encontrado");
        } else {
          setItem(data);
        }
      })
  }, [id]);

  return (
    <>
      {feedBack !== null ? (
        <h3>{feedBack}</h3>
      ) : (
        <ItemDetail
          key={item.id}
          id={item.id}
          title={item.title}
          img={item.img}
          price={item.price}
          detail={item.detail}
          stock={item.stock}
        />
      )}
    </>
  );
}

export default ItemDetailContainer;

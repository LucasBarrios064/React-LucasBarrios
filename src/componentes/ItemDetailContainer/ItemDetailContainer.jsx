import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleData } from "../../mockAPI/mockAPI";
import ItemDetail from "./ItemDetail";



function ItemDetailContainer(props) {
  const [item, setItem] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getSingleData(id).then((data) => {
      setItem(data);
    });
  }, [id]);

  return (
    <>
        <ItemDetail
          key={item.id}
          id={item.id}
          title={item.title}
          img={item.img}
          price={item.price}
          detail={item.detail}
          stock={item.stock}
          expired={item.expires}
          />
    </>
  );
}

export default ItemDetailContainer
import React from "react";
import Item from "../Item/Item";
import "./ItemListContainer.css";

function ItemList(props) {
  return (
    <div className="itemList-box">
      {props.dataList.map ((dataItem) => {
        return (
          <Item
          key={dataItem.id}
          id={dataItem.id}
          title={dataItem.title}
          img={dataItem.img}
          price={dataItem.price}
          detail={dataItem.detail}
          stock={dataItem.stock}
          expired={dataItem.expires}
          />
        );
      })}
    </div>
  );
}

export default ItemList;

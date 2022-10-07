import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { getData, getDataCategory } from "../../mockAPI/mockAPI";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
  const [dataList, setDataList] = useState([]);
  const { categoryID } = useParams();

  useEffect(() => {
    if (categoryID === undefined) {
      getData().then((data) => {
        setDataList(data);
      });
    }else{
      getDataCategory(categoryID).then((data) => {
        setDataList(data);
      });
      
    }
  }, [categoryID]);

  return (
    <div className="tituloBienvenida">
      <h1>{props.greeting}</h1>
      <ItemList dataList={dataList} />
    </div>
  );
}

export default ItemListContainer;

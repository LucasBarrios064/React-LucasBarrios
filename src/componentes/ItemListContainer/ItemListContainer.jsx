import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { getData, getDataCategory } from "../../mockAPI/mockAPI";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

function ItemListContainer(props) {
  const [dataList, setDataList] = useState([]);
  const { categoryID } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setDataList([]);
    setIsLoading(true)
    if (categoryID === undefined) {
      getData().then((data) => {
        setDataList(data);
        setIsLoading(false);
      });
    } else {
      getDataCategory(categoryID).then((data) => {
        setDataList(data);
        setIsLoading(false);
      });
    }
  }, [categoryID]);

  if (dataList)
    return (
      <div className="tituloBienvenida">
        <h1>{props.greeting}</h1>
        {isLoading ? <Loader></Loader> : <ItemList dataList={dataList} />}
      </div>
    );
  return <h1>CARGANDO</h1>;
}

export default ItemListContainer;

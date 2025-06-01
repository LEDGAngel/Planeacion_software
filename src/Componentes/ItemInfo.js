import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const ItemInfo = ({items}) => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const {id} = useParams();
    const item = items.find((i) => i.id === id);
    return (
        <div>
            <h1>Item Info</h1>
            <h2>{item.name}</h2>
            <h3>{item.price } </h3>
            <h3>Search Params{searchParams.get("q")} </h3>
            <button onClick={() => navigate(-1)}>go back</button>
        </div>
    );
};

export default ItemInfo;
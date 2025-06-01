import { useState, useEffect } from "react";
import { useAuth } from "./useAuth";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export default function useItems() {
  const { auth, isLogin } = useAuth();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (isLogin) {
      getItems();
    }
    // eslint-disable-next-line
  }, [isLogin]);

  const getItems = async () => {
    const result = await fetch(API_URL + "/items/", {
      method: "GET",
      headers: { Authorization: auth },
    });
    const data = await result.json();
    setItems(data);
  };

  const add = async (item) => {
    const result = await fetch(API_URL + "/items/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: auth,
      },
      body: JSON.stringify(item),
    });
    const data = await result.json();
    setItems([...items, data.item]);
  };

  const del = async (id) => {
    await fetch(API_URL + "/items/" + id, {
      method: "DELETE",
      headers: { Authorization: auth },
    });
    setItems(items.filter((item) => item.id !== id));
  };

  return {
    items,
    add,
    del,
    setItems,
  };
}
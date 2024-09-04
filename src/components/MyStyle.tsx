import axios from "axios";
import React, { useEffect, useState } from "react";

const Mystyle = () => {
  const [data, setData] = useState<any>("");

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://dummyjson.com/products");
      setData(response?.data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      {/* <>{console.log("data", data)}</> */}
      <h1>mystyle🚀</h1>
    </div>
  );
};
export default Mystyle;

import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Card from "./Components/Card";
import Footer from "./Components/Footer";

const App = () => {
  const [Value, setValue] = useState(0);
  const data = [
    {
      name: "Banana",
      price_usd: "$40.00 - $80.00",
      original_usd: "",
      inStock: false,
      option: false,
      ratings: false,
    },
    {
      name: "Mango",
      price_usd: " $70.00",
      original_usd: "$80.00 ",
      inStock: true,
      option: true,
      ratings: true,
    },
    {
      name: "Pine Apple",
      price_usd: " $30.00",
      original_usd: "$40.00",
      inStock: true,
      option: true,
      ratings: false,
    },
    {
      name: "Grapes",
      price_usd: "$61.00",
      original_usd: "",
      inStock: false,
      option: true,
      ratings: true,
    },
    {
      name: "Pink Guava",
      price_usd: " $80.00",
      original_usd: "$90.00",
      inStock: true,
      option: true,
      ratings: false,
    },
    {
      name: "Red Banana",
      price_usd: "$100.00 - $150.00",
      original_usd: "",
      inStock: false,
      option: false,
      ratings: false,
    },
    {
      name: "Apple",
      price_usd: " $100.00",
      original_usd: "$120.00 ",
      inStock: true,
      option: true,
      ratings: true,
    },
    {
      name: "Jackfruit",
      price_usd: "$170.00",
      original_usd: "",
      inStock: false,
      option: true,
      ratings: true,
    },
  ];
  const [Product, setProduct] = useState(data);
  return (
    <div>
      <Navbar Value={Value} />
      <Header />
      <div className="container">
        <div className="row">
          {Product.map((item, index) => {
            return (
              <Card
                item={item.name}
                price={item.price_usd}
                original={item.original_usd}
                stock={item.inStock}
                index={index}
                option={item.option}
                ratings={item.ratings}
                Value={Value}
                setValue={setValue}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
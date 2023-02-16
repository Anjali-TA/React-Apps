import { useCallback, useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Spinner from 'react-bootstrap/Spinner';
import Card from "../UI/Card";
import Pagination from "../UI/Pagination";
import classes from "./AvailableItems.module.css";
import Item from "./Item/Item";
import ItemFilter from "./ItemFilter";

const AvailableItems = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [priceFilterVal, setPriceFilterVal] = useState("");

  let lastItemPageIndex = currentPage * itemsPerPage;
  let firstItemPageIndex = lastItemPageIndex - itemsPerPage;
  let filteredProducts = products;

  const getProducts = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch("https://react-shopping-cart-67954.firebaseio.com/products.json");
    const data = await response.json();
    setProducts(data["products"]);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const priceFilterChangeHandler = (val) => {
    setPriceFilterVal(val);
  };
  if (priceFilterVal === "LH") {
    filteredProducts = products.sort((a, b) => a.price - b.price);
  } else if (priceFilterVal === "HL") {
    filteredProducts = products.sort((a, b) => b.price - a.price);
  }
  const currentPageProducts = filteredProducts.slice(
    firstItemPageIndex,
    lastItemPageIndex
  );
  const itemsList = (
    <Row xs={1} md={2} className="g-4">
      {currentPageProducts.map((product) => (
        <Col key={product.id}>
          <Item
            id={product.id}
            name={product.title}
            description={product.description}
            price={product.price}
            isFreeShipping={product.isFreeShipping}
            availableSizes={product.availableSizes}
          />
        </Col>
      ))}
      ;
    </Row>
  );
  return (
    <section className={classes.items}>
      <Card>
        {isLoading && <Spinner animation="border" />}
        {!isLoading && (
          <>
            <ItemFilter onChangePriceFilter={priceFilterChangeHandler} />{" "}
            {itemsList}
          </>
        )}
      </Card>
      <Pagination
        totalItems={filteredProducts.length}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </section>
  );
};

export default AvailableItems;

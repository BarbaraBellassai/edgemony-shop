//import { useState } from "react";
import { PropTypes } from "prop-types";
import Product from "./Product";
import Search from "./Search";
import {useLocation, useHistory} from "react-router-dom";

import "./ProductList.css";
import CategoriesFilter from "./CategoriesFilter";

function ProductList({ products, categories }) {
  // const [searchTerm, setSearchTerm] = useState();
  // const [selectedCategories, setSelectedCategories] = useState([]);

  const location = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(location.search);

  const searchTerm = searchParams.get("q") || "";

  function updateSearchTerm(term) {
    if (term) {
      searchParams.set("q", term);
    } else {
      searchParams.delete("q");
    }
    history.push({search: "?" + searchParams.toString()});
  }

  const selectedCategoriesParam = searchParams.get("categories");
  const selectedCategories = selectedCategoriesParam
  ? selectedCategoriesParam.split(",")
  : [];

  function updateCategories(categories) {
    const selectedParam = categories.join(",");
    if (categories.length === 0){
      searchParams.delete("categories");
    }else{
      searchParams.set("categories", selectedParam);
    }
    history.push({search: "?" + searchParams.toString()});
  }

  const termRegexp = new RegExp(searchTerm, "i");
  const filteredProducts = products.filter(
    (product) =>
      product.title.search(termRegexp) !== -1 &&
      (selectedCategories.length === 0 ||
        selectedCategories.includes(product.category))
  );

  return (
    <div className="ProductList">
      <div className="ProductList__filters">
        <Search term={searchTerm} onSearch={updateSearchTerm} />
        <CategoriesFilter
          categories={categories}
          selectedCategories={selectedCategories}
          onSelectCategory={updateCategories}
        />
      </div>
      <div className="ProductList__products">
        {filteredProducts.map((product) => (
          <Product
            product={product}
            key={product.id}
            //openProductModal={() => openProductModal(product)}
          />
        ))}
      </div>
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  //openProductModal: PropTypes.func.isRequired,
};

export default ProductList;

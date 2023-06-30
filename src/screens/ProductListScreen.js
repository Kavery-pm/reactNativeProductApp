import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { fetchProducts } from "../services/product-api";
import ProductGrid from "../components/ProductGrid";
const ProductListScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = async () => {
    try {
      const response = await fetchProducts();
      setProducts(response);
    } catch (error) {
      console.error(error);
    }
  };

  const renderProductItem = ({ item }) => {
    const viewProductHandler = () => {
      console.log("hi");
    };
    return <ProductGrid item={item} onPress={viewProductHandler} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        style={styles.productsList}
        contentContainerStyle={styles.productsListContainer}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  productsListContainer: {
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
export default ProductListScreen;

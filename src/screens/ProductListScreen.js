import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, TextInput,ActivityIndicator,View,RefreshControl } from "react-native";
import { fetchProducts } from "../services/product-api";
import ProductGrid from "../components/ProductGrid";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../src/constants/colors";
const ProductListScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setsearchQuery] = useState("");
  const [filteredProducts, setfilteredProducts] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isRefreshing, setisRefreshing] = useState(false);
  useEffect(() => {
    fetchProductData();
  }, []);
  useEffect(() => {
    filterProducts();
  }, [searchQuery, products]);

  const fetchProductData = async () => {
    try {
        setisLoading(true);
        setisRefreshing(true)
      const response = await fetchProducts();
    
      setProducts(response);
      setisLoading(false);
      setisRefreshing(false)
    } catch (error) {
      console.error(error);
    }
  };
  const filterProducts = () => {
    const filtered = products.filter((productItem) => {
      return productItem.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    });
    setfilteredProducts(filtered);
  };
  const renderProductItem = ({ item }) => {
  
    const viewProductHandler = () => {
      navigation.navigate("detail", {
        product: item,
      });
    };
    return <ProductGrid item={item} onPress={viewProductHandler} />;
  };

  return (
    <>
      <TextInput
        style={styles.searchInput}
        placeholder="Search products..."
        value={searchQuery}
        onChangeText={(text) => setsearchQuery(text)}
      />
       {isLoading?(
                <View style={styles.loadingContainer}>
                    <ActivityIndicator  size="large" color="black"/>
                </View>
            ):(
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.rootScreen}
      >
        <SafeAreaView style={styles.container}>
           

          
          <FlatList
            data={filteredProducts}
            renderItem={renderProductItem}
            style={styles.productsList}
            refreshControl={
                <RefreshControl refreshing={isRefreshing} onRefresh={() => fetchProductData()} />}
            contentContainerStyle={styles.productsListContainer}
            keyExtractor={(item) => item.id.toString()}
          /> 
        </SafeAreaView>
      </LinearGradient>)}
    </>
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
  searchInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
export default ProductListScreen;

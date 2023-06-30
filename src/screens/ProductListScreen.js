import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { fetchProducts } from "../services/product-api";
import ProductGrid from "../components/ProductGrid";
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../src/constants/colors'
const ProductListScreen = ({navigation}) => {
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
        navigation.navigate('detail',{
            product:item
         });
    };
    return <ProductGrid item={item} onPress={viewProductHandler} />;
  };

  return (
    <LinearGradient
    colors={[Colors.primary700, Colors.accent500]}
    style={styles.rootScreen}
  >
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        style={styles.productsList}
        contentContainerStyle={styles.productsListContainer}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
    </LinearGradient>
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

import { View, Text, StyleSheet, Image,TouchableOpacity} from "react-native";
 import React from "react";

const ProductGrid = React.memo(({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image style={styles.thumb} source={{ uri: item.image }} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.title}</Text>
        <Text style={styles.price}>$ {item.price}</Text>
      </View>
    </TouchableOpacity>
  );
});

export default ProductGrid;
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  thumb: {
    height: 260,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '100%',
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
});
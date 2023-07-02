import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../src/constants/colors";
import TypewriterEffectText from "../animations/TypingAnimation";
import FadeInAnimationEffect from "../animations/fadeInAnimation";
const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;
  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <FadeInAnimationEffect style={styles.card}>
        <Image style={styles.image} source={{ uri: product.image }} />
      </FadeInAnimationEffect>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.title}</Text>
        <Text style={styles.price}>$ {product.price}</Text>
        <TypewriterEffectText
          text={product.description}
          speed={50}
          style={styles.description}
        />
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
  },
  rootScreen: {
    flex: 1,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: "black",
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    //marginVertical: 20,
    margin:10
  },
  image: {
    margin: 5,
    padding:30,
    height: 300,
    //width: "100%",
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    color: "white",
    marginBottom: 16,
  },
});
export default ProductDetailScreen;

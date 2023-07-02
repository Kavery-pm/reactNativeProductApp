import { useEffect, useRef } from "react";
import { Animated } from "react-native";
const FadeInAnimationEffect = ({ children, style }) => {
  const bounceAnimation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    startFadeInAnimationEffect();
  }, []);
  const startFadeInAnimationEffect = () => {
    Animated.timing(bounceAnimation, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };
  const animatedStyles = {
    opacity: bounceAnimation,
  };
  return (
    <Animated.View style={[style, animatedStyles]}>{children}</Animated.View>
  );
};

export default FadeInAnimationEffect;

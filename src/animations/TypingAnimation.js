import { useRef, useState, useEffect } from "react";
import { Text } from "react-native";
const TypewriterEffectText = ({ text, speed, style }) => {
  const [animatedText, setAnimatedText] = useState("");
  const textIndex = useRef(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setAnimatedText((previousText) => {
        if (textIndex.current < text.length) {
          const nextCharacter = text[textIndex.current];
          textIndex.current += 1;
          return previousText + nextCharacter;
        }
        clearInterval(typingInterval); 
        return previousText;
      });
    }, speed);

    return () => clearInterval(typingInterval); // Clean up
  }, [text, speed]);

  return <Text style={style}>{animatedText}</Text>;
};
export default TypewriterEffectText;

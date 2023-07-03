
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import { NavigationContainer } from '@react-navigation/native';
import ProductListStack from './src/navigation/ProductListStack';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


 const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
     <NavigationContainer >
    <Tab.Navigator>
      <Tab.Screen name="productList" component={ProductListStack} options={{ headerShown: false }}/>
      <Tab.Screen
          name="detail"
          component={ProductDetailScreen}
          options={{
            title: 'Product Detail'
          }}/>
      
    </Tab.Navigator>
    
  
  </NavigationContainer>
    </>
   
  );
}


import { StyleSheet } from 'react-native';
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
       <Tab.Screen name="detail" component={ProductDetailScreen}/> 
    </Tab.Navigator>
    
  
  </NavigationContainer>
    </>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    textAlign:'center',

  },
  rootScreen: {
    flex: 1,
  
  },
});
{/* <Stack.Navigator screenOptions={{
      headerStyle:{backgroundColor:'yellow'},
      contentStyle:{backgroundColor:'pink'}
     }}>
   
    <Stack.Screen name="Products" component={ProductListScreen} />
    <Stack.Screen name="detail" component={ProductDetailScreen} />
   
  </Stack.Navigator> */}
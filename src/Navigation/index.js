import React from 'react';
import { TouchableOpacity, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from "../screens";
import { Hostpage } from "../screens";
import { About } from "../screens";
import { Policy } from "../screens";
import { Terms } from "../screens";
const Stack = createStackNavigator();

const linking = {
    prefixes: ['http://localhost:8080/'],
    config: {
        screens: {
            Home: '',
            Profile: 'profile',
            Settings: 'blog',
        }
    },
};

export default function App() {
    return (
        <NavigationContainer linking={linking} fallback={<Text>fallback</Text>}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="home" component={Hostpage} />
                <Stack.Screen name="hostpage" component={Hostpage} />
                <Stack.Screen name="policy" component={Policy} />
                <Stack.Screen name="about" component={About} />
                <Stack.Screen name="terms" component={Terms} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
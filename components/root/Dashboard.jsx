import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Appearance } from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import AllExpensesScreen from "../../screens/AllExpensesScreen";
import RecentExpenseScreen from "./../../screens/RecentExpenseScreen";

const Tab = createBottomTabNavigator();
const colorScheme = Appearance.getColorScheme();

export default function Dashboard() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor:
            colorScheme === "dark"
              ? COLORS.dark.secondaryBackgroundColor
              : COLORS.light.secondaryBackgroundColor,
        },
        tabBarActiveTintColor:
          colorScheme === "dark"
            ? COLORS.dark.primaryActive
            : COLORS.light.primaryActive,
        tabBarInactiveTintColor:
          colorScheme === "dark"
            ? COLORS.dark.primaryInactive
            : COLORS.light.primaryInactive,
        headerStyle: {
          backgroundColor:
            colorScheme === "dark"
              ? COLORS.dark.primaryHeader
              : COLORS.light.primaryHeader,
        },
        headerTintColor:
          colorScheme === "dark"
            ? COLORS.dark.primaryText
            : COLORS.light.primaryText,
      }}
    >
      <Tab.Screen
        name="All Expenses"
        component={AllExpensesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="list-alt" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Recent"
        component={RecentExpenseScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="back-in-time" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

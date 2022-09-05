import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExpensesListScreen from "./ExpensesListScreen";
import AddExpenseScreen from "./AddExpenseScreen";
import { COLORS } from "../constants/colors";
import { Pressable, Appearance } from "react-native";
import { Entypo } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const colorScheme = Appearance.getColorScheme();

export default function AllExpensesScreen({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
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
      <Stack.Screen
        name="ExpensesList"
        component={ExpensesListScreen}
        options={{
          headerBackTitle: "Stack title",
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate("AddExpense")}>
              <Entypo
                name="add-to-list"
                size={24}
                color={
                  colorScheme === "dark"
                    ? COLORS.dark.primaryActive
                    : COLORS.light.primaryActive
                }
              />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="AddExpense"
        component={AddExpenseScreen}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}

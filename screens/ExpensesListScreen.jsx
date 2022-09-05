import { Appearance, FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import ExpenseOverview from "../components/ExpenseOverview";
import { COLORS } from "../constants/colors";

const colorScheme = Appearance.getColorScheme();

export default function ExpensesListScreen({ navigation }) {
  const expenses = useSelector((state) => state.expenses.expenses);

  function renderMealItem(itemData) {
    const item = itemData.item;

    const expenseProps = {
      id: item.id,
      description: item.description,
      price: item.price,
      date: item.date,
    };

    return (
      <ExpenseOverview
        {...expenseProps}
        onPress={() =>
          navigation.navigate("Update", { id, description, price, date })
        }
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:
      colorScheme === "dark"
        ? COLORS.dark.primaryBackgroundColor
        : COLORS.light.primaryBackgroundColor,
  },
  text: {
    color:
      colorScheme === "dark"
        ? COLORS.dark.primaryText
        : COLORS.light.primaryText,
    fontSize: 24,
    fontWeight: "bold",
  },
});

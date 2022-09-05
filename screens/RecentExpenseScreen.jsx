import { StyleSheet, View, Text, Appearance } from "react-native";
import ExpenseOverview from "../components/ExpenseOverview";
import { COLORS } from "../constants/colors";
import { useSelector } from "react-redux";

const colorScheme = Appearance.getColorScheme();

export default function RecentExpenseScreen() {
  const expenses = useSelector((state) => state.expenses.expenses);

  const item = expenses[expenses.length - 1];

  const expenseProps = {
    id: item?.id,
    description: item?.description,
    price: item?.price,
    date: item?.date,
  };

  return (
    <View style={styles.container}>
      {item ? <ExpenseOverview {...expenseProps} /> : <Text>Nothing here</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

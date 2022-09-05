import { View, Text, StyleSheet, Appearance, Pressable } from "react-native";
import { COLORS } from "./../constants/colors";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { removeExpense } from "../store/redux/expenses";

const colorScheme = Appearance.getColorScheme();

function ExpenseOverview({ id, description, price, date, onPress }) {
  const dispatch = useDispatch();

  function removeExpenseHandler() {
    dispatch(removeExpense({ expense: { id, description, price, date } }));
  }

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={[styles.text, { fontSize: 18, fontWeight: "bold" }]}>
          {description}
        </Text>
        <Text style={styles.text}>{date}</Text>
      </View>
      <View style={styles.price}>
        <View>
          <Text
            style={[
              styles.text,
              {
                fontSize: 18,
                fontWeight: "bold",
                color:
                  colorScheme === "dark"
                    ? COLORS.dark.price
                    : COLORS.light.price,
              },
            ]}
          >
            {price}
          </Text>
        </View>
        <View style={{ marginLeft: 66, flexDirection: "row" }}>
          <Pressable onPress={onPress}>
            <MaterialIcons
              name="update"
              size={14}
              color={
                colorScheme === "dark"
                  ? COLORS.dark.primaryUpdate
                  : COLORS.light.primaryUpdate
              }
            />
          </Pressable>
          <Pressable onPress={removeExpenseHandler}>
            <AntDesign
              name="minuscircleo"
              size={12}
              color={
                colorScheme === "dark"
                  ? COLORS.dark.primaryMinus
                  : COLORS.light.primaryMinus
              }
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:
      colorScheme === "dark"
        ? COLORS.dark.secondaryBackgroundColor
        : COLORS.light.secondaryBackgroundColor,
    margin: 16,
    padding: 12,
    flexDirection: "row",
    borderWidth: 1,
    borderColor:
      colorScheme === "dark"
        ? COLORS.dark.primaryInactive
        : COLORS.light.primaryInactive,
    borderRadius: 12,
    width: 360,
    height: 80,
    justifyContent: "space-between",
  },
  subContainer: {
    justifyContent: "space-between",
  },
  price: {
    alignItems: "center",
    flexDirection: "column-reverse",
    padding: 8,
    backgroundColor:
      colorScheme === "dark"
        ? COLORS.dark.primaryActive
        : COLORS.light.primaryActive,
    borderRadius: 12,
    width: "50%",
  },
  text: {
    color:
      colorScheme === "dark"
        ? COLORS.dark.primaryText
        : COLORS.light.primaryText,
  },
});

export default ExpenseOverview;

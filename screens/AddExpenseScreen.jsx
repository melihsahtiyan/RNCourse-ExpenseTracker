import { useState } from "react";
import { Appearance, Pressable, StyleSheet, Text, View } from "react-native";
import InputContainer from "../components/InputContainer";
import { COLORS } from "../constants/colors";
import { addExpense } from "./../store/redux/expenses";
import { useSelector, useDispatch } from "react-redux";

const colorScheme = Appearance.getColorScheme();

export default function AddExpenseScreen() {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState("");

  const id = useSelector((state) => state.expenses.expenses.length + 1);

  const dispatch = useDispatch();

  function submitHandler() {
    console.log("id :", id);
    console.log("description :", description);
    console.log("price :", price);
    console.log("date :", date);
    debugger;
    dispatch(
      addExpense({
        expense: { id, description, price, date },
      })
    );
  }

  return (
    <View style={styles.container}>
      <InputContainer
        placeholder={"Enter text"}
        onChange={(enteredText) => setDescription(enteredText)}
      >
        Description
      </InputContainer>
      <InputContainer
        placeholder={"Enter price"}
        onChange={(enteredText) => setPrice(enteredText)}
      >
        Price
      </InputContainer>
      <InputContainer
        placeholder={"Enter date"}
        onChange={(enteredText) => setDate(enteredText)}
      >
        Date
      </InputContainer>
      <View style={styles.buttonContainer}>
        <Pressable>
          <Text
            style={[
              styles.text,
              {
                fontSize: 14,
              },
            ]}
            onPress={submitHandler}
          >
            Submit
          </Text>
        </Pressable>
      </View>
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
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:
      colorScheme === "dark"
        ? COLORS.dark.secondaryBackgroundColor
        : COLORS.light.secondaryBackgroundColor,
    borderRadius: 8,
    margin: 16,
    paddingHorizontal: 16,
    paddingVertical: 9,
  },
  inputContainer: {
    flexDirection: "row",
    width: "80%",
    backgroundColor:
      colorScheme === "dark"
        ? COLORS.dark.secondaryBackgroundColor
        : COLORS.light.secondaryBackgroundColor,
    borderRadius: 8,
    margin: 16,
    padding: 10,
  },
});

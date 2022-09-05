import { View, Text, Pressable, StyleSheet, Appearance } from "react-native";
import React, { useState } from "react";
import InputContainer from "../components/InputContainer";
import { COLORS } from "../constants/colors";
import { updateExpense } from "./../store/redux/expenses";
import { useDispatch, useSelector } from "react-redux";

const colorScheme = Appearance.getColorScheme();

export default function UpdateExpenseScreen({ expense }) {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState("");

  const id = expense.id;

  const dispatch = useDispatch();

  function submitHandler() {
    console.log("id :", id);
    console.log("description :", description);
    console.log("price :", price);
    console.log("date :", date);
    debugger;
    dispatch(
      updateExpense({
        expense: { description, price, date },
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
            Update
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
        ? COLORS.dark.secondaryText
        : COLORS.light.secondaryText,
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:
      colorScheme === "dark"
        ? COLORS.dark.primaryInactive
        : COLORS.light.primaryInactive,
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
        ? COLORS.dark.primaryInactive
        : COLORS.light.primaryInactive,
    borderRadius: 8,
    margin: 16,
    padding: 10,
  },
});

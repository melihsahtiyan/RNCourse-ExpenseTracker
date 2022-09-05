import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import InputContainer from "../components/InputContainer";

export default function ChangeExpense({ changeOperation, children, id }) {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState("");

  const id = useSelector((state) => state.expenses.expenses.length + 1);

  const dispatch = useDispatch();

  function submitHandler() {
    debugger;
    dispatch(
      changeOperation({
        expense: { id, description, price, date },
      })
    );
  }

  return (
    <View>
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
            {children}
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

import { View, Text, StyleSheet, TextInput, Appearance } from "react-native";
import { COLORS } from "./../constants/colors";

const colorScheme = Appearance.getColorScheme();

export default function InputContainer({ placeholder, children, onChange }) {
  return (
    <View style={styles.inputContainer}>
      <View
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
          paddingLeft: 12,
        }}
      >
        <Text
          style={[
            styles.text,
            {
              textAlign: "left",
            },
          ]}
        >
          {children} : {}
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: 6,
        }}
      >
        <TextInput
          style={styles.text}
          placeholder={placeholder}
          placeholderTextColor={COLORS.dark.primaryInactive}
          onChangeText={onChange}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color:
      colorScheme === "dark"
        ? COLORS.dark.primaryText
        : COLORS.light.primaryText,
    fontSize: 18,
    fontWeight: "bold",
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

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: "#1F1E25",
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  participantName: {
    color: "#FDFCFE",
    fontSize: 16,
    flex: 1,
    paddingHorizontal: 16,
    textAlignVertical: "center",
  },
  button: {
    backgroundColor: "#E23C44",
    width: 56,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 24,
  },
});

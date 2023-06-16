import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    paddingTop: 75,
    paddingHorizontal: 24,
  },
  title: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#FDFCFE",
    fontSize: 20,
    fontWeight: "bold",
  },
  date: {
    color: "#6B6B6B",
    fontSize: 16,
    marginBottom: 34,
  },

  inputContainer: {
    height: 56,
    flexDirection: "row",
    alignItems: "stretch",
    gap: 7,
    marginBottom: 44,
  },
  input: {
    flex: 1,
    borderRadius: 4,
    backgroundColor: "#1F1E25",
    color: "#fff",
    paddingVertical: 18,
    paddingHorizontal: 16,
    fontSize: 14,
  },
  button: {
    width: 56,
    borderRadius: 4,
    backgroundColor: "#31CF67",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  emptyParticipantsText: {
    textAlign: "center",
    fontSize: 14,
    color: "#FDFCFE",
  },
  participantsList: {
    paddingTop: 16,
  },
});

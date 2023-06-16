import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  title: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  date: {
    color: "#6B6B6B",
    fontSize: 16,
  },

  inputContainer: {
    height: 56,
    flexDirection: "row",
    alignItems: "stretch",
    gap: 7,
    marginTop: 36,
    marginBottom: 42,
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
  participantsLabelContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
  },
  participantsLabel: {
    color: "#FDFCFE",
    fontSize: 20,
    fontWeight: "bold",
  },
  participantsCount: {
    color: "#FDFCFE",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    fontSize: 12,
    borderRadius: 999,
    width: 32,
    paddingVertical: 2,
    textAlign: "center",
    textAlignVertical: "center",
  },
  emptyParticipantsText: {
    textAlign: "center",
    fontSize: 14,
    color: "#FDFCFE",
  },
});

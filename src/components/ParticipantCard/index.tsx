import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface ParticipantCardProps {
  participants: string;
  remove: (participant: string) => void;
}

export function ParticipantCard({
  participants,
  remove,
}: ParticipantCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.participantName}>{participants}</Text>
      <TouchableOpacity
        onPress={() => remove(participants)}
        style={styles.button}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}

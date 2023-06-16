import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface ParticipantCardProps {
  name: string;
  onRemove: (participant: string) => void;
}

export function ParticipantCard({ name, onRemove }: ParticipantCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.participantName}>{name}</Text>
      <TouchableOpacity
        onPress={() => onRemove(name)}
        style={styles.button}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}

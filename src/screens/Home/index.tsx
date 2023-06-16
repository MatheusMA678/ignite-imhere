import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { ParticipantCard } from "../../components/ParticipantCard";

export function Home() {
  const [inputValue, setInputValue] = useState("");
  const [participants, setParticipants] = useState<string[]>([]);

  const date = new Date();
  const formattedDate = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    year: "numeric",
    day: "2-digit",
    month: "long",
  }).format(date);

  const handleAddParticipant = () => {
    if (participants.includes(inputValue)) {
      return Alert.alert("O participante já existe");
    }

    setParticipants((prev) => {
      return [...prev, inputValue];
    });
    setInputValue("");
  };

  const handleRemoveParticipant = (participant: string) => {
    Alert.alert("Remover", `Deseja remover o participante ${participant}?`, [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => Alert.alert("Participante removido."),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Nome do evento</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={"#6B6B6B"}
          cursorColor={"white"}
          onChangeText={(text) => setInputValue(text)}
          value={inputValue}
        />
        <TouchableOpacity
          onPress={handleAddParticipant}
          style={styles.button}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.subtitle}>Participantes</Text>
        {participants.length === 0 ? (
          <View style={{ paddingTop: 28 }}>
            <Text style={styles.emptyParticipantsText}>
              Ninguém chegou no evento ainda?
            </Text>
            <Text style={styles.emptyParticipantsText}>
              Adicione participantes a sua lista de presença.
            </Text>
          </View>
        ) : (
          <FlatList
            style={styles.participantsList}
            keyExtractor={(item) => item}
            data={participants}
            renderItem={({ item }) => (
              <ParticipantCard
                remove={handleRemoveParticipant}
                participants={item}
              />
            )}
          />
        )}
      </View>
    </View>
  );
}

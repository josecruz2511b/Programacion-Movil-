import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
  Button,
} from "react-native";

const API_KEY = "cb1d3857dca56f795d2525071f570c91";

export default function Page() {
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState<"exact" | "approx">("exact");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  const searchMovies = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResults([]);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
          query
        )}`
      );
      const json = await response.json();
      const filteredResults =
        mode === "exact"
          ? json.results.filter(
              (movie: any) =>
                movie.title.toLowerCase() === query.toLowerCase()
            )
          : json.results;
      setResults(filteredResults);
    } catch (error) {
      console.error("Error buscando películas:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.card}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
        }}
        style={styles.poster}
      />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.year}>
          Año: {item.release_date?.split("-")[0] || "Desconocido"}
        </Text>
        <Text style={styles.rating}>Rating: {item.vote_average}/10</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🎬 Buscador de Películas</Text>
      <TextInput
        placeholder="Nombre de la película"
        value={query}
        onChangeText={setQuery}
        style={styles.input}
      />
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            mode === "exact" && styles.selectedButton,
          ]}
          onPress={() => setMode("exact")}
        >
          <Text style={styles.toggleText}>Exacta</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            mode === "approx" && styles.selectedButton,
          ]}
          onPress={() => setMode("approx")}
        >
          <Text style={styles.toggleText}>Aproximada</Text>
        </TouchableOpacity>
      </View>
      <Button title="Buscar" onPress={searchMovies} />
      {loading && <ActivityIndicator size="large" color="#2196F3" style={{ marginTop: 20 }} />}
      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 60,
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#333",
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  toggleContainer: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-between",
  },
  toggleButton: {
    flex: 1,
    backgroundColor: "#eee",
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 8,
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: "#2196F3",
  },
  toggleText: {
    color: "#fff",
    fontWeight: "bold",
  },
  card: {
    flexDirection: "row",
    marginVertical: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 2,
  },
  poster: {
    width: 100,
    height: 150,
  },
  info: {
    padding: 10,
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  year: {
    marginTop: 4,
    color: "#555",
  },
  rating: {
    marginTop: 4,
    color: "#555",
  },
});

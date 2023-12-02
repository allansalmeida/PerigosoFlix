import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
  header: {
    paddingTop: 30,
    height: 115,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  headerText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
  },
  containerInput: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#3A3F47",
    height: 42,
    padding: 10,
    borderRadius: 16,
  },
  input: {
    color: "#fff",
    width: "80%",
  },

  content: {
    padding: 20,
  },
  contentMyList: {
    width: "100%",
    padding: 20,
  },
  card: {
    width: 250,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  cardImage: {
    width: 110,
    height: 160,
    borderRadius: 16,
  },
  cardInfo: {
    width: 150,
    gap: 10,
  },
  cardInfoTitle: {
    color: "#Fff",
    lineHeight: 24,
    fontSize: 16,
  },
  cardInfoInfoMovie: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
  },
  cardInfoInfoMovieContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  cardInfoInfoMovieContentText: {
    color: "#FFF",
  },
  cardInfoInfoMovieContentText2: {
    color: "#FF8700",
    fontWeight: "700",
  },
});
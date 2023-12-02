import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: "#242A32",
    alignItems: "center",
    justifyContent: "center",
  },

  containerInput: {
    backgroundColor: "#67686D",
    height: 40, 
    padding: 10,
    borderRadius: 16,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  
  headerText: {
    fontSize: 20,
    lineHeight: 15,
    color: "#FFF",
  },
  input: {
    color: "#FFF",
    width: "70%",
    paddingLeft: 15,
  },
  loginButton: {
    backgroundColor: "#0296e5",
    height: 40, 
    padding: 20,
    borderRadius: 16,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
});

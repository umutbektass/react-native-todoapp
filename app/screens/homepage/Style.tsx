import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal: 20,
  },
  textInputContainer: {
    flex:1,
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingBottom:20
  },

  textInput: {
    width: "70%",
    borderWidth: 1,
    borderColor: "grey",
    height: 40,
    paddingLeft: 15,
  },
  button: {
    // backgroundColor: "#7AB2D3",
    justifyContent: "center",
    alignContent: "center",
    padding: 10,
    borderRadius: 15,
  },
  buttonText: {
    color: "white",
  },

  goalsContainer:{
    flex:5,
  },
  goalItem:{
    margin:8,
    padding:8,
    borderRadius:6,
    backgroundColor:'#5e0acc',
  },
  goalText:{
    color:'white'
  }
});

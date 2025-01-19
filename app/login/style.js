import Colors from "../../constants/colors.js";


export const customStyle = StyleSheet.create({
    MainView :{backgroundColor: Colors.WHITE, height: "100%"},
    Image : {width: "100%",
        height: "60%",},
    GetstartedText:{
        fontFamily: "Outfit-Bold",
        textAlign: "center",
    },

    GetstartedPressable :{
         backgroundColor: Colors.PRIMARY,
                    width: "100%",
                    height: "fit",
                    padding: 14,
                    borderRadius: 14,
                    marginTop: 10,
                    fontSize: 20,
    },

    ViewText : {padding: 20, display: "flex", alignItems: "center" },

    Question : {
        fontFamily: "Outfit-Bold",
        fontSize: 30,
        textAlign: "center",
    },
  Description :{
    fontFamily: "Outfit",
            fontSize: 18,
            textAlign: "center",
            color: Colors.GRAY,
  }

 })
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  short_area: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderTopWidth: 4,
    borderBottomWidth: 4,
    borderColor: "#2e2e2e",
  },
  short_title_area : { flexDirection: "row", alignItems: "center" },
  short_logo : { width: 30, height: 30 },
  short_title : { color: "#f1f1f1", marginLeft: 10, fontSize: 20, fontWeight: "bold" },

  item_list_area : {marginTop : 20},
  item_image : (position,width,height)=>({
    width: (position==="PORTRAIT") ? width * 0.46 : width * 0.25,
    height: (position==="PORTRAIT") ? height * 0.35 : width*0.35,
    justifyContent: "space-between",
    padding: 8,
    margin: 4,
  }),
  item_image_style : { borderRadius: 10 },
  item_dots_icon : { alignSelf: "flex-end" },
  item_title : { color: "#f1f1f1", fontWeight: "bold", fontSize: 15 },
  item_description : { color: "#f1f1f1", fontWeight: "bold", fontSize: 15, marginTop: 5 }
});

export default styles;

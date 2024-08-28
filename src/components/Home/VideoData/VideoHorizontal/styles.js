import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { paddingVertical: 10 },
  item_area: { marginTop: 20, flexDirection: "row" },
  item_image: (width, height) => ({
    width: width * 0.30,
    height: height * 0.40,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  }),
  item_duration_area: { padding: 5 },
  item_duration_container: { backgroundColor: "#141514", padding: 3, borderRadius: 4 },
  item_duration_text: { color: "white", fontWeight: "bold" },

  item_description_area: {
    marginTop: 20,
    flexDirection: "row",
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: "space-between",
  },
  description_left_container: { flexDirection: "column"},
  description_avatar: { width: 40, height: 40, borderRadius: 20,marginTop : 10},
  description_container: { marginLeft: 10 },
  item_title: { color: "white", fontWeight: "bold" },
  item_desc: { color: "#4d4d4d" },

  description_right_container: { justifyContent: "flex-start" },
});

export default styles;

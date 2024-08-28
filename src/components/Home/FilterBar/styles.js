import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { paddingVertical: 8 },
  scroll_area: { paddingHorizontal: 10 },
  button_area: (activeIndex, index, filterData) => ({
    backgroundColor: activeIndex === index ? "#f1f1f1" : "#2e2e2e",
    padding: 8,
    borderRadius: 8,
    marginRight: index === filterData.length - 1 ? 15 : 8,
  }),
  button_text: (activeIndex,index) => ({ color: activeIndex === index ? "#0f0f0f" : "#f1f1f1", fontWeight: "bold" }),
});

export default styles;

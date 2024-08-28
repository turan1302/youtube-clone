import React, { Component } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default class FilterBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeIndex : 0,
      filterData : [
        {id : 1,name : "Tümü"},
        {id : 2,name : "Yeni Öneriler"},
        {id : 3,name : "Oyun"},
        {id : 4,name : "Sitcom'lar"},
        {id : 5,name : "Mixl'ler"},
        {id : 6,name : "Canlı"},
        {id : 7,name : "Son yüklenenler"},
        {id : 8,name : "Yayınlar"},
        {id : 9,name : "Yeni öneriler"},
      ]
    }
  }

  changeActiveIndex = (index)=>{
    this.setState({
      activeIndex : index
    })
  }

  render() {
    const {activeIndex,filterData} = this.state;

    return (
      <View style={styles.container}>
       <ScrollView showsHorizontalScrollIndicator={false} bounces horizontal style={styles.scroll_area}>
         {filterData.map((item, index) => (
           <TouchableOpacity
             onPress={()=> this.changeActiveIndex(index)}
             key={index}
             style={styles.button_area(activeIndex,index,filterData)}
           >
             <Text style={styles.button_text(activeIndex,index)}>{item.name}</Text>
           </TouchableOpacity>
         ))}
       </ScrollView>
      </View>
    )
  }
}

import {View,Text,FlatList,Dimensions,Image, Pressable} from 'react-native'
import { Dispatch,SetStateAction, useState } from 'react'
import off from './Helpers/off.png'
import on from './Helpers/on.png'
interface cardInfo {
    date: Date,
    text: string,
    marked: boolean,
  }
const Cards = ({cards,setCards}:{cards: cardInfo[],setCards: Dispatch<SetStateAction<cardInfo[]>>}) => {

    const Item = ({item,indexVal}:{item:cardInfo,indexVal:string}) => {
        const [marker,setMarker] = useState(item.marked)
        return(<View style={{backgroundColor:"pink",width:Dimensions.get("window").width*0.9,justifyContent:'flex-start',alignItems:'flex-start'}}>
            <View style={{flexDirection:'row',backgroundColor:"red"}}>
            <Pressable 
            onPress={()=>{
                let tempCard = cards
                tempCard[Number(indexVal)].marked = !tempCard[Number(indexVal)].marked
                setCards(tempCard)
                setMarker(item.marked)
            }}
            style={{padding:5,backgroundColor:'blue'}}
            >
                {marker?<Image source={on} style={{height:28,width:28,backgroundColor:"yellow"}}/>:<Image source={off} style={{height:28,width:28,backgroundColor:"yellow"}}/>}
            </Pressable>
            <Text style={[{color:'black',fontSize:20,backgroundColor:'lightgreen',flex:1,paddingLeft:10,textAlignVertical:'center'},marker?{textDecorationLine: 'line-through'}:{textDecorationLine:'none'}]}>{item.text}</Text>
            </View>
            <Text style={{textAlign:'right',width:"100%",color:'black',backgroundColor:'cyan'}} >{item.date.toLocaleDateString()}{" "}{item.date.toLocaleTimeString()}</Text>
        </View>)
    }
    const ItemSeperator = () => (
    <View style={{backgroundColor:'black',height:10}}></View>
    )
    
    return (
        <View style={{backgroundColor:'green',width:"100%",height:"100%",justifyContent:'flex-start',alignItems:'center'}}>
            <FlatList
            renderItem={({item}) => <Item item={item[1]} indexVal={item[0]} />}
            data={Object.entries(cards)}
            keyExtractor={item => item[0]}
            contentContainerStyle={{alignItems:'center',width:Dimensions.get("window").width,backgroundColor:'red',marginTop:10}}
            ItemSeparatorComponent={<ItemSeperator/>}
            />
        </View>
    )
}

export default Cards
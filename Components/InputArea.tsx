import {View,Text,TextInput, Pressable,Image,Keyboard} from 'react-native'
import { Dispatch,SetStateAction,useState } from 'react'
import plus from './Helpers/plusSymbol.png'

interface cardInfo {
    date: Date,
    text: string,
    marked: boolean,
  }
const InputArea = ({setCards}:{setCards: Dispatch<SetStateAction<cardInfo[]>>}) => {
    const [text,setText] = useState("")
    return (
        <View style={{backgroundColor:'red',width:"100%",height:"100%",justifyContent:'center',alignItems:'flex-start',flexDirection:'row'}}>
            <TextInput 
            placeholder='Type Here'
            style={{backgroundColor:'white',width:"85%",height:"100%",color:'black',fontSize:20}}
            placeholderTextColor={"gray"}
            value={text}
            onChangeText={text => setText(text)}
            />
            <Pressable 
            onPress={()=>{
                let obj = {
                    date: new Date(),
                    text: text,
                    marked: false,
                }
                setText("")
                Keyboard.dismiss()
                setCards(prev=>[...prev,obj])
            }}
            style={{width:"15%",backgroundColor:'blue',height:"100%",justifyContent:'center',alignItems:'center'}}>
                <Image source={plus} style={{tintColor:'white'}}/>
            </Pressable>
        </View>
    )
}

export default InputArea
import {SafeAreaView,View,Dimensions} from 'react-native'
import { useState } from 'react'
import InputArea from './Components/InputArea'
import Cards from './Components/Cards'

interface cardInfo {
  date: Date,
  text: string,
  marked: boolean,
}

const App = () => {
  let height = Dimensions.get("window").height

  const [cards,setCards] = useState<cardInfo[]>([])

  return(
    <SafeAreaView style={{backgroundColor:'white',flex:1}}>
      <View style={{height:height*0.07}}>
          <InputArea setCards={setCards} />
      </View>
      <View style={{height:height*0.93}}>
          <Cards cards={cards} setCards={setCards}/>
      </View>
    </SafeAreaView>
  )
}

export default App
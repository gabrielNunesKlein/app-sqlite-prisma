import { SafeAreaView, Text, View } from "react-native";
import Home from "./screen/home";
import { useEffect, useState } from "react";
import { initializeDb } from "../services/db";

export default function Index() {

  const [dbInitialize, setDbInitialize] = useState(false)
  useEffect(() => {

    const setUp = async () => {
      await initializeDb();
      setDbInitialize(true)
    }

    setUp()

  }, [])

  if(!dbInitialize){
    return (
      <SafeAreaView>
        <Text>Carregando..</Text>
      </SafeAreaView>
    )
  }

  return (
    <View style={{ flex: 1}}>
      <Home />
    </View>
  );
}

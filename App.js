import React ,{ useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { db } from './data/firebase-config'
import { collection, getDocs } from 'firebase/firestore'

export default function App() {
    const [users, setUsers] = useState([])
    const collectionRef = collection(db, "testdb")
  
    console.log(process.env.REACT_APP_PROJECT_ID);

    useEffect( () => {
      const getUsers = async () => {
        const data = await getDocs(collectionRef)
        setUsers(data.docs.map( (doc) => ({...doc.data(), id: doc.id})))
      }
  
      getUsers();
    }, [])
  
    return (
      // <View style={styles.container}>
      //   <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
      // </View>
      <View>
        {users.map( (user) => {
          return(
            <Text>Name: {user.firstname}</Text>
          );
        } 
      )}
      </View>
    );
  }
  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 16,
    },
});
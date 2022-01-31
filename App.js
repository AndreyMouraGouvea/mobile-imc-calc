import React, { useState }  from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';


function App() {


  const [peso, setPeso] = useState('');
  const [altura, setAltura]  = useState('');
  
  function calcularIMC() {
    
    const alt = altura / 100;
    const imc = peso / (alt * alt);
  
    if (imc < 18.6) {
  
      alert("Você está abaixo do peso! Seu IMC: " + imc.toFixed(2))
  
    } else if (imc >= 18.6 && imc < 24.9) {
  
      alert("Peso Ideal! Seu IMC: " + imc.toFixed(2))
  
    } else if (imc >= 24.9 && imc < 34.9) {
  
      alert("Você está levemente acima do peso! Seu IMC: " + imc.toFixed(2))
  
    } else if (imc > 34.9) {
  
      alert("Cuidado! Obesidade! Seu IMC: " + imc.toFixed(2))
  
    }
  
  }

  return (

      <View style={styles.container}>
          <Text style={styles.title}>Calcule seu IMC</Text>

      <TextInput
      style={styles.input}
      value={peso}
      onChangeText={ (peso) =>  setPeso(peso)}
      placeholder='Peso (kg) Ex: 90'
      keyboardType='numeric'
        />
      <TextInput
      style={styles.input}
      value={altura}
      onChangeText={ (altura) =>  setAltura(altura)}
      placeholder='Altura (cm) Ex: 180'
      keyboardType='numeric'
        />

      <TouchableOpacity style={styles.button}
      onPress={calcularIMC}
      
      >
        <Text style={styles.buttonText}>Calcular</Text>

      </TouchableOpacity>


      </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex:1,
    
  },
  title: {
    textAlign: 'center',
    marginTop: 25,
    fontSize: 30,
    color: 'black'
  },
  input: {
    backgroundColor: 'lightgray',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#FFFFFf',
    fontSize: 23
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#41AEF4',
    padding: 10,
  },
  buttonText: {
    fontSize: 25,
    color: '#FFFFFF'
  },
  mensagem: {
    textAlign: 'center',
    marginTop: 15,
    fontSize: 30,
    color: 'black'
  },

})

export default App
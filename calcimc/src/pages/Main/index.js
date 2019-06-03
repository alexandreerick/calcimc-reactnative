import React, { Component } from 'react';

import {
  Text, View, StyleSheet, TouchableOpacity,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efedee',
  },
  input: {
    height: 80,
    textAlign: 'center',
    width: '50%',
    fontSize: 50,
    marginTop: 24,
  },
  entradas: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#ce183a',
    marginTop: 25,
  },
  buttonText: {
    alignSelf: 'center',
    padding: 30,
    fontSize: 25,
    color: '#f2eded',
    fontWeight: 'bold',
  },
  resultado: {
    alignSelf: 'center',
    color: 'lightgray',
    fontSize: 65,
    padding: 15,
  },
});

// const Main = () => (

//   <View style={styles.container}>
//     <View style={styles.entradas}>
//       <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} />
//       <TextInput placeholder="Peso" keyboardType="numeric" style={styles.input} />
//     </View>
//     <TouchableOpacity style={styles.button} onPress={() => {}}>
//       <Text style={styles.buttonText}>Calcular</Text> 
//     </TouchableOpacity>
//     <Text style={styles.resultado}>{this.state.resultado}</Text>
//     <Text style={[styles.resultado, { fontSize: 40 }]}>{this.state.resultadoText}</Text>
//   </View>
// );


type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      altura: 0, massa: 0, resultado: 0, resultadoText: '',
    };
    this.calcular = this.calcular.bind(this);
  }

  calcular() {
    const imc = this.state.massa / (this.state.altura * this.state.altura)
    const s = this.state;
    s.resultado = imc;

    if (s.resultado < 16) {
      s.resultadoText = 'Magreza Grave';
    } else if (s.resultado < 17) {
      s.resultadoText = 'Magreza Moderada';
    } else if (s.resultado < 18.5) {
      s.resultadoText = 'Magreza Leve';
    } else if (s.resultado < 25) {
      s.resultadoText = 'Saudável';
    } else if (s.resultado < 30) {
      s.resultadoText = 'Sobrepeso';
    } else if (s.resultado < 35) {
      s.resultadoText = 'Obesidade Grau I';
    } else if (s.resultado < 40) {
      s.resultadoText = 'Obesidade Grau II (Severa)';
    } else {
      s.resultadoText = 'Obesidade Grau III (Mórbida)';
    }
    this.setState(s);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.entradas}>
          <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(altura) => { this.setState({ altura }); }} />
          <TextInput placeholder="Peso" keyboardType="numeric" style={styles.input} onChangeText={(massa) => { this.setState({ massa }); }} />
        </View>
        <TouchableOpacity style={styles.button} onPress={this.calcular}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
        <Text style={styles.resultado}> {this.state.resultado.toFixed(2)} </Text>
        <Text style={[styles.resultado, { fontSize: 40 }]}>{this.state.resultadoText}</Text>
      </View>
    );
  }
}


// export default Main;

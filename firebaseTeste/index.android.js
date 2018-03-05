import React, { Component } from 'react';
import { AppRegistry, View, Button } from 'react-native';
import firebase from 'firebase';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDlQ5GCZJtz66ummxLE648b85Ru4kjloyE',
      authDomain: 'configuracaofirebasereac-44f6c.firebaseapp.com',
      databaseURL: 'https://configuracaofirebasereac-44f6c.firebaseio.com',
      projectId: 'configuracaofirebasereac-44f6c',
      storageBucket: 'configuracaofirebasereac-44f6c.appspot.com',
      messagingSenderId: '599844213480'
    };
    firebase.initializeApp(config);
  }

  cadastrarUsuario() {
    const email = 'reinaldo@email.com';
    const senha = '1grhfnf';
    const usuario = firebase.auth();

    usuario.createUserWithEmailAndPassword(
      email,
      senha
    ).catch(
      (erro) => {
        //erro.code, erro.message
        let menssagemErro = '';
        if (erro.code === 'auth/weak-password') {
          menssagemErro = 'A senha precisa ter no mínimo 6 caracteres!';
        }
        alert(menssagemErro);
      }
    );
  }

  verificarUsuarioLogado() {
    const usuario = firebase.auth();
  /*   const usuarioAtual = usuario.currentUser;

    if (usuarioAtual) {
      alert('Usuario está logado');
    } else {
      alert('Usuario não está logado');
    } */

    usuario.onAuthStateChanged(
      (usuarioAtual) => {
        if (usuarioAtual) {
          alert('Usuario está logado');
        } else {
          alert('Usuario não está logado');
        }
      }
    );


  }

  desloagrUsuario() {
    const usuario = firebase.auth();
    usuario.signOut();
  }

  loagrUsuario() {   
    const email = 'reinaldo@email.com';
    const senha = '1grhfnf2';
    const usuario = firebase.auth();
    usuario.signInWithEmailAndPassword(
      email,
      senha
    ).catch(
      (erro) => {
        
        alert(erro.message);
      }
    );
  }

  render() {
    return (
      <View>
        <Button
          onPress={() => {
            this.cadastrarUsuario();
          }}
          title="Cadastrar Usuario"
          color="#841584"
          accessibilityLabel="SCadastrar Usuario"
        />
        <Button
          onPress={() => {
            this.verificarUsuarioLogado();
          }}
          title="Verificar usuario logado"
          color="#841584"
          accessibilityLabel="Verificar usuario logado"
        />
        <Button
          onPress={() => {
            this.desloagrUsuario();
          }}
          title="Deslogar usuario logado"
          color="#841584"
          accessibilityLabel="Deslogar usuario logado"
        />
        <Button
          onPress={() => {
            this.loagrUsuario();
          }}
          title="Logar usuario"
          color="#841584"
          accessibilityLabel="Logar usuario"
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('firebaseTeste', () => App);

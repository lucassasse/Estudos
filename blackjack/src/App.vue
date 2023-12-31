<template>
<h1>BlackJack</h1>
<button @click="getDeck">Novo baralho</button>
<p>Valor em Carteira: {{ totalMoney || "Suas fichas acabaram. Compre mais ou vá embora!" }}</p>
<h4>Dealer:</h4>
<div class="hand">
  <p v-for="card in this.dealerCards" :key="card">
    <img :src="card.image" :alt="card.code">
  </p>
</div>
<h4>Player:</h4>
<div class="hand">
  <p v-for="card in this.playerCards" :key="card" class="hand">
    <img :src="card.image" :alt="card.code">
  </p>
</div>
<label>Valor da Aposta:</label> <br>
<input v-model="betValue">
<button @click="initialCards">Jogar</button>
<br><br>
<button @click="pickCard">Pegar</button>
<button @click="pass">Passar</button>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return{
      totalMoney: 100,
      betValue: 1, //1
      inGame: false,
      baseUrl: 'https://www.deckofcardsapi.com/api/deck/',
      deckId: 'mbar4yujsiai',
      dealerCards: [],
      playerCards: []
    }
  },
  methods:{
    async getDeck(){
      const url = `${this.baseUrl}new/shuffle/?deck_count=6`
      await axios.get(url)
      .then(resp => {
        this.deckId = resp.data.deck_id
      })
      .catch(error => {
        console.log("[ERROR] = " + error)
        alert("Ops, algo de errado aconteceu.")
      })
    },
    async initialCards(){
      if(!this.inGame && this.chipsVerify()){
        this.chipsDiscount()
        for(let i = 0; i < 2; i++){
          const url = `${this.baseUrl}${this.deckId}/draw/?count=2`
          await axios.get(url)
          .then(resp => {
            this.showInitialCards(resp.data)
          })
          .catch(error => {
            console.log("[ERROR] = " + error)
            alert("Ops, algo de errado aconteceu.")
          })
        }
        this.inGame = true
      }
    },
    async pickCard(){
      const url = `${this.baseUrl}${this.deckId}/draw/?count=1`
      await axios.get(url)
      .then(resp => {
        console.log(resp.data)
        this.playerCards.push(resp.data.cards[0])
      })
      .catch(error => {
        console.log("[ERROR] = " + error)
        alert("Ops, algo de errado aconteceu.")
      })
      this.dealerTurn()
    },
    pass(){
      this.dealerTurn()
      console.log("Turn pass");
    },
    showInitialCards(cardsPick){
      if (this.playerCards.length < 2){
        this.playerCards.push(cardsPick.cards[0])
        this.playerCards.push(cardsPick.cards[1])
      }else{
        this.dealerCards.push(cardsPick.cards[0])
        this.dealerCards.push(cardsPick.cards[1])
      }
      console.log(cardsPick.cards[0])
      console.log(cardsPick.cards[1])
    },
    dealerTurn(){
      console.log("Verify Cards");
    },
    chipsVerify(){
      if(this.betValue <= 0){
        alert("Aposte um valor válido!")
        return false
      }
      else if(this.totalMoney < this.betValue){
        alert("Fichas insuficientes") 
        return false
      }
    },
    chipsDiscount(){
      this.totalMoney -= this.betValue
    }
  }
}
</script>

<style>
*{
  font-family: Arial, Helvetica, sans-serif;
}

.hand{
  display: flex;
}

img{
  width: 100px;
}
</style>

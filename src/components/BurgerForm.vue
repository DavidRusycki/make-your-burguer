<template>

    <div>
        <ShowMessage :msg="msg" v-if="msg"/>

        <div class="main-formulario">
            <form action="" id="burger-form" @submit="createBurguer">
                <div class="input-container">
                    <label for="nome">Nome do cliente:</label>
                    <input required type="text" name="nome" id="nome" v-model="nome" placeholder="Digite o seu nome">
                </div>
                <div class="input-container">
                    <label for="pao">Escolha o pão:</label>
                    <select required name="pao" id="pao" v-model="pao">
                        <option value="0">Selecione</option>
                        <option v-for="(pao) in paes" :key="pao.id" :value="pao.tipo"> {{pao.tipo}} </option>
                    </select>
                </div>
                <div class="input-container">
                    <label for="carne">Escolha o carne:</label>
                    <select required v-model="carne" name="carne" id="carne">
                        <option value="0">Selecione</option>
                        <option v-for="(carne) in carnes" :key="carne.id" :value="carne.tipo"> {{carne.tipo}} </option>
                    </select>
                </div>
                <div class="opcionais-container" id="opcionais-title">
                    <label id="opcionais-title" for="opcionais">selecione os opcionais:</label>
                    <div class="checkbox-container" v-for="opcional in opcionaisdata" :key="opcional.id" >
                        <input type="checkbox" :id="opcional.tipo" name="opcionais" v-model="opcionais" :value="opcional.tipo">
                        <label class="label-opcional" :for="opcional.tipo">{{opcional.tipo}}</label>
                    </div>
                </div>
                <div class="input-container">
                    <input type="submit" class="submit-btn" value="Criar meu Burger!">
                </div>
            </form>
        </div>

    </div>

</template>

<script>
import ShowMessage from '@/components/ShowMessage.vue'

export default {
  name: 'BurguerForm',
  components: {
    ShowMessage
  },
  data () {
    return {
      paes: null,
      carnes: null,
      opcionaisdata: null,
      nome: null,
      pao: 0,
      carne: 0,
      opcionais: [],
      status: 'Solicitado',
      msg: null
    }
  },
  methods: {
    async getIngredientes () {
      const req = await fetch('http://localhost:3000/ingredientes')
      const data = await req.json()

      this.paes = data.paes
      this.carnes = data.carnes
      this.opcionaisdata = data.opcionais
    },
    async createBurguer (e) {
      e.preventDefault()
      const data = {
        nome: this.nome,
        carne: this.carne,
        pao: this.pao,
        opcionais: Array.from(this.opcionais),
        status: 'Solicitado'
      }

      const dataJson = JSON.stringify(data)

      const req = await fetch('http://localhost:3000/burgers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: dataJson
      })

      const res = await req.json()

      this.nome = null
      this.carne = 0
      this.pao = 0
      this.opcionais = null
      this.getIngredientes()

      this.msg = 'Pedido Realizado com sucesso!'
      setTimeout(() => {
        this.msg = null
      }, 2000)

      return res
    }
  },
  mounted () {
    this.getIngredientes()
  }
}

</script>

<style scoped>

    #burger-form {
        max-width: 400px;
        margin: 0 auto;
    }

    .input-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    label {
        font-weight: bold;
        margin-bottom: 15px;
        color: #222;
        padding: 5px 10px;
        border-left: 4px solid #FCBA03;
    }

    .label-opcional {
        font-weight: bold;
        margin-bottom: 15px;
        color: #222;
        padding: 5px 10px;
        border: 0;
    }

    input, select {
        padding: 5px 10px;
        width: 300px;
    }

    #opcionais-container {
        flex-direction: row;
        flex-wrap: wrap;
    }

    #opcionais-title {
        width: 100%;
        margin-bottom: 20px;
    }

    .checkbox-container {
        display: flex;
        align-items: flex-start;
        width: 50%;
        margin-bottom: 20px;
        margin-top: 20px;
    }

    .checkbox-container label, .checkbox-container input {
        width: auto;
    }

    .checkbox-container label {
        margin-left: 2px;
        font-weight: bold;
        position: absolute;
        margin-top: -7px;
        margin-left: 10px;
    }

    .submit-btn {
        background-color: #222;
        color: #ffffff;
        font-weight: bold;
        border: 2px solid #222;
        padding: 10px;
        font-size: 16px;
        margin: 0 auto;
        cursor: pointer;
        transition: .5s;
    }

    .submit-btn:hover {
        background-color: transparent;
        color: #222;
    }

</style>

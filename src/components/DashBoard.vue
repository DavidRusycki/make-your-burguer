<template>
    <div class="burger-table">
      <div>
        <div id="burger-table-heading">
          <div class="order-id">Id:</div>
          <div>Cliente:</div>
          <div>Pão:</div>
          <div>Carne:</div>
          <div>Opcinais:</div>
          <div>Ações:</div>
        </div>
      </div>
      <div id="burger-table-rows">
          <div class="burger-table-row" v-for="pedido in burgers" :key="pedido.id">
            <div class="order-number">{{pedido.id}}</div>
            <div>{{pedido.nome}}</div>
            <div>{{pedido.pao}}</div>
            <div>{{pedido.carne}}</div>
            <div>
              <div v-if="pedido.opcionais.length">
                <ul >
                  <li v-for="(opcional, index) in pedido.opcionais" :key="index">{{opcional}}</li>
                </ul>
              </div>
              <div v-else>
                <p>Não</p>
              </div>
            </div>
            <div class="div-acoes">
              <select @change="this.changeStatus(pedido)" name="status" class="status">
                <option value="">Selecione</option>
                <option v-for="stat in status" :value="stat.tipo" :key="stat.id" :selected="stat.tipo == pedido.status">{{stat.tipo}}</option>
              </select>
              <button :id="pedido.id" class="delete-btn">Cancelar</button>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'DashBoard',
  data () {
    return {
      burgers: null,
      burger_id: null,
      status: []
    }
  },
  methods: {
    async getPedidos () {
      const req = await fetch('http://localhost:3000/burgers')
      const data = await req.json()
      this.burgers = data
    },
    async getStatus () {
      const req = await fetch('http://localhost:3000/status')
      const data = await req.json()
      this.status = data
    },
    async changeStatus (pedido) {
      // const req = await fetch('http://localhost:3000/burgers', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: dataJson
      // })
      console.log(pedido)
      // console.log(status)
    }
  },
  mounted () {
    this.getStatus()
    this.getPedidos()
  }
}
</script>

<style scoped>

  #burger-table {
    max-width: 1200px;
    margin: 0 auto;
  }

  #burger-table-heading,
  #burger-table-rows,
  .burger-table-row {
    display: flex;
    flex-wrap: wrap;
  }

  #burger-table-heading {
    font-weight: bold;
    padding: 5px;
    border-bottom: 3px solid #333;
  }

  #burger-table-heading div {
    width: 16%;
  }

  .burger-table-row div {
    width: 16%;
  }

  .burger-table-row {
    width: 100%;
    padding: 12px;
    border-bottom: 1px solid #CCC;
  }

  .order-id {
    width: 5% !important;
  }

  .burger-table-row .order-number {
    width: 5%;
  }

  select {
    padding: 12px 6px;
    margin-right: 12px;
  }

  .delete-btn {
    background-color: #222;
    color: white;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
  }

  .delete-btn:hover {
    background-color: transparent;
    color: #222;
  }

  .div-acoes {
    width: 30% !important;
  }

</style>

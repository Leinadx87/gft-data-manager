import { BGADPFinancialOverviewGetV0 } from '@cells-components/bgadp-financial-overview-v0';

export class GftDataManagerService {
 async _metodoBgadp() {
    let dataProvider = new BGADPFinancialOverviewGetV0(
        {
            host: 'https://mock-senda-node.herokuapp.com',

            requiresTsec: false,
        }
    );

     const respuesta = await dataProvider.generateRequest();
        //console.log('res.. ', JSON.parse(respuesta.response))
     return JSON.parse(respuesta.response);
  }

  getInstanceBgadp() {
      return this._metodoBgadp();
  }

  async _metodoRespuesta() {
    const resultado = await this.getInstanceBgadp();
    //console.log('metodo respuesta antes', resultado);
    let nuevoArreglo = [];
    let productos = [];

    (resultado.data.contracts).map((contract) => {
      if(contract.alias != undefined){
        productos.push({
        alias: contract.alias,
        balance: contract.detail.specificAmounts[0].amounts[0].amount,
        id: contract.id,
        printedNumber: contract.number
        })

      }else {
        productos.push({
          alias: "",
          balance: contract.detail.specificAmounts[0].amounts[0].amount,
          id: contract.id,
          printedNumber: contract.number
          })
      }
    })

    nuevoArreglo.push({
        currency: 'MXN',
        products : productos
    })
    //console.log("metodo respuesta despues ", nuevoArreglo);

    return nuevoArreglo;
  }

  getInstanceRespuesta() {
    return this._metodoRespuesta();
  }
  
}

import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { CallService } from '../services/call.service';
import { ProductService } from '../services/product.service';
import { TariffService } from '../services/tariff.service';

@Component({
  selector: 'app-section6',
  templateUrl: './section6.component.html',
  styleUrls: ['./section6.component.css']
})
export class Section6Component implements OnInit {

  produtoChamada: String = "Calcular Ligacao"

  produtoFaleMais: String[] = [ "30", "60", "120" ]

  origemChamada: String[] = [ "11", "16", "17", "18" ] 

  destinoChamada: String[] = [ "11", "16", "17", "18" ] 

  valorTarifa: String[] = [ "1.90", "2.90", "1.70", "2.70", "0.90", "1.90" ]

  produto: String = "none"

  tarifa: String = "0.00"

  preco: String = "0.00"

  tempo = "00"

  origem: String = ""

  destino: String = ""

  constructor(
    private productService: ProductService,
    private callService: CallService,
    private tariffService: TariffService
  
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        console.log(data)
      },
      (error) => {
        console.log(error)
      }
    )

    this.callService.getCall().subscribe(
      (data) => {
        console.log(data)
      },
      (error) => {
        console.log(error)
      }
    )
    
    this.tariffService.getTariff().subscribe(
      (data) => {
        console.log(data)
      },
      (error) => {
        console.log(error)
      }
    )

  }

  onClickCalcula() {
    var tempo = this.tempo
    var valorTarifa = "" + this.tarifa

    if (this.origem === "11" && this.destino === "11" || this.origem === "16" && this.destino === "16" 
    || this.origem === "17" && this.destino === "17" || this.origem === "18" && this.destino === "18"
    || this.origem === "16" && this.destino === "17" || this.origem === "16" && this.destino === "18"
    || this.origem === "17" && this.destino === "16" || this.origem === "17" && this.destino === "18"
    || this.origem === "18" && this.destino === "16" || this.origem === "18" && this.destino === "17") {
      alert("Erro")
    } else if (this.origem === "11" && this.destino === "16") {
      valorTarifa = this.tarifa = "1.90"
    } else if (this.origem === "16" && this.destino === "11") {
      valorTarifa = this.tarifa = "2.90"
    } else if (this.origem === "11" && this.destino === "17") {
      valorTarifa = this.tarifa = "1.70"
    } else if (this.origem === "17" && this.destino === "11") {
      valorTarifa = this.tarifa = "2.70"
    } else if (this.origem === "11" && this.destino === "18") {
      valorTarifa = this.tarifa = "0.90"
    } else if (this.origem === "18" && this.destino === "11") {
      valorTarifa = this.tarifa = "1.90"
    }

    if (this.produto === "none") {
      this.preco = "" + parseFloat(tempo) * parseFloat(valorTarifa)

    } else if (this.produto === "30") {
      this.preco = "" + ((parseFloat(tempo) - 30) * parseFloat(valorTarifa))

    } else if (this.produto === "60") {
      this.preco = "" + ((parseFloat(tempo) - 60) * parseFloat(valorTarifa))

    } else if (this.produto === "120") {
      this.preco = "" + ((parseFloat(tempo) - 120) * parseFloat(valorTarifa))

    } else {
      console.error("erro");

    }

  }

  onTempoDaChamda(event: Event) {
    var tempo = (<HTMLInputElement>event.target).value
    this.tempo = tempo
    console.log(tempo)
    
  }

  onChangeOrigem(event: Event) {
    var origem = (<HTMLSelectElement>event.target).value
    this.origem = origem
    console.log(event)

  }

  onChangeDestino(event: Event) {
    var destino = (<HTMLSelectElement>event.target).value
    this.destino = destino
    console.log(event)   

  }

  onChangeProduto(event: Event) {
    var produto = (<HTMLSelectElement>event.target).value
    this.produto = produto
    console.log(event)

  }

}

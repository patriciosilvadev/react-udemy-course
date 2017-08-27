import React from 'react';
import axios from 'axios';
import ListaCartoes from './lista-cartoes';
import Busca from '../busca/busca';

class ListaCartao extends React.Component {
  constructor(props){
    super(props);
    this.state = { busca: '', dados: [], servidor: [] }
    this.atualizaBusca = this.atualizaBusca.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  atualizaBusca(evento){
    this.setState({busca: evento.target.value});
    if(evento.target.value == ''){
      this.setState({dados: this.state.servidor});
    }
  }

  onSubmit(evento){
    let busca = this.state.busca;
    let dados = this.state.servidor;
    let novaLista = dados.filter(function(item){
      if(item.titulo.toUpperCase().indexOf(busca.toUpperCase()) > -1
      || item.descricao.toUpperCase().indexOf(busca.toUpperCase()) > -1
      || item.detalhe.toUpperCase().indexOf(busca.toUpperCase()) > -1){
        return item;
      }
    });

    this.setState({dados: novaLista});
    evento.preventDefault();
  }

  componentDidMount(){
    let self = this;
    axios.get('http://localhost:8000/servidor.php?dados=1').then(function(response){
      self.setState({
        dados: response.data,
        servidor: response.data,
      });
    });
  }

  render(){
    let noticias = this.state.dados;
    let aux = [];
    let novaLista = [];
    for(let k = 0; k < noticias.length; k++){
      aux.push(noticias[k]);
      if(aux.length == this.props.qtdLinha){
        novaLista.push(aux);
        aux = [];
      }else if(k == noticias.length - 1){
        novaLista.push(aux);
      }
    }

    let tamanhoCol = this.props.tamanhoCol
    let linha = novaLista.map(function(grupo, index){
      return (
        <div key={index} className="row">
          <ListaCartoes grupo={grupo} tamanhoCol={tamanhoCol} />
        </div>
      );
    });

    return (
      <div>
        <div className="row">
          <Busca atualizaBusca={this.atualizaBusca} onSubmit={this.onSubmit} busca={this.state.busca} />
        </div>
        <div>{linha}</div>
      </div>
    );
  }
}

export default ListaCartao;

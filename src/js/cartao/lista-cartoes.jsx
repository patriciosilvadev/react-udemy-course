import React from 'react';
import Cartao from './cartao';

class ListaCartoes extends React.Component {
  constructor(props){
    super(props);
    this.state = { cliques: 0};
    this.addClique = this.addClique.bind(this);
  }

  addClique(){
    this.setState((prevState)=>({
      cliques: prevState.cliques + 1
    }));
  }

  render(){
    let tamanhoCol = "col m" + this.props.tamanhoCol;
    let self = this;
    let listaCartoes = this.props.grupo.map(function(item, index){
      return (
        <div key={index} className={tamanhoCol}>
          <Cartao dados={item} addClique={self.addClique}/>
        </div>
      );
    });

    return (
      <div>
        <p>Quantidade de cliques: {this.state.cliques}</p>
        {listaCartoes}
      </div>
    );
  }
}

export default ListaCartoes;

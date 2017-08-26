import React from 'react';
import ListaCartoes from './lista-cartoes';

class ListaCartao extends React.Component {
  
  render(){
    let noticias = [
      {titulo: 'Titulo 1', descrição: 'Descrição 1', detalhe: 'Detalhe 1', imagem: 'http://materializecss.com/images/office.jpg', link: '#link'},
      {titulo: 'Titulo 2', descrição: 'Descrição 2', detalhe: 'Detalhe 2', imagem: 'http://materializecss.com/images/office.jpg', link: '#link'},
      {titulo: 'Titulo 3', descrição: 'Descrição 3', detalhe: 'Detalhe 3', imagem: 'http://materializecss.com/images/office.jpg', link: '#link'},
      {titulo: 'Titulo 4', descrição: 'Descrição 4', detalhe: 'Detalhe 4', imagem: 'http://materializecss.com/images/office.jpg', link: '#link'},
      {titulo: 'Titulo 5', descrição: 'Descrição 5', detalhe: 'Detalhe 5', imagem: 'http://materializecss.com/images/office.jpg', link: '#link'},
      {titulo: 'Titulo 6', descrição: 'Descrição 6', detalhe: 'Detalhe 6', imagem: 'http://materializecss.com/images/office.jpg', link: '#link'},
      {titulo: 'Titulo 7', descrição: 'Descrição 7', detalhe: 'Detalhe 7', imagem: 'http://materializecss.com/images/office.jpg', link: '#link'}
    ];
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
      <div>{linha}</div>
    );
  }
}

export default ListaCartao;

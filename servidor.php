<?php

$menu = [
  ['titulo'=>'Home', 'link'=>'#home'],
  ['titulo'=>'Sobre', 'link'=>'#sobre'],
  ['titulo'=>'Contato', 'link'=>'#contato']
];

$dados = [
  ['titulo'=>'Noticia 1', 'descricao'=>'Descrição 1', 'detalhe'=>'Detalhe 1', 'imagem'=>'http://materializecss.com/images/office.jpg', 'link'=>'#link'],
  ['titulo'=>'Titulo 2', 'descricao'=>'Descrição 2', 'detalhe'=>'Detalhe 2', 'imagem'=>'http://materializecss.com/images/office.jpg', 'link'=>'#link'],
  ['titulo'=>'Titulo 3', 'descricao'=>'Descrição 3', 'detalhe'=>'Detalhe 3', 'imagem'=>'http://materializecss.com/images/office.jpg', 'link'=>'#link'],
  ['titulo'=>'Titulo 4', 'descricao'=>'Descrição 4', 'detalhe'=>'Detalhe 4', 'imagem'=>'http://materializecss.com/images/office.jpg', 'link'=>'#link'],
  ['titulo'=>'Titulo 5', 'descricao'=>'Descrição 5', 'detalhe'=>'Detalhe 5', 'imagem'=>'http://materializecss.com/images/office.jpg', 'link'=>'#link'],
  ['titulo'=>'Titulo 6', 'descricao'=>'Descrição 6', 'detalhe'=>'Detalhe 6', 'imagem'=>'http://materializecss.com/images/office.jpg', 'link'=>'#link'],
  ['titulo'=>'Titulo 7', 'descricao'=>'Descrição 7', 'detalhe'=>'Detalhe 7', 'imagem'=>'http://materializecss.com/images/office.jpg', 'link'=>'#link']
];

if(isset($_GET['menu'])){
  echo json_encode($menu);exit;
}

if(isset($_GET['dados'])){
  echo json_encode($dados);exit;
}

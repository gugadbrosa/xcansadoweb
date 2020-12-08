import React from 'react';
import Topo from './Componentes/Topo'
import Menu from './Componentes/Menu'
import Lanches from './Componentes/Lanches'

function Principal(props) {

	// Categorias a serem apresentadas no menu
	const categorias = [
		{'url': 'promocoes', 'nome': 'Promoções'}, 
		{'url': 'menu', 'nome': 'Menu'},
		{'url': 'lojas', 'nome': 'Nossas Lojas'},
	];

	// define a variável categoria ativa
	let categoriaAtiva;
	
	// checa se a categoria da url é diferente de undefined, 
	// se for a define como a categoria ativa
	if(typeof props.match.params.categoria !== 'undefined'){
		categoriaAtiva = props.match.params.categoria;
	} else {
		categoriaAtiva = 'promocoes';
	}

	return (
		<div class="container">
			<Topo titulo={'X Cansado'} logo={'/assets/logocansado.png'} />
			<Menu categorias={categorias} categoriaAtiva={categoriaAtiva}></Menu>
			<Lanches categoriaAtiva={categoriaAtiva}></Lanches>
		</div>
	);
}

export default Principal;

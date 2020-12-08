import React from 'react';

function CardLanches(props) {
	let promo = props.destaque;
	return (
		<div class="accordion" id={"accordionExample" + props.id }>
			<div class="card">
				<div class="card-header" id="headingOne">
					<h5 class="mb-0">
						<button class="btn btn-link" type="button" data-toggle="collapse" data-target={"#collapseOne" + props.id} aria-expanded="false" aria-controls="collapseOne">
							<img className="imagem-card" src={props.imagem} alt="" />
						    <h2>{promo ? <img class="promotion" src="/assets/promotion.jpg" alt=""></img> : "" }</h2> 
							<h2>{props.nome}</h2>
							<p>{props.destaque}</p>
        				</button>
					</h5>
				</div>

				<div id={"collapseOne" + props.id} class="collapse" aria-labelledby="headingOne" data-parent={"#accordionExample" + props.id}>
					<div class="card-body">
						<p>Preço: R$ {props.preco}</p>
						<p>Cupom: {props.cupom}</p>
						<p>Loja com a promo: {props.loja}</p>
						<p>Descrição: {props.descricao}</p>
						<p>Categoria: {props.categoria}</p>
     			 	</div>
				</div>
			</div>

		</div>

		// <div className="col-md-6">
		// 	<div className="card flex-md-row mb-4 shadow-sm h-md-200">
		// 		<div className="card-body d-flex flex-column align-items-start">
		// 			<img className="imagem-card" src={props.imagem} alt="" />
		// 			<small>{props.nome}</small>
		// 		</div>
		// 	</div>
		// </div>
	);
}

export default CardLanches;
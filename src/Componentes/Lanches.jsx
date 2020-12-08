import React, { Component } from 'react';
import axios from 'axios';
import CardLanches from './CardLanches';

class Lanches extends Component {
    constructor(){
		super();
		
		// endereço da API
		this.urlAPI = 'http://localhost:8000/api/';
        this.state = {
            promocoes: []
        }
        this.style = {
            corNomeOrigemproduto: "#8DB5E9"
        }
    }

	// método principal que faz a chamada na API e define o estado das notícias
    definirLanches(){
        let url = this.urlAPI + 'promocoes/'
        console.log(url)
        axios.get(url, {auth: {username: 'admin', password: 'testeteste'}})
		.then(response => {
			this.setState({ promocoes: response.data });
		})
		.catch(error => {
			console.log(error)
		})
    }	
	// método chamado quando o componente termina de atualizar (clique no link)
    componentDidUpdate(prevProps) {
        if(prevProps.categoriaAtiva !== this.props.categoriaAtiva){
            this.definirLanches();
        }
	}
	// método chamado no carregamento da página (refresh)
    componentDidMount() {
        this.definirLanches();
    }
    render() {
        if(this.state.promocoes.length){
            console.log(this.state.promocoes)
			return (<div className="row mb-2">
                {this.state.promocoes.sort((a,b) => b.destaque - a.destaque).map((promocao, i) => (
                    <CardLanches 
                        key={i} 
                        id={promocao.id}
                        preco={promocao.preco}
                        cupom={promocao.cupom}
                        destaque={promocao.destaque} 
                        nome={promocao.produto.nome} 
                        imagem={promocao.produto.imagem} 
                        descricao={promocao.produto.descricao} 
                        categoria={promocao.produto.categoria}
                        loja={promocao.loja.nome}
                        cidade={promocao.loja.cidade}
                        uf={promocao.loja.uf}
                        email={promocao.loja.email}>
                    </CardLanches>                   
				))}
                

				</div>);
        }else{  
            return (<div>Não há Lanches nessa categoria.</div>);
        }
    }

}

export default Lanches;
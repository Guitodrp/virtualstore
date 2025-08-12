import React from 'react'

export default function About() {
    return (
        <div className='page-inner-content'>

            <div className='section-title'>
                <h3>
                    Sobre o TechnoStore!
                </h3>
                <div className='underline'>

                </div>

                <div className='item-about'>

                    <img src='/images/fachada.png' alt='fachada'></img>

                    <p>
                        Fundado em 2003, o TechnoStore! foi um dos pioneiros no comércio eletrônico brasileiro e hoje é o maior e-commerce de Tecnologia e Games na América Latina. Desde sua criação, a empresa é formada por histórias e conquistas de um time obcecado por agilidade, qualidade de atendimento, velocidade de entrega e respeito pelo consumidor.
                    </p>

                    <p> Com preços imbatíveis e mais de 20 mil produtos em seu catálogo, o TechnoStore! está sempre à frente e traz em primeira mão os melhores lançamentos do mercado mundial. São mais de 8 milhões de pessoas atendidas e entregas realizadas em todas as regiões do país, totalizando mais de 5.000 cidades.
                    </p>

                    <p> O e-commerce é um dos sites mais acessados do país e lidera o ranking das lojas virtuais mais recomendadas pelos consumidores brasileiros, no segmento de tecnologia e games*, com os principais índices de avaliação e selos de qualidade da internet.
                    </p>

                    <p> Além do e-commerce, o TechnoStore! é um grande incentivador dos esportes eletrônicos, sendo responsável pela criação de uma das maiores equipes de League of Legends do Brasil, a TechnoStore! Esports, tetracampeã nacional e a primeira representante brasileira no Campeonato Mundial.
                    </p>

                    <p>
                        <span>*Referência: Comparativo CX Report, com 34 grandes lojas virtuais do Brasil, realizado por IBOPE CONECTA e IBOPE DTM.</span>
                    </p>

                    <h3><span>Desde 2003, o maior E-commerce de Tecnologia e Games da América Latina</span></h3>
                </div>
                <div className='painel-about'>

                    <div className='item-painel'>
                        <img src="/images/icones/icone-clientes.png" alt='clientes' />
                        <p>+ 8 milhões</p>
                        <p>de Clientes</p>
                    </div>

                    <div className='item-painel'>
                        <img src="/images/icones/icone-cidades.png" alt='cidades' />
                        <p>+ 5.000</p>
                        <p>Cidades Atendidas</p>
                    </div>

                    <div className='item-painel'>
                        <img src="/images/icones/icone-colaboradores.png" alt='colaboradores' />
                        <p>+ 1.000</p>
                        <p>Colaboradores</p>
                    </div>

                    <div className='item-painel'>
                        <img src="/images/icones/icone-pedidos.png" alt='pedidos' />
                        <p>+ 15 milhões</p>
                        <p>de Pedidos</p>
                    </div>

                </div>

            </div>
        </div >
    )
}

import React, { PropTypes } from 'react';

class PreContent extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 content-home hide">
            <div id="fullpage">
                <div className="section start">
                    <div className="title" data-toggle="popover" data-placement="top" data-content="Nova mensagem">
                        <div className="popover">
                            <div className="arrow"></div>
                            <div className="popover-content">Nova mensagem</div>
                        </div>
                        Oi, Washington
                    </div>
                    <div className="content">
                        <p>O seu novo serviço ainda está sendo cadastrado na Minha Oi.</p>

                        <p>Em breve, você terá acesso online a todos os serviços e facilidades da Minha Oi. Aproveite enquanto isso pra tirar suas dúvidas e descubra como a Oi pode te deixar mais conectado.</p>

                    </div>
                    <div className="footer">
                        <button className="btn_start">Receber código no celular</button>
                        <div className="link_after">
                            <a href="#">Quero fazer depois</a>
                        </div>
                    </div>
                </div>

                <div className="section telephone">
                    <div className="title">Fixo</div>
                    <div className="content">
                        <p>Contratou um novo Fixo da Oi?  Então agora é só aguardar a sua instalação.</p>

                        <p>Siga o passo a passo da sua visita técnica pra começar a falar ilimitado com qualquer Oi.</p>
                    </div>
                    <button className="btn_installation btn_hover_dash">Acompanhe a Instalação</button>
                </div>

                <div className="section wifi">
                    <div className="wrap">
                        <div className="title">Oi WiFi</div>
                        <div className="content">
                            <p>Busque o hotspot mais perto de você pra se conectar em alta velocidade gratuitamente, sem consumir sua franquia de internet móvel ou celular.</p>

                            <p>São mais de 2 milhões de pontos de acesso em todo o Brasil, entre aeroportos, hotéis, restaurantes, shoppings, cafés e outros locais. É só se cadastrar e aproveitar.</p>
                        </div>
                        <button className="btn_connection btn_hover_dash">Conectar-se</button>
                        <div className="footer">
                            <p>Pra acessar do seu tablet ou smartphone, você pode também baixar o aplicativo mobile nos sistemas Android e iOS.</p>
                        </div>
                    </div>
                </div>

                <div className="section oiplay">
                    <div className="title">Oi Play</div>
                    <div className="content">
                        <p>Clientes TV HD podem assistir ao melhor do nosso conteúdo no Oi Play.</p>

                        <p className="space-bottom">Quando e onde quiser, direto do seu computador, tablet ou smartphone, podendo acessar de mais de um dispositivo ao mesmo tempo. Divirta-se!</p>
                    </div>
                    <button className="btn_oiplay btn_hover_dash">Conheça o Oi Play</button>
                    <div className="footer">
                        <p>Entre com seu login da Minha Oi.</p>
                    </div>

                </div>

                <div className="section recharge">
                    <div className="title">Recarga</div>
                    <div className="content">
                        <p>Recarregue qualquer celular Pré, Controle ou Oi Galera em instantes. Os valores são a partir de R$ 12 e você pode ganhar até 1 GB pra navegar à vontade.</p>

                        <p className="space-bottom">É rápido, fácil e seguro.<br></br>
                        Aproveite também para programar próximas recargas.</p>
                    </div>
                    <button className="btn_recharge btn_hover_dash">Recarregue agora</button>
                    <div className="footer">
                        <p>Pague com cartão de crédito Visa,<br></br>
                            Mastercard, Hipercard, Elo ou Diners.</p>
                    </div>

                </div>


                <div className="section help">
                    <div className="wrap">

                        <div className="title">Dúvidas frequentes</div>

                        <div className="content">
                            <ol type="1">

                                <div className="item" data-toggle="collapse" data-target="#item1">
                                    <div className="align-items">
                                        <li className="arrow_item_help custom-li help_item_center collapsed">
                                            <div className="text_container_help">O que é a Minha Oi?</div>
                                        </li>
                                        <div className="arrow_item_help help_item_center img_container_help">
                                        </div>
                                    </div>

                                    <div id="item1" className="collapse">
                                        <p>É a área de atendimento online da Oi. Nela, você consegue visualizar os seus produtos e se relacionar com a Oi pela internet de forma simples e fácil.</p>
                                        <p>Na Minha Oi, você acessa seu saldo, retira a 2ª via da conta, aproveita para se cadastrar na Conta Online ou no Débito Automático e encontrar todos os serviços da Oi em um só lugar.</p>
                                    </div>
                                </div>

                                <div className="item" data-toggle="collapse" data-target="#item2">
                                    <div className="align-items">
                                        <li className="arrow_item_help custom-li help_item_center collapsed">
                                            <div className="text_container_help">Quais são os principais serviços da Minha Oi?</div>
                                        </li>

                                        <div className="arrow_item_help help_item_center img_container_help">
                                        </div>
                                    </div>

                                    <div id="item2" className="collapse">
                                        <ul>
                                            <li>Detalhamento de contas</li>
                                            <li>2ª via de conta</li>
                                            <li>Consulta de saldo</li>
                                            <li>Código de barras para pagamento</li>
                                            <li>Agenda eletrônica</li>
                                            <li>Ativação e desativação de serviços</li>
                                            <li>Atualização de dados cadastrais</li>
                                            <li>Solicitação de Conta Online</li>
                                            <li>Bloqueio por perda ou roubo</li>
                                        </ul>

                                        <p>Além desses, a Minha Oi conta muitos outros serviços. Aproveite todos e agilize sua vida online.</p>
                                    </div>
                                </div>

                                <div className="item" data-toggle="collapse" data-target="#item3">
                                    <div className="align-items">
                                        <li className="arrow_item_help custom-li help_item_center collapsed">
                                            <div className="text_container_help">Posso acessar a Minha Oi através do celular?</div>
                                        </li>

                                        <div className="arrow_item_help help_item_center img_container_help">
                                        </div>
                                    </div>
                                    <div id="item3" className="collapse">
                                        <p>Sim! Se você possui um smartphone ou tablet com sistema operacional Android ou iOS, pode baixar gratuitamente o aplicativo Minha Oi na <a href="https://play.google.com/store/apps/details?id=br.com.mobicare.minhaoi&hl=en">Google Play</a> ou na <a href="https://itunes.apple.com/br/app/minha-oi/id564319331">App Store</a> .</p>
                                        <p>Você também pode acessar do seu celular normalmente pelo <a href="http://www.oi.com.br">www.oi.com.br</a>.</p>
                                    </div>
                                </div>

                                <div className="item" data-toggle="collapse" data-target="#item4">
                                    <div className="align-items">
                                        <li className="arrow_item_help custom-li help_item_center collapsed">
                                            <div className="text_container_help">Consigo usar a Minha Oi em qualquer navegador?</div>
                                        </li>

                                        <div className="arrow_item_help help_item_center img_container_help">
                                        </div>
                                    </div>
                                    <div id="item4" className="collapse">
                                        <p>Sim, a Minha Oi funciona em qualquer navegador.</p>
                                    </div>
                                </div>

                                <div className="item" data-toggle="collapse" data-target="#item5">
                                    <div className="align-items">
                                        <li className="arrow_item_help custom-li help_item_center collapsed">
                                            <div className="text_container_help">O que devo fazer se eu esquecer a minha senha?</div>
                                        </li>

                                        <div className="arrow_item_help help_item_center img_container_help">
                                        </div>
                                    </div>
                                    <div id="item5" className="collapse">
                                        <p>Pra recuperar sua senha, acesse a <a href="http://minha.oi.com.br">Minha Oi</a> e clique em “Esqueci minha senha”, abaixo dos campos de usuário e senha. Confirme seus dados e clique em “Continuar”. Em seguida, o sistema vai disparar uma mensagem de confirmação pro seu e-mail. Acesse seu e-mail e siga o passo a passo.</p>
                                    </div>
                                </div>

                                <div className="item" data-toggle="collapse" data-target="#item6">
                                    <div className="align-items">
                                        <li className="arrow_item_help custom-li help_item_center collapsed">
                                            <div className="text_container_help">O que devo fazer se eu esquecer o meu nome de usuário?</div>
                                        </li>

                                        <div className="arrow_item_help help_item_center img_container_help">
                                        </div>
                                    </div>
                                    <div id="item6" className="collapse">
                                        <p>Pra recuperar seus dados, acesse a <a href="http://minha.oi.com.br">Minha Oi</a> e clique em “Esqueci Minha Senha”, abaixo dos campos de usuário e senha. Você vai precisar confirmar alguns dados e clicar em “Continuar”, até que seu usuário apareça no campo “Meus Dados”. Em seguida, o sistema vai disparar uma mensagem de confirmação de usuário pro seu e-mail, pedindo pra você criar uma nova senha. Acesse seu e-mail e siga o passo a passo.</p>
                                    </div>
                                </div>

                                <div className="item" data-toggle="collapse" data-target="#item7">
                                    <div className="align-items">
                                        <li className="arrow_item_help custom-li help_item_center collapsed">
                                            <div className="text_container_help">Adquiri um novo produto Oi, como o incluo na Minha Oi?</div>
                                        </li>

                                        <div className="arrow_item_help help_item_center img_container_help">
                                        </div>
                                    </div>
                                    <div id="item7" className="collapse">
                                        <p>Quando você adquire um novo produto Oi, após sua ativação, ele é incluído junto aos seus outros produtos na Minha Oi. Mas lembre-se, você deve ser o titular de ambos.</p>
                                    </div>
                                </div>

                                <div className="item" data-toggle="collapse" data-target="#item8">
                                    <div className="align-items">
                                        <li className="arrow_item_help custom-li help_item_center collapsed">
                                            <div className="text_container_help">Como falo com a Oi?</div>
                                        </li>

                                        <div className="arrow_item_help help_item_center img_container_help">
                                        </div>
                                    </div>
                                    <div id="item8" className="collapse">
                                        <p>Consulte as diversas formas de contato por meio da Central de Atendimento. (<a href="http://www.oi.com.br/minha-oi/#!fale-com-a-oi-31">link</a>)</p>
                                    </div>
                                </div>

                                <div className="item" data-toggle="collapse" data-target="#item9">
                                    <div className="align-items">
                                        <li className="arrow_item_help custom-li help_item_center collapsed">
                                            <div className="text_container_help">Como encontro o endereço de uma Loja Oi?</div>
                                        </li>

                                        <div className="arrow_item_help help_item_center img_container_help">
                                        </div>
                                    </div>
                                    <div id="item9" className="collapse">
                                        <p>Encontre a Loja Oi mais próxima de você. (<a href="http://www.oi.com.br/oi/oi-pra-voce/atendimento/fale-com-a-oi/lojas-fisicas-da-oi">link</a>)</p>
                                    </div>
                                </div>

                                <div className="item" data-toggle="collapse" data-target="#item10">
                                    <div className="align-items">
                                        <li className="arrow_item_help custom-li help_item_center collapsed">
                                            <div className="text_container_help">Pessoa Jurídica também pode se cadastrar na Minha Oi?</div>
                                        </li>

                                        <div className="arrow_item_help help_item_center img_container_help">
                                        </div>
                                    </div>
                                    <div id="item10" className="collapse">
                                        <p>Não, apenas pessoa física pode se cadastrar.</p>
                                    </div>
                                </div>
                            </ol>
                        </div>


                        <div className="footer">
                            Não encontrou a sua dúvida? Acesse a página de <span>FAQ</span> da Minha Oi.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default PreContent;
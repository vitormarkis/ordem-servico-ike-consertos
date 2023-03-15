import logo from "../../../public/logo-ike-consertos-3.png"

import {
  Cabecalho,
  CellphoneInfo,
  CellphoneProblem,
  CondicoesDeServico,
  Container,
  Contato,
  CustomerDetails,
  InstagramIcon,
  LocationIcon,
  Logo,
  OS,
  Type,
  WhatsappIcon,
} from "./styles"

function Layout() {
  return (
    <Container>
      <OS>
        <Cabecalho>
          <Logo>
            <div>
              <img src={logo} alt="" />
            </div>
          </Logo>
          <Contato>
            <ul>
              <li>
                <i>
                  <WhatsappIcon />
                </i>
                <span>51 98888-8888</span>
              </li>
              <li>
                <i>
                  <InstagramIcon />
                </i>
                <span>@ike.cell</span>
              </li>
              <li>
                <i>
                  <LocationIcon />
                </i>
                <span>Rua Potiguara 732, Canudos/NH</span>
              </li>
            </ul>
          </Contato>
        </Cabecalho>
        <Type>
          <div>
            <p>
              <strong>Data entrega: </strong>{" "}
              <div>
                <Underline />/<Underline />/
                <Underline width={40} />
              </div>
            </p>
            <p>
              <strong>Data retirada: </strong>{" "}
              <div>
                <Underline />/<Underline />/
                <Underline width={40} />
              </div>
            </p>
          </div>
          <div>
            <ul>
              <li>
                <i />
                <span>Pedido</span>
              </li>
              <li>
                <i />
                <span>Orçamento</span>
              </li>
            </ul>
          </div>
          <div>
            <p>
              <span>Nº:</span>
              <strong />
            </p>
          </div>
        </Type>
        <CustomerDetails>
          <div>
            <p style={{ flex: "5 0 0" }}>
              <span>Nome:</span>
              <strong style={{ marginRight: 6 }} />
            </p>
            <p style={{ flex: "2 0 0" }}>
              <span>Telefone:</span>
              <strong />
            </p>
          </div>
          <p>
            <span>Endereço:</span>
            <strong />
          </p>
          <div>
            <p style={{ flex: "2 0 0" }}>
              <span>Cidade:</span>
              <strong style={{ marginRight: 6 }} />
            </p>
            <p style={{ flex: "1 0 0" }}>
              <span>CPF/CPNJ:</span>
              <strong />
            </p>
          </div>
          <p>
            <span>E-mail:</span>
            <strong />
          </p>
        </CustomerDetails>
        <CellphoneProblem>
          <p>
            <span>Defeito do dispositivo:</span>
            <strong />
          </p>
          <strong />
          <strong />
        </CellphoneProblem>
        <CellphoneInfo>
          <div>
            <ul>
              <li>
                <i />
                <span>Possui nota fiscal</span>
              </li>
              <li>
                <i />
                <span>Possui garantia</span>
              </li>
            </ul>
          </div>
          <div>
            <p>
              <span>Senha:</span>
              <strong />
            </p>
            <p>
              <span>Modelo:</span>
              <strong />
            </p>
          </div>
        </CellphoneInfo>
        {/* <Laudo></Laudo> */}
        <CondicoesDeServico>
          <ol>
            <li>Garantimos esse produto pelo período de ___ dias.</li>
            <li>
              A garantia dos produtos é válida SOMENTE contra defeitos de
              fabricação.
            </li>
            <li>
              A garantia não cobre defeitos ocasionados por mau uso, má
              instalação, quedas ou danos causados por forças naturais.
            </li>
            <li>
              Os produtos defeituosos deverão ser devolvidos em embalagens
              originais, acompanhados de todos os acessórios.
            </li>
            <li>
              Todos nossos produtos são testados antecipadamente para evitar
              maiores problemas.
            </li>
          </ol>
        </CondicoesDeServico>
      </OS>
    </Container>
  )
}

function Underline({ width = 20 }) {
  return (
    <div
      style={{
        height: 1,
        backgroundColor: "#000",
        width,
        marginTop: "auto",
        transform: "translateY(-2px)",
        marginRight: 3,
      }}
    />
  )
}

export default Layout

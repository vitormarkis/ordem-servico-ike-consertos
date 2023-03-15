import logo from "../../../public/logo-ike-consertos-3.png"

import {
  Cabecalho,
  CellphoneDetails,
  CondicoesDeServico,
  Container,
  Contato,
  CustomerDetails,
  InstagramIcon,
  Laudo,
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
        <CustomerDetails></CustomerDetails>
        <CellphoneDetails></CellphoneDetails>
        <Laudo></Laudo>
        <CondicoesDeServico></CondicoesDeServico>
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

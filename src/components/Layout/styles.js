import { Instagram, Whatsapp } from "@styled-icons/boxicons-logos"
import { Location } from "@styled-icons/ionicons-outline"
import styled, { css } from "styled-components"

const iconCSS = css`
  width: 24px;
  height: 24px;
  color: #282828;
`

export const WhatsappIcon = styled(Whatsapp)`
  ${iconCSS}
`
export const InstagramIcon = styled(Instagram)`
  ${iconCSS}
`
export const LocationIcon = styled(Location)`
  ${iconCSS}
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 36px;
`

export const OS = styled.div`
  border: 1px solid #000;
  padding: 24px;
  font-size: 12px;
`

export const Cabecalho = styled.div`
  display: flex;
`
export const Logo = styled.div`
  flex: 5 0 0;
  display: flex;
  justify-content: center;

  > div {
    width: 90px;
    height: 90px;
    overflow: hidden;
    border-radius: 999px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`
export const Contato = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2 0 0;

  ul {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    li {
      white-space: nowrap;
      display: flex;
      align-items: center;
      gap: 6px;
    }
  }
`

export const Type = styled.div`
  display: flex;
  margin-top: 32px;
  justify-content: space-between;

  > div:first-of-type {
    display: flex;
    p {
      &:not(:last-of-type) {
        margin-right: 12px;
      }
      display: flex;
      strong {
        margin-right: 6px;
        white-space: nowrap;
      }

      div {
        display: flex;
      }
    }
  }

  > div:nth-of-type(2) {
    display: flex;

    ul {
      display: flex;
      
      li {
        &:not(:last-of-type) {
          margin-right: 12px;
        }

        display: flex;
        align-items: center;
        gap: 2px;

        i {
          display: block;
          width: 16px;
          height: 16px;
          border: 1px solid #000;
        }

        span {
          display: block;
          margin-left: 3px;
        }
      }
    }
  }

  >div:nth-of-type(3) {
    display: flex;
    p {
      display: flex;
      span {
        margin-right: 6px;
      }
    }
  }
`

export const CustomerDetails = styled.div``

export const CellphoneDetails = styled.div``

export const Laudo = styled.div``

export const CondicoesDeServico = styled.div``

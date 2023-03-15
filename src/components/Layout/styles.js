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
  font-size: 12px;
`

export const Cabecalho = styled.div`
  padding: 24px;
  display: flex;

  border-bottom: 1px solid #000;
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
  border-bottom: 1px solid #000;
  padding: 24px;
  display: flex;
  justify-content: space-between;

  > div:first-of-type {
    display: flex;
    flex-direction: column;
    gap: 12px;

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

  > div:nth-of-type(3) {
    display: flex;
    align-items: center;
    p {
      height: 16px;
      display: flex;
      span {
        display: block;
      }

      strong {
        display: block;
        width: 60px;
        height: 100%;
        border-bottom: 1px solid #000;
      }
    }
  }
`

export const CustomerDetails = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-bottom: 1px solid #000;

  > div {
    display: flex;
  }

  p {
    display: flex;

    span {
      display: block;
      white-space: nowrap;
      margin-right: 3px;
    }

    strong {
      white-space: nowrap;
      display: block;
      width: 100%;
      border-bottom: 1px solid #000;
    }
  }
`

export const CellphoneProblem = styled.div`
  border-bottom: 1px solid #000;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  p {
    display: flex;
    span {
      display: block;
      margin-right: 6px;
      font-weight: bold;
      white-space: nowrap;
    }
  }

  strong {
    display: inline-block;
    width: 100%;
    border-bottom: 1px solid #000;
  }
`

export const CellphoneInfo = styled.div`
  display: flex;
  border-bottom: 1px solid #000;

  > div:nth-of-type(1) {
    padding: 24px;
    flex: 0 0 auto;
    display: flex;
    border-right: 1px solid #000;

    ul {
      display: flex;
      flex-direction: column;
      gap: 12px;

      li {
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

  > div:nth-of-type(2) {
    padding: 24px;
    flex: 1 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      display: flex;

      span {
        margin-right: 12px;
      }

      strong {
        width: 100%;
        white-space: nowrap;
        border-bottom: 1px solid #000;
      }
    }
  }
`

export const Laudo = styled.div``

export const CondicoesDeServico = styled.div`
  padding: 24px;
  ol {
    display: flex;
    flex-direction: column;
    gap: 6px;
    li {
      font-size: 10px;
    }
  }
`

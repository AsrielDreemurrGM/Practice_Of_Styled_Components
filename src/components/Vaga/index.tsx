import { ItemDaVaga, TituloDaVaga, LinkDaVaga } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <ItemDaVaga>
    <TituloDaVaga>{props.titulo}</TituloDaVaga>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <LinkDaVaga href="#">Ver detalhes e candidatar-se</LinkDaVaga>
  </ItemDaVaga>
)

export default Vaga

import { BoxInfo } from './boxInfo'

export function WelcomeChat() {
  return (
    <div className="w-full mt-[-16px] py-4">
      <BoxInfo.Root>
        <BoxInfo.Text>Faça qualquer pergunta</BoxInfo.Text>
        <BoxInfo.Text>(O que você pode fazer?)</BoxInfo.Text>
      </BoxInfo.Root>

      <BoxInfo.Root>
        <BoxInfo.Text>Posso gerar qualquer texto para você</BoxInfo.Text>
        <BoxInfo.Text>(artigos, histórias, redação)</BoxInfo.Text>
      </BoxInfo.Root>

      <BoxInfo.Root>
        <BoxInfo.Text>Converse com uma Inteligência Artificial</BoxInfo.Text>
        <BoxInfo.Text>
          (Posso conversar com você em linguagem humana)
        </BoxInfo.Text>
      </BoxInfo.Root>
    </div>
  )
}

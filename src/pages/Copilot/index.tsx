import { Template } from "../../components/Template"
import logoCopilot from '../../assets/Copilot/Logo-Copilot-1.png'
import videoCopilot from '../../assets/Copilot/Introducing Microsoft 365 Copilot .mp4'

export const Copilot: React.FC = ()=>{

    return(

        <Template 
            about={"Microsoft Copilot, lançado como Bing Chat em 7 de fevereiro de 2023, é um assistente de chatbot que representa um marco na evolução da inteligência artificial (IA) da Microsoft. Durante o ano de 2023, a Microsoft começou a consolidar a marca Copilot em seus diversos produtos de chatbot. Alimentado pelo modelo Microsoft Prometheus, uma extensão do modelo de linguagem GPT-4 da OpenAI, o Copilot foi aprimorado através de técnicas de aprendizado supervisionado e de reforço. Este assistente multifuncional não só serve como uma ferramenta de conversação, mas também é capaz de gerar uma variedade de conteúdos, desde poemas e músicas até histórias e relatórios. Além disso, pode fornecer ao usuário informações e compreensões sobre páginas da web abertas no Microsoft Edge e usar seu Gerador de Imagem para criar logotipos, desenhos, obras de arte e outras imagens a partir de um prompt textual."} 
            name={"Microsoft Copilot"} 
            link={"https://www.microsoft.com/pt-br/microsoft-copilot/learn?form=MA13FV"} 
            img={logoCopilot} 
            url={videoCopilot}           
        />
    )
}
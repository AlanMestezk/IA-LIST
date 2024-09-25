
import logoGemini from '../../assets/Gemini/imagem_2024-09-24_142557874-removebg-preview.png'
import videoGemini from '../../assets/Gemini/Google – Welcome to the Gemini era.mp4'
import { Template } from '../../components/Template'

export const Gemini: React.FC = ()=>{

    return(
        <Template 
            about={'Gemini, anteriormente conhecido como Bard, é um chatbot desenvolvido pelo Google, baseado na família de modelos de linguagem LaMDA. Foi criado como uma resposta direta ao ChatGPT da OpenAI, e foi lançado em uma capacidade limitada em março de 2023, sendo substituído por uma versão mais avançada em fevereiro de 2024, chamada de Gemini 1.5'} 
            name={'Google Gemini'} 
            link={'https://gemini.google.com/app?hl=pt-BR'} 
            img={logoGemini}       
            url={videoGemini}     
        />
    )
}
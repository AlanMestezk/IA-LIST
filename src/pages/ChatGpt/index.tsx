import { Template } from "../../components/Template"
import imgGpt from '../../assets/ChatGpt/chatGPT.png'
import videoChatGpt from '../../assets/ChatGpt/Start using ChatGPT Instantly.mp4'

export const ChatGpt: React.FC = ()=>{

    return(
        <Template 
            about={"ChatGPT (do inglês: Chat Generative Pre-trained Transformer) é um chatbot desenvolvido pela OpenAI e lançado em 30 de novembro de 2022. O nome 'ChatGPT' combina 'Chat', referindo-se à sua funcionalidade de chatbot, e 'GPT', que significa Generative Pre-trained Transformer (Transformador Pré-treinado Generativo, em tradução livre), um tipo de modelo de linguagem grande (Large Language Model, LLM, na sigla em inglês). Com base em um LLM, ele usa como contexto prompts e respostas sucessivas para prever as palavras que seriam mais adequadas de acordo com os ideias da empresa, para compor a nova resposta; o algoritmo para essa previsão resulta do seu treinamento. Assim, o ChatGPT também permite que utilizadores refinem e direcionem uma conversa para a duração, formato, estilo, nível de detalhe e linguagem desejados."} 
            name ={"ChatGPT"} 
            link ={"https://openai.com/chatgpt/"} 
            img  ={imgGpt}
            url  ={videoChatGpt}
        />
    )
}
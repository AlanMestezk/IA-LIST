import { Template } from "../../components/Template"
import logoAlexa    from '../../assets/Alexa/alexaAbout.png'
import videoAlexa   from '../../assets/Alexa/All-new Echo Spot (2024 release) _ Amazon Alexa.mp4'

export const Alexa: React.FC = ()=>{

    return(
       <Template 
            about ={"A Amazon Alexa, também conhecida como Alexa, é uma assistente virtual desenvolvida pela Amazon, utilizada pela primeira vez como sistema embarcado nos alto-falantes inteligentes Amazon Echo criados pelo Amazon Lab126. Ela é capaz de interagir com voz, reproduzir música, fazer listas de afazeres, definir alarmes, transmitir podcasts, reproduzir audiolivros e fornecer informações sobre o tempo, trânsito, esportes e outras informações em tempo real, como notícias, além de controlar sistemas e aparelhos inteligentes e conectados. O software também está disponível para aparelhos celulares e computadores. Os usuários são capazes de ampliar as capacidades do Alexa instalando 'habilidades'."} 
            name  ={"Amazon Alexa"} 
            link  ={"https://www.amazon.com.br/b?ie=UTF8&node=19949683011"} 
            img   ={logoAlexa}    
            url   ={videoAlexa}    
       />
    )
}
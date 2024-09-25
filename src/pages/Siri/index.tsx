
import logoSiri from '../../assets/Siri/SiriApp.png'
import videoSiri from '../../assets/Siri/Apple Intelligence in 5 minutes.mp4'
import { Template } from '../../components/Template'

export const Siri: React.FC = ()=>{

    return(
        <Template 
            about={'Siri é uma assistente virtual inteligente para iOS, iPadOS, macOS, watchOS e tvOS, disponível para iPhone, iPad, iPod Touch, Apple Watch, Apple TV, HomePod, Mac. Sendo exclusivo(a) da Apple e utilizando processamento de linguagem natural para responder perguntas, fazer recomendações e executar ações. O aplicativo é o primeiro produto público por seus fabricantes, que trabalham em aplicações de inteligência artificial. O software se adapta ao usuário com base em suas pesquisas e preferências.'} 
            name={'Apple Siri'} 
            link={'https://www.apple.com/br/siri/'} 
            img={logoSiri}        
            url={videoSiri}
        />
    )
}
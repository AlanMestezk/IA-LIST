import { Template } from "../../components/Template"
import logoBixby    from '../../assets/Bixby/Samsung_Bixby_logo.svg'
import videoBixby   from '../../assets/Bixby/Bixby Official Trailer _ Samsung.mp4'

export const Bixby: React.FC = ()=>{

    return(

        <Template 
            about={"Bixby é uma assistente virtual desenvolvida pela Samsung Electronics. Em 20 de março de 2017, a Samsung anunciou a assistente digital acionada por voz chamada 'Bixby'. A Bixby foi apresentada junto com o Samsung Galaxy S8 e S8+, bem como o Samsung Galaxy Tab A durante o evento Samsung Galaxy Unpacked 2017, que aconteceu em 29 de março de 2017. A Samsung revelou oficialmente a Bixby uma semana antes do lançamento, mas ela só fez sua primeira aparição durante o evento. A Bixby também pode ser baixada em dispositivos Galaxy mais antigos que executam o Android Nougat. A Bixby representa uma grande mudança do S Voice, o aplicativo de assistente de voz da Samsung lançado em 2012 com o Galaxy S III. O S Voice foi posteriormente descontinuado em 1 de junho de 2020."} 
            name={"Samsung Bixby"} 
            link={"https://www.samsung.com/br/apps/bixby/"} 
            img={logoBixby}     
            url={videoBixby}      
        />
    )
}
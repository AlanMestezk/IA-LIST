import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState }    from "react"
import styles from './Detail.module.css'

//component pages details
import { Siri }    from "../../Siri"
import {Alexa}     from '../../Alexa'
import { Bixby }   from "../../Bixby"
import { Gemini }  from "../../Gemini"
import { ChatGpt } from "../../ChatGpt"
import { Copilot } from "../../Copilot"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const componentsMap :{[key: string]: any}={

    'Apple Siri'       : Siri,
    'Amazon Alexa'     : Alexa,
    'Samsung Bixby'    : Bixby,
    'Google Gemini'    : Gemini,
    'ChatGPT OpenAI'   : ChatGpt,
    'Microsoft Copilot': Copilot,
}

export const DetailApp: React.FC = ()=>{

    const [Component, setComponent] = useState<React.FC | null>()

    const {ia} = useParams()
    const navigate = useNavigate()

    useEffect(

        ()=>{

            const getIa = async () =>{
                
                try{

                    if(ia && componentsMap[ia]){

                        setComponent(()=>componentsMap[ia])

                        console.log(`Acessando ${ia}`)

                    }else{
                        
                        throw new Error(`Componente ${ia} não encontrado`)
                    }
                    
                }
                catch(e){

                    console.log(`deu erro ao acessar os detalhes de ${ia}`)
                    console.log(`Error: ${e}`)
                    navigate('*')
                }
            }

            getIa()

        }, [ia, navigate]
    )

    return(
        <main className={styles.container}>

            {
                Component ? (
                    <Component/>

                ):(
                    <p>Carregando...</p>
                )
            }
            
        </main>
    )
}
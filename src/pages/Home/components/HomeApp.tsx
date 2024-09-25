
import styles          from './Home.module.css'
import { useNavigate } from 'react-router-dom'

//icons 
import alexa   from '../../../assets/Alexa/AMZ alexa.png'
import bixby   from '../../../assets/Bixby/Bixby.png'
import chatgpt from '../../../assets/ChatGpt/chatGPT.png'
import copilot from '../../../assets/Copilot/Copilot.png'
import gemini  from '../../../assets/Gemini/Gemini.png'
import siri    from '../../../assets/Siri/Siri.png'



export const HomeApp: React.FC = ()=>{

    const listIa = [
        {id: 1, name: 'Amazon Alexa',      icon: alexa},
        {id: 2, name: 'Samsung Bixby',     icon: bixby},
        {id: 3, name: 'ChatGPT OpenAI',    icon: chatgpt},
        {id: 4, name: 'Microsoft Copilot', icon: copilot},
        {id: 5, name: 'Google Gemini',     icon: gemini},
        {id: 6, name: 'Apple Siri',        icon: siri}
    ]

    const navigate = useNavigate()

    const handleNavigatePage = (name: string)=>{

        navigate(`/detail/${name}`)
    }

    return(

        <main className={styles.container}>

           <section className={styles.mainContent}>

                {
                    listIa.map(

                        (item) => (

                            <div key={item.id} className={styles.card}>

                                <div className={styles.divLogo}>

                                    <img 
                                        src={item.icon} 
                                        alt="logo IA"
                                        className={styles.logoIa} 
                                    />

                                </div>

                                <div className={styles.divText}>

                                    <strong className={styles.title}>{item.name}</strong>

                                    <button className={styles.button} onClick={()=>handleNavigatePage(item.name)}>see more details</button>

                                </div>

                            </div>
                        )
                    )
                }

           </section>

        </main>

    )
}
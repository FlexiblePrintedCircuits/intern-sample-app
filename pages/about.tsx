import type { NextPage } from 'next'
import styles from '../styles/About.module.css'

const About: NextPage = () => {
    return (
        <div>
            <h1 className={styles.aboutH1}>
                Aboutページ
            </h1>
            <p>
                hogehoge
            </p>
        </div>
    )
}

export default About
import styles from '@/styles/tabuleiro.module.css'
import TabuleiroComponente from '@/components/TabuleiroComp'

export default function Tabuleiro(){
    return (
        <div>
            <div className={styles.coluna}>
                <div className={styles.white}></div>
                <div className={styles.black}></div>  
                <div className={styles.white}></div>
                <div className={styles.black}></div>
                <div className={styles.white}></div>
                <div className={styles.black}></div>
                <div className={styles.white}></div>
                <div className={styles.black}></div>           
            </div>
            <div className={styles.coluna}>
                <div className={styles.black}></div>  
                <div className={styles.white}></div>
                <div className={styles.black}></div>
                <div className={styles.white}></div>
                <div className={styles.black}></div>
                <div className={styles.white}></div>
                <div className={styles.black}></div>  
                <div className={styles.white}></div>         
            </div>
            <div className={styles.coluna}>
                <div className={styles.white}></div>
                <div className={styles.black}></div>  
                <div className={styles.white}></div>
                <div className={styles.black}></div>
                <div className={styles.white}></div>
                <div className={styles.black}></div>
                <div className={styles.white}></div>
                <div className={styles.black}></div>           
            </div>
            <div className={styles.coluna}>
                <div className={styles.black}></div>  
                <div className={styles.white}></div>
                <div className={styles.black}></div>
                <div className={styles.white}></div>
                <div className={styles.black}></div>
                <div className={styles.white}></div>
                <div className={styles.black}></div>  
                <div className={styles.white}></div>         
            </div>
            <div className={styles.coluna}>
                <div className={styles.white}></div>
                <div className={styles.black}></div>  
                <div className={styles.white}></div>
                <div className={styles.black}></div>
                <div className={styles.white}></div>
                <div className={styles.black}></div>
                <div className={styles.white}></div>
                <div className={styles.black}></div>           
            </div>
            <div className={styles.coluna}>
                <div className={styles.black}></div>  
                <div className={styles.white}></div>
                <div className={styles.black}></div>
                <div className={styles.white}></div>
                <div className={styles.black}></div>
                <div className={styles.white}></div>
                <div className={styles.black}></div>  
                <div className={styles.white}></div>         
            </div>
            <div className={styles.coluna}>
                <div className={styles.white}></div>
                <div className={styles.black}></div>  
                <div className={styles.white}></div>
                <div className={styles.black}></div>
                <div className={styles.white}></div>
                <div className={styles.black}></div>
                <div className={styles.white}></div>
                <div className={styles.black}></div>           
            </div>
            <div className={styles.coluna}>
                <div className={styles.black}></div>  
                <div className={styles.white}></div>
                <div className={styles.black}></div>
                <div className={styles.white}></div>
                <div className={styles.black}></div>
                <div className={styles.white}></div>
                <div className={styles.black}></div>  
                <div className={styles.white}></div>         
            </div>
        </div>
    )
}


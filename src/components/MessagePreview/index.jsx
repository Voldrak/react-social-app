
import { DateTime } from './../DateTime/index'
import styles from "./MessagePreview.module.scss"

const MessagePreview = (props) => {
    const data = props.data || { 
        text: "lorem ipsum",
        date: new Date(),
        sender: "User"
    }


    return(
        <div className={styles.message}>
            <h5>{data.sender}</h5>
            <p><small>
            <DateTime distance={data.date} /> 

                    </small></p>
            <p>{data.text}</p>
        </div>
    )
};

export { MessagePreview }
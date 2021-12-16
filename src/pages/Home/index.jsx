import { useState, useEffect } from 'react';
import { FriendPreview } from './../../components/FriendPreview/index.jsx';
import { MessagePreview } from './../../components/MessagePreview/index.jsx';
import { Post } from './../../components/Post/index.jsx';
import { http } from "./../../libs/http"
import styles from './Home.module.scss';

const friends = [];

const messages = [];

const posts = []


const Home = () => {
    const [friendsPreview, setFriendsPreview] = useState(friends);
    const [allPosts, setAllPosts] = useState(posts);
    const [messagesPreview, setMessagesPreview] = useState(messages);

    
// Esegui del codice quando il componente è inizializzato
// componentDidMount() --> simile a "COMContentLoaded" ma solo per il componente
    useEffect(() => {
        // fetch("https://edgemony-backend.herokuapp.com/friends?_limit=4")
        //     .then ((response) => response.json())
        //     .then ((data) => setFriendsPreview(data))

        http("/friends?_limit=4").then ((data) => setFriendsPreview(data))
        http("/messages?_limit=4").then ((data) => setMessagesPreview(data))
        http("/posts").then ((data) => setAllPosts(data))

            // Promise.all([
            //     http("/friends?_limit=4"),
            //     http("/messages?_limit=4"),
            //     http("/posts")
            // ]).then((data => console.log(data[0])))
    }, [])

    return(
        <selection className={styles.home}>
            <h3> Benvenuto utente </h3>
            <div className={styles.grid}>
                <aside>
                    {friendsPreview.map((post, index) => (
                        <FriendPreview key={index} data={post} />
                        ))}
                </aside>
                <main>
                {allPosts.map((post, index) => (<Post key={index} data={post} />
                        ))}
                </main>
                <aside>
                    {messagesPreview.map((message, index) => (
                        <MessagePreview key={index} data={message} />))}
                </aside>
            </div>
        </selection>
    )
};

export default Home;
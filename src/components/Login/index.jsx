import { useReducer } from "react";
import Header from "./../Header";
import { Link } from "react-router-dom";
import styles from "./Login.module.scss";

const Login = (props) => {
    const usernameLog = props.username || "User";
    const password = props.password || "******";

    const INIT_STATE = {
        name: "Faisbrut",
        nav: [
          { link: "/", label: "Home" },
          { link: "/messages", label: "Messages" },
          { link: "/friends", label: "Friends" },
        //   { link: "/login", label: "Login"}
        ],
        friendsPreview: [],
      };

    const reducer = (state, action) => {
        switch (action.type) {
          case "change-name":
            return { ...state, name: `Ciao Marco` };
          default:
            return state;
        }
      };


    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    return(
        <div>
            <Header name={state.name} links={state.nav} />
            <form className={styles.formLogin}>
                <label>Username: </label>
                <input type="text" className="usernameLog" />
                
                <label>password: </label>
                <input type="password" />
                {/* <Link to="/login"> */}
                <button type="button" onClick={() => dispatch({ type: "change-name" })}>
                    Login
                </button>
                {/* </Link> */}
            </form>

            
        </div>
    )
};

export default Login;
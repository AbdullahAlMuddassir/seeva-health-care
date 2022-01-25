import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
const initailiazeAuthentication =()=>{
    initializeApp(firebaseConfig);

}
export default initailiazeAuthentication;
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./Footer";



export default function Master(){
    return(
        <>
       <Header/>
        <Outlet/>  {/*it calls the slave component/child components */}
       <Footer/>
        </>
    )
}
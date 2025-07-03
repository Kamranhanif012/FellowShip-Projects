import MenuList from "./menu-list"
import "./style.css"

export default function TreeView({menus =[]}){
    return(
        <div className="sidemenu-container">
            <MenuList 
            list ={menus}/>
        </div>

        
    )
}
import type {App} from "vue"
import chooseArea from "./chooseArea"
import chooseIcon from "./chooseIcon"
import Menu from "./menu"
import Form from "./form"



const components = [
    chooseArea,
    chooseIcon,
    Menu,
    Form
]

export default {
    install(app : App){
        components.forEach(item => {
            app.use(item)
        })
    }
}
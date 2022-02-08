import './ContactForm.css';
import Popup from 'reactjs-popup';
import { useState } from 'react';


export default function ContactForm() {

    const [open, setOpen] = useState(false);

    const checkForm = () => {
        const Sel = (val:any) => document.querySelector(val);

        let names = Sel("#name");
        let secondName = Sel("#secondName");
        let email = Sel("#email");
        let questions = Sel("#questions");
        let policy = Sel("#policy");

        if (names.value.trim() == "") return "1.-"; //check name
        if (secondName.value.trim() == "") return 2; //check second name
        if (email.value.indexOf("@") == -1) return 3;
        if (email.value.lastIndexOf(".") - email.value.length > 3 || email.value.lastIndexOf(".") == -1) return 4; // checking @ and . (not available .cont for example)
        if (questions.value.length > 1000) return 5;
        if (policy.value != "on") return 6; // check policy.
        return true;

   }   	


    const handlerSubmit = (e: any) => {
        e.preventDefault();
        
        if(checkForm() == true){
            setOpen(true);
        }else{
             alert('Error en el campo numero ' + checkForm()) // no me gusta poner alerts
        }
    }

    return <>

        <Popup
            open={open}
            position="bottom right"
            closeOnDocumentClick
            onClose={() => setOpen(false)}
            contentStyle={{backgroundColor:'#76abf1', padding: 10, borderRadius:5, fontFamily: "Montserrat", boxShadow:'0 0 10px 0 #0000ff32', marginRight: 10, marginBottom:10 }}        >
            <span> Su mensaje se ha enviado satisfactoriamente, en breves recibirá un correo.</span>
        </Popup>

        <form id="ContactForm" method="POST" onSubmit={e => handlerSubmit(e)}>
            <input type="text" name="name" id="name" placeholder="Nombre*" required />
            <input type="text" name="secondName" id="secondName" placeholder="Apellidos*" required />
            <input type="tel" name="tel" id="tel" placeholder="Teléfono*" required />
            <input type="email" name="email" id="email" placeholder="E-mail*" required />
            <label htmlFor="questions" id="questionLabel">Déjanos tus preguntas:</label>
            <textarea name="questions" id="questions" cols={30} rows={10}></textarea>
            <div id="checkbox">
                <input type="checkbox" name="policy" id="policy" required />
                <label htmlFor="policy" id="policylabel">He leido y acepto la <a href="#">política de privacidad.</a> </label>
            </div>
            <input type="submit" id="btnForm" value="Enviar" />
        </form>
    </>
}
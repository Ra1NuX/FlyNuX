import './ContactForm.css';

export default function ContactForm() {
    return <>
        <form id="ContactForm" method="POST">
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
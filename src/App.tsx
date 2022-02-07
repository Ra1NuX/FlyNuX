import image from "./imagen-viaje.svg"
import Calendar from './components/Calendar'
import ContactForm from './components/ContactForm'
import "./App.css"

export default function App() {
    return (
        <>
            <div className="banner">
                <section>
                    <h1>¿Viajamos juntos?</h1>
                    {/* los "br" estan para que quede lo más fiel a la imagen de referencia */}
                    <p>Explora todas las posibilidades con nosotros. <br />
                        Tenemos mucho que ofrecerte, desde viajes para <br />
                        estudiantes de prácticas foprmativas en el <br />
                        extranjero</p>
                    <button>{/* not functional */}</button>
                </section>
                <div className="bannerImage">
                    <img src={image} alt="banner fly image" />
                </div>
            </div>

            <div className="dates">
                <section>
                    <h2>CUMPLE TUS SUEÑOS</h2>
                    <h1>Estudios en el extranjero</h1>
                    <p>
                        Te has preguntado ¿como sería hacer tus prácticas formativas o venirte a estudiar al extranjero?. Estás a un paso de hacer tus sueños realidad.
                    </p>
                    <p>
                        Mensualmente realizamos reuniones informativas para responder a cualquiera de tus dudas. Consulta los próximos eventos en el calendario
                    </p>
                </section>
                <Calendar />
            </div>

            <div className="contact">
               
                    <section>
                        <h2>¿TIENES DUDAS?</h2>
                        <h1>¿Contacta con nosotros?</h1>
                        <p>
                            Puedes contactar con nosotros a través del siguiente
                            formulario. Un agente se pondrá en contacto contigo para
                            explicarte todo lo que necesitas saber y resolver todas dudas
                            de manera personalizada.
                        </p>
                    </section>
                <ContactForm />
            </div>
        </>
    );
}
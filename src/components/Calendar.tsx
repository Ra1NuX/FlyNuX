import CalendarR from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import './Calendar.css';


export default function Calendar() {
    let today = new Date();
    let monthDays: number;

    const getRandomNumbers = (min: number, max: number, times: number) => {
        const array: Array<number> = []
        for (let i = 0; i < times; i++) {
            let number = Math.floor(Math.random() * (max - min + 1)) + min
            while (array.includes(number)) {
                number = Math.floor(Math.random() * (max - min + 1)) + min
            }
            console.log(number)
            array.push(number)
        }
        return array
    }

    const getRandomDates = (): Array<Date> => {

        monthDays = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

        let todayDate = today.getDate();
        console.log(todayDate, monthDays)
        const eventDays = getRandomNumbers(todayDate, monthDays, 3)
        const arrayofDates: Array<Date> = []
        for (let i in eventDays) {
            let e = eventDays[i];
            console.log(e)
            arrayofDates.push(new Date(today.getFullYear(), today.getMonth(), e))
        }
        return arrayofDates
    }

    let dates = getRandomDates()
    return <div style={{ display: "flex" }}>
        <CalendarR defaultValue={[new Date(dates[1]), new Date(dates[0])]} onChange={() => null} />
        <div className="textdiv">
            <span className='text Title'>Nuestros Eventos:</span>
            <div className="text">
                {today.getDate() + ". " + today.toLocaleDateString('es-ES', { month: 'long' }) + " " + today.getFullYear()}
            </div>
            <div className="text">
               {dates[0].getDate() + ". " + dates[0].toLocaleDateString('es-ES', { month: 'long' }) + " " + dates[0].getFullYear()}
            </div>
            <div className="text">
                {dates[1].getDate() + ". " + dates[1].toLocaleDateString('es-ES', { month: 'long' }) + " " + dates[1].getFullYear()}
            </div>
        </div>
    </div>
}

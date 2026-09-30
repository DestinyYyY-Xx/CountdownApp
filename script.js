const input = document.getElementById("date-input")

const output = document.getElementById("output")

const One_Second = 1000
const One_Minute = One_Second * 60
const One_Hour = One_Minute * 60
const One_day = One_Hour * 24
const One_Month = One_day * 30
const One_Year = One_Month * 12
const One_Decade = One_Year * 10

function CalculateTime(referenceDate, todayDate) {
    
    let timeLeft = referenceDate - todayDate

    let DecadesLeft = 0
    while (timeLeft > One_Decade) {
        DecadesLeft++
        timeLeft -= One_Decade
    }

    let YearsLeft = 0
    while (timeLeft > One_Year) {
        YearsLeft++
        timeLeft -= One_Year
    }

    let MonthsLeft = 0
    while (timeLeft > One_Month) {
        timeLeft++
        timeLeft -= One_Month
    }

    let DaysLeft = 0
    while (timeLeft > One_day) {
        DaysLeft++
        timeLeft -= One_day
    }

    let HoursLeft = 0
    while (timeLeft > One_Hour) {
        HoursLeft++
        timeLeft -= One_Hour
    }

    let MinutesLeft = 0
    while (timeLeft > One_Minute) {
        MinutesLeft++
        timeLeft -= One_Minute
    }

    let SecondsLeft = 0
    while (timeLeft > One_Second) {
        SecondsLeft++
        timeLeft -= One_Second
    }

    return {
        DecadesLeft,
        YearsLeft,
        MonthsLeft,
        DaysLeft,
        HoursLeft,
        MinutesLeft,
        SecondsLeft
    }
}

function TextBuilder(remainingTime) {
    let result = []

    if(remainingTime.DecadesLeft > 0) {
        result.push(`${remainingTime.DecadesLeft > 1 ? "Decades" : "Decade"}`)
    }

    if(remainingTime.YearsLeft > 0) {
        result.push(`${remainingTime.YearsLeft > 1 ? "Years" : "Year"}`)
    }

    if(remainingTime.MonthsLeft > 0) {
        result.push(`${remainingTime.MonthsLeft > 1 ? "Months" : "Month"}`)
    }

    if(remainingTime.DaysLeft > 0) {
        result.push(`${remainingTime.DaysLeft > 1 ? "Days" : "Day"}`)
    }

    if(remainingTime.HoursLeft > 0) {
        result.push(`${remainingTime.HoursLeft > 1 ? "Hours" : "Hour"}`)
    }

    if(remainingTime.MinutesLeft > 0) {
        result.push(`${remainingTime.MinutesLeft > 1 ? "Minutes" : "Minute"}`)
    }

    if(remainingTime.SecondsLeft > 0) {
        result.push(`${remainingTime.SecondsLeft > 1 ? "Seconds" : "Second"}`)
    }
}

const dataReferencia = new Date("2028", "01", "01").getTime()
const datahoje = new date().getTime()

let resultado = CalculateTime(dataReferencia, datahoje)
console.log(resultado)
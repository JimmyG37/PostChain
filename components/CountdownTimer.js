import { useEffect, useState } from "react"
import { useCountdown } from "../hooks/useCountDown"
import { NumberBox } from "./NumberBox"

export default function CountdownTimer({ deadline }) {
    let [days, hours, minutes, seconds] = useCountdown(deadline)

    useEffect(() => {}, [days, hours, minutes, seconds])

    if (days + hours + minutes + seconds <= 0) {
        days = 0
        hours = 0
        minutes = 0
        seconds = 0
    }

    let daysFlip = false
    let hoursFlip = false
    let minutesFlip = false
    let secondsFlip = true

    if (seconds <= 0 && minutes <= 0 && hours <= 0 && days <= 0) {
        daysFlip = false
        hoursFlip = false
        minutesFlip = false
        secondsFlip = false
    }

    if (seconds == 0) {
        if (minutes != 0) {
            seconds = 59
        }

        secondsFlip = false
        minutesFlip = true
    }
    if (minutes == 0) {
        if (hours != 0) {
            minutes = 59
        }

        minutesFlip = false
        hoursFlip = true
    }

    if (hours == 0) {
        hoursFlip = false
        if (days != 0) {
            daysFlip = true
        }
    }

    if (days < 10) {
        days = "0" + days
    }

    if (hours < 10) {
        hours = "0" + hours
    }

    if (minutes < 10) {
        minutes = "0" + minutes
    }

    if (seconds < 10) {
        seconds = "0" + seconds
    }

    return (
        <div className="relative">
            <div className="grid md:flex items-center px-10 h-10 ">
                <NumberBox num={days} unit="DAYS" flip={daysFlip} />
                <NumberBox num={hours} unit="HOURS" flip={hoursFlip} />
                <NumberBox num={minutes} unit="MINUTES" flip={minutesFlip} />
                <NumberBox num={seconds} unit="SECONDS" flip={secondsFlip} />
            </div>
        </div>
    )
}

// Copyright (c) 2023 ~ 2024 Arthur Kasparian, Individual All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Arthur Kasparian <contact@arthurkasparian.dev>, Month 1 2024. Last modified 28/01/2024, 12:59 am

import {paused} from "../pause.js";
import {checkShotCollisions} from "./shotCollisions.js";

let shotCount = 0
export let shots = []

export function shoot(column) {

    if (column === undefined) {
        console.error('No column defined for shot')
        return
    }

    const main = document.querySelector('main')
    const shotHtml = document.createElement('div')

    shotHtml.classList.add('shot', `column${column}`)
    shotHtml.id = `shot${++shotCount}`
    shotHtml.innerText = '🥕'

    const shot = {
        id: shotHtml.id,
        position: 75,
        column: column,
        killed: false,
        kill: function() {
            if (!this.killed) {
                document.querySelector(`#${this.id}`).remove()
                shots[shots.indexOf(this)] = null
                this.killed = true
            }
        }
    }

    shots.push(shot)

    main.insertBefore(shotHtml, main.firstChild)

    move(shotHtml, shots.length - 1)
}

function move(newShot, i) {
    let topValue = 75
    const shot = shots[i]

    animate()

    function animate() {

        if (topValue < 0) {
            shot.kill()
            return
        }

        // Moves the shot
        if (!paused)
            topValue -= 1
        newShot.style.top = topValue + 'svh'
        shot.position = topValue

        if (!paused && checkShotCollisions(shot)) {
            return
        }

        requestAnimationFrame(animate)
    }
}
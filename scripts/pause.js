// Copyright (c) 2023 ~ 2024 Arthur Kasparian, Individual All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Arthur Kasparian <contact@arthurkasparian.dev>, Month 1 2024. Last modified 28/01/2024, 12:37 am

import {gameLoop} from "./main.js";
import {clearWave, waveCanPause} from "./game/wave.js";
import {rabbit} from "./base/rabbit.js";

export let paused = false
let canPause = true

export let pauseGame = () => paused = true

export function setPauseHandlers() {
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && canPause && waveCanPause) {
            paused = !paused
            canPause = false
            flipText()

            clearWave()

            if (!paused) {
                gameLoop()

                setTimeout(
                    () => rabbit.progress(),
                    2000
                )
            }
        }
    })

    document.addEventListener('keyup', e => {
        if (e.key === 'Escape')
            canPause = true
    })
}

const pauseButton = document.querySelector('#pause-button')

function flipText() {

    if (paused)
        pauseButton.innerText = 'Resume'
    else pauseButton.innerText = 'Pause'

}
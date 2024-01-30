// Copyright (c) 2023 ~ 2024 Arthur Kasparian, Individual All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Arthur Kasparian <contact@arthurkasparian.dev>, Month 1 2024. Last modified 28/01/2024, 12:33 am

import { setPauseHandlers, paused } from "./pause.js";
import {setPlayerHandlers} from "./player/player.js";
import {populateEnemies} from "./enemy/populate.js";
import {spawnEnemies} from "./enemy/spawn.js";
import {newWave} from "./game/wave.js";
import {checkWallCollision, rabbit} from "./base/rabbit.js";
import {onLose} from "./game/lose.js";

export function gameLoop() {

    if (!paused) {
        // console.log('Game loop running')

        setPlayerHandlers()
        checkWallCollision()

        requestAnimationFrame(gameLoop)
    }
}

gameLoop()
setPauseHandlers()

document.addEventListener('keydown', e => {
    if (e.key.toLowerCase() === 'g')
        populateEnemies(6)
    else if (e.key.toLowerCase() === 'h')
        spawnEnemies()
    else if (e.key.toLowerCase() === 't')
        newWave()
    else if (e.key.toLowerCase() === 'y')
        rabbit.progress()
    else if (e.key.toLowerCase() === 'o')
        onLose()
})
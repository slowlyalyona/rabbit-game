// Copyright (c) 2023 ~ 2024 Arthur Kasparian, Individual All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Arthur Kasparian <contact@arthurkasparian.dev>, Month 1 2024. Last modified 28/01/2024, 2:33 am

import {spawned} from "../enemy/spawn.js";
import {kills} from "../game/info.js";
import {waveKills} from "../game/wave.js";

export function checkShotCollisions(shot) {
    const s = document.querySelector(`#${shot.id}`)

    spawned.forEach(enemy => {
        const e = document.querySelector(`#${enemy.id}`)

        if (shot.column === enemy.column && !enemy.killed && e !== null && s !== null) {
            const sPos = Math.floor(Number(s.style.top.slice(0, 2)))
            const ePos = Math.floor(Number(e.style.top.slice(0, 2)))

            if ((sPos === ePos || sPos < ePos - 1) && ePos < 70) {

                if (enemy.info.flight) {
                    const rand = Math.random()
                    console.log(`Flight: ${enemy.info.flight} | RNG: ${rand}`)

                    if (rand < .2) {
                        console.log('Miss!')

                    } else {

                        shot.kill()
                        enemy.kill()
                        return true
                    }

                } else {

                    shot.kill()
                    enemy.kill()
                    return true
                }
            }
        }

    })
}
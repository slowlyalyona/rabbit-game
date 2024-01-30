// Copyright (c) 2023 ~ 2024 Arthur Kasparian, Individual All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Arthur Kasparian <contact@arthurkasparian.dev>, Month 1 2024. Last modified 29/01/2024, 1:11 am

// 2 -> full health, 1 -> half broken, 0 -> broken. Broken walls can't be healed
import {newWave, waveKills} from "../game/wave.js";
import {spawned} from "../enemy/spawn.js";
import {kills} from "../game/info.js";
import {onLose} from "../game/lose.js";
import {enemies} from "../enemy/populate.js";

let walls = Array(5).fill(2)

const r = document.querySelector('#rabbit')

export let rabbit = {
    position: 1,
    savedNum: 0,
    progress: function() {
        this.position++

        // Could easily use % as well, this seems more readable though
        if (this.position === 6) {
            document.querySelector('#rabbits').innerText = `Saved 🐇: ${++this.savedNum}`

            this.position = 1
        }
        
        r.className = `column${this.position}`
        console.log(r.className)

        newWave()
    }
}

export function checkWallCollision() {
    spawned.forEach(enemy => {
        const e = document.querySelector(`#${enemy.id}`)

        if (!enemy.killed && e !== null) {
            const ePos = Math.floor(Number(e.style.top.slice(0, 2)))

            if (ePos === 85) {
                const wallIndex = enemy.column - 1

                if (walls[wallIndex] > 0) {

                    // Rewrote this instead of adding extra complexity
                    document.querySelector(`#${(enemy.id)}`).remove()
                    enemies[enemies.indexOf(enemy)] = null
                    enemy.killed = true
                    waveKills.addKill()

                    walls[wallIndex]--

                    document.querySelector(`#wall${enemy.column}`).style.opacity = `${walls[wallIndex] * .5}`

                    return true

                } else if (enemy.column === rabbit.position)
                    onLose()
            }
        }
    })
}
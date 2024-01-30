// Copyright (c) 2023 ~ 2024 Arthur Kasparian, Individual All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Arthur Kasparian <contact@arthurkasparian.dev>, Month 1 2024. Last modified 28/01/2024, 1:33 am

import {populateEnemies} from "../enemy/populate.js";
import {spawnEnemies} from "../enemy/spawn.js";
import {rabbit} from "../base/rabbit.js";

export let waveCanPause
let timeoutID

export function clearWave() {
    clearTimeout(timeoutID)
}

export let waveKills = {
    number: 0,
    addKill: function() {

        this.number++

        console.log('Killed ' + this.number + ' enemies')

        if (this.number === enemyCount) {
            waveCanPause = true
            
            timeoutID = setTimeout(
                () => {
                    rabbit.progress()
                    waveCanPause = false
                },
                5000
            )
        }
    },
    reset: function() {
        this.number = 0
    }
}

let waveNum = 0
let enemyCount

export function newWave() {
    // waveCanPause = false

    document.querySelector('#round').innerText = `Round: ${++waveNum}`
    generateEnemyCount()

    console.log('New wave started')
    waveKills.reset()
    populateEnemies(enemyCount)
    spawnEnemies()
}

function generateEnemyCount() {

    enemyCount = (waveNum * 5) - 3
}
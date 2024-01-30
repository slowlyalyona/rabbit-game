// Copyright (c) 2023 ~ 2024 Arthur Kasparian, Individual All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Arthur Kasparian <contact@arthurkasparian.dev>, Month 1 2024. Last modified 28/01/2024, 1:16 am

import {enemyTypes, getEnemyInfo} from "./enemies.js";
import {waveKills} from "../game/wave.js";
import {kills} from "../game/info.js";

export let enemies = []

export function populateEnemies(number) {
    enemies = []

    for (let i = 0; i < number; i++) {

        let type = enemyTypes.Fox

        if (i % 5 === 0)
            type = enemyTypes.Crow
        else if (i % 6 === 0)
            type = enemyTypes.Wolf
        else if (i % 7 === 0)
            type = enemyTypes.Owl

        enemies.push({
            id: 'enemy' + i,
            position: 0,
            column: Math.floor(Math.random() * 5) + 1,
            info: getEnemyInfo(type),
            killed: false,
            kill: function() {

                if (this.info.hp === 1) {
                    document.querySelector(`#${(this.id)}`).remove()
                    enemies[enemies.indexOf(this)] = null
                    this.killed = true

                    waveKills.addKill()
                    kills.trackKill()
                } else {

                    this.info.hp--
                }
            }
        })
    }

    shuffleEnemies()

    console.log(enemies)
}

// Chatgpt generated
function shuffleEnemies() {
    for (let i = enemies.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));
        [enemies[i], enemies[j]] = [enemies[j], enemies[i]];

    }
}
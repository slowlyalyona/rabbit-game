// Copyright (c) 2023 ~ 2024 Arthur Kasparian, Individual All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Arthur Kasparian <contact@arthurkasparian.dev>, Month 1 2024. Last modified 28/01/2024, 1:25 am

import {enemies} from "./populate.js";
import {paused} from "../pause.js";

export function spawnEnemies() {

    if (!paused)
    enemies.forEach(enemy => {
        
        setTimeout(() => {

            spawnEnemy(enemy)

        }, (Math.random() * (5 - 1) + 1) * 2000)

    })
}

export let spawned = []

function spawnEnemy(enemy) {

    const main = document.querySelector('main')

    const newEnemy = document.createElement('div')

    newEnemy.classList.add('shot', `column${enemy.column}`)
    newEnemy.id = enemy.id
    newEnemy.style.top = '0svh'
    newEnemy.innerText = enemy.info.emoji

    main.insertBefore(newEnemy, main.firstChild);

    spawned.push(enemy)

    move(newEnemy, enemy.info)
}

function move(enemy, info) {
    let topValue = 0
    function animate() {

        if (topValue > 90)
            enemy.remove()

        if (!paused)
            if (info.speed)
                topValue += .2
            else
                topValue += .08

        enemy.style.top = topValue + 'svh'
        enemy.position = topValue
        requestAnimationFrame(animate)
    }

    animate()
}
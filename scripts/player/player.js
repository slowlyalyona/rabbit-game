// Copyright (c) 2023 ~ 2024 Arthur Kasparian, Individual All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Arthur Kasparian <contact@arthurkasparian.dev>, Month 1 2024. Last modified 28/01/2024, 12:58 am

import { paused } from "../pause.js";
import {shoot} from "./shots.js";

let canMove = true
let canShoot = true
const canShootDelay = 200

const p = document.querySelector('#player')

let player = {
    position: 1,
    moveRight: function() {

        if (this.position === 5 || !canMove)
            return

        canShoot = false
        canMove = false
        setTimeout(() => canShoot = true, canShootDelay)

        p.className = `column${++this.position}`
    },
    moveLeft: function() {

        if (this.position === 1 || !canMove)
            return

        canShoot = false
        canMove = false
        setTimeout(() => canShoot = true, canShootDelay)

        p.className = `column${--this.position}`
    },
    shoot: function() {

        if (canShoot)
            shoot(player.position)

        canShoot = false
    }
}

export function setPlayerHandlers() {

    document.addEventListener('keydown', (e) => {
        if (!paused)
            switch (e.key.toLowerCase()) {
                case 'd':
                case 'arrowright':
                    player.moveRight()
                    break
                case 'a':
                case 'arrowleft':
                    player.moveLeft()
                    break
                case 'w':
                case 'arrowup':
                    player.shoot()
                    break
            }
    });

    document.addEventListener('keyup', (e) => {

        if (!paused)
            switch (e.key.toLowerCase()) {
                case 'd':
                case 'arrowright':
                case 'a':
                case 'arrowleft':
                    canMove = true
                    break
                case 'w':
                case 'arrowup':
                    canShoot = true
                    break
            }

    })
}
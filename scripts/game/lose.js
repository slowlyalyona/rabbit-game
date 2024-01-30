// Copyright (c) 2023 ~ 2024 Arthur Kasparian, Individual All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Arthur Kasparian <contact@arthurkasparian.dev>, Month 1 2024. Last modified 30/01/2024, 8:04 pm

import {pauseGame} from "../pause.js";
import {rabbit} from "../base/rabbit.js";
import {kills} from "./info.js";

export function onLose() {
    pauseGame()
    document.querySelector('dialog').showModal()

    document.querySelector('#final-rabbits').innerText = `Saved: ${rabbit.savedNum}x 🐇`
    document.querySelector('#final-score').innerText = `Score: ${kills.number} Kills`
}
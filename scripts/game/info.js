// Copyright (c) 2023 ~ 2024 Arthur Kasparian, Individual All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Arthur Kasparian <contact@arthurkasparian.dev>, Month 1 2024. Last modified 30/01/2024, 5:35 pm

export let kills = {
    number: 0,
    trackKill: function() {
        this.number++

        document.querySelector('#score').innerText = `Kills: ${this.number}`
    }
}

export function updateScores() {

}
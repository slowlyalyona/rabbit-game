// Copyright (c) 2023 ~ 2024 Arthur Kasparian, Individual All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Arthur Kasparian <contact@arthurkasparian.dev>, Month 1 2024. Last modified 28/01/2024, 1:14 am

/*
1. 🦊: 1hp, no flight, no strength, speed
2. 🐺: 2hp, no flight, strength, no speed
3. 🐦‍⬛: 1hp, flight, no strength, speed
4. 🦉: 2hp, flight, strength, no speed
*/ // Strength makes them break the wall instantly, maybe make flight be able to pass over the wall? should make the flight enemies much rarer in that case

export const enemyTypes = {
    Fox: 'fox',
    Wolf: 'wolf',
    Crow: 'crow',
    Owl: 'owl'
}

export function getEnemyInfo(type) {

    // I thought of using prototyping or even class syntax, but it seemed overkill... this works just fine :)
    switch(type) {
        case enemyTypes.Fox:
            return {
                emoji: '🦊',
                hp: 1,
                flight: false,
                strength: false,
                speed: true
            }
        case enemyTypes.Wolf:
            return {
                emoji: '🐺',
                hp: 5,
                flight: false,
                strength: true,
                speed: false
            }
        case enemyTypes.Crow:
            return {
                emoji: '🐦‍⬛',
                hp: 1,
                flight: true,
                strength: false,
                speed: true
            }
        case enemyTypes.Owl:
            return {
                emoji: '🦉',
                hp: 3,
                flight: true,
                strength: true,
                speed: false
            }
        default:
            console.error('Seems like no type was passed when creating an enemy')
    }
}
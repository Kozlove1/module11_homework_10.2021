const arr = [1, 3, 'pop', 'rock', NaN, 0, 2, ]

function calculateChetNechet (array) {
    Chet = 0
    Nechet = 0
    Trash = 0

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])){
            if (arr[i] === 0){
                Trash++
            } else if (arr[i] % 2 === 0){
                Chet++
            } else {
                Nechet++
            }
        }
    }
    console.log(`Чентых = ${Chet}; Не Четных = ${Nechet}; Мусора = ${Trash}`)
}

calculateChetNechet(arr)
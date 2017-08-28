'TO SA TE KATY Z PIĄTKU'

'https://www.codewars.com/kata/regular-ball-super-ball'

const Ball = function(ballType) {
    this.ballType = ballType || 'regular'
};


'https://www.codewars.com/kata/finish-guess-the-number-game'

class Guesser {
    constructor(number, lives) {
        this.number = number;
        this.lives = lives;
    }

    guess(n) {
        if (!this.lives) {
            throw 'No lives'
        } else if(n === this.number) {
            return true
        } else {
            this.lives--
            return false
        }
    }
}

'https://www.codewars.com/kata/classy-extentions'

class Cat extends Animal {
    speak(){
        return this.name + ' meows.'
    }
}

'https://www.codewars.com/kata/two-fighters-one-winner'

function declareWinner(f1, f2, firstAttacker) {

    const changeAttacker = () => firstAttacker = f1.name === firstAttacker ? f2.name : f1.name

    const fight = () => {
        if (f1.name === firstAttacker) {
            return playerAttack(f1, f2)
        } else {
            return playerAttack(f2, f1)
        }
    }

    const playerAttack = (player1attack, player2) => {
        player2.health -= player1attack.damagePerAttack
        changeAttacker()
        if (player1attack.health > 0)
            return fight()
        return player2.name
    }
    return fight()
}

'https://www.codewars.com/kata/simple-substitution-cipher-helper'

function SubstitutionCipher(abc1, abc2) {

    this.encode = function (str) {
        return replaceLetters(str, abc1, abc2)
    }
    this.decode = function (str) {
        return replaceLetters(str, abc2, abc1)
    }
}

const replaceLetters = (string, coding, decoding) =>
    string.split("")
        .map(x => decoding[coding.indexOf(x)] || x)
        .join("")

'https://www.codewars.com/kata/hex-class'


function Hex(value){
    this.valueOf = function(){
        return value
    };

    this.toString = function(){
        return "0x" + value.toString(16).toUpperCase()
    };

    this.toJSON = function(){
        return "0x" + value.toString(16).toUpperCase()
    };


    this.plus = function(number){
        return new Hex(this.valueOf() + (number.value || number))
    };

    this.minus = function(number){
        return new Hex(this.valueOf() - (number.value || number))
    }

}

Hex.parse = function(string){
    return parseInt(string, 16)
}

'https://www.codewars.com/kata/kama-sutra-cipher-helper'

function KamaSutraCipher(key) {
    const corrAlph = reducer(key, 0)
    const codedAlph = reducer(key, 1)
    this.encode = str => convertString(str, corrAlph, codedAlph)
    this.decode = str => convertString(str, codedAlph, corrAlph)
}

const reducer = (array, elPos) => array.reduce((total, next) => {
    total.push(next[elPos])
    return total
}, []).join("")
const convertString = (string, key1, key2)  =>
    string.split("")
        .map(x => key2[key1.indexOf(x)] || key1[key2.indexOf(x)] || x)
        .join("")


'https://www.codewars.com/kata/hall-of-fame'

class HallOfFame{
    constructor(length, players){
        this.length = length || 5
        this.players = players || []
    }

    get list(){
        if (this.players.length > 0){
            const finalList = sortedAndStringed(this.players).slice(0, this.length)
            return finalList.concat(Array.from({length: this.length - finalList.length}).map(x => ""))
        }
        {
            return Array.from({length: this.length}).map(x => "")
        }
    }

    add( player ){
        this.players.push(player)
        return this
    }
}

const sortByNmAndScore = array => array.sort().sort((value1, value2) => value1[1] < value2[1])
const changeValToString = array => array.map(x => (x[0]+ ': ' + x[1]) || "")
const sortedAndStringed = array => changeValToString(sortByNmAndScore(array))



-------------------------------------------------------------------------------------------------------;


'TU WCHODZĄ Z CZWARTKU :)'


'https://www.codewars.com/kata/a-function-within-a-function/train/javascript'


const always = n => (
    () => n
)

'https://www.codewars.com/kata/test-your-knowledge-of-function-scope/train/javascript'

const add = firstNb => (
    secondNb => firstNb + secondNb
)

'https://www.codewars.com/kata/format-a-string-of-names-like-bart-lisa-and-maggie/train/javascript'

const list = names => {
    const array = objectValues(names)
    const twoLastNames = array.slice(-2).join(" & ")
    const namesInFront = array.slice(0, array.length - 2).join(', ')
    return namesInFront.length < 1 ? twoLastNames : namesInFront + ', ' + twoLastNames
}

const objectValues = object => object.map(x => x.name)

'https://www.codewars.com/kata/sum-of-all-the-multiples-of-3-or-5/train/javascript'

const findSum = n => {
    const arrOfN = Array.from({ length: n }).map((_,i) => i+1)
    const arrayFilteredForThrees = arrOfN.filter(x => x%3 === 0)
    const arrayFilteredForFives = arrOfN.filter(x => x%5 === 0)
    const finalArrayOfValuesToSum = arrayFilteredForThrees.concat(arrayFilteredForFives)
    const filterForDoubleValues = [...new Set(finalArrayOfValuesToSum)]
    const add = (total, next) => total + next
    const finalAnswer = filterForDoubleValues.reduce(add, 0)
    return finalAnswer
}

---------------------------------------------------------------------------------------------------------;

'ŚRODAAAAAAAAA !!!!!!!!!!!!!'

'https://www.codewars.com/kata/a-function-within-a-function/train/javascript'

function always (n) {
    return () => n;
}

'https://www.codewars.com/kata/test-your-knowledge-of-function-scope'

const add = firstNb => (
    secondNb => firstNb + secondNb
)

'https://www.codewars.com/kata/exes-and-ohs'

const XO = str => {
    const o = str.replace(/[^o]*/ig , "")
    const x = str.replace(/[^x]*/ig , "")
    if (o.length === x.length)
    {
        return true
    }
    {
        return false
    }
}

'https://www.codewars.com/kata/count-the-smiley-faces'

const countSmileys = arr => {
    const smile = /[:;][-~]?[D)]/g
    const newArr = arr.join(' ').match(smile)
    const arrLength = newArr === null ? 0 : newArr.length
    console.log(newArr)
    return arrLength
}
bhjh
'https://www.codewars.com/kata/convert-string-to-camel-case'

const toCamelCase = (str) => {
    const a = str.match(/([_-][a-z]?)/g) || []
    const strMatch = str.length === 0 ? ""
        : a[0].length < 2 ? str.replace(/[_-]/g, "")
            : str.split(/([_-][a-z]?)/g)
                .map(x => x.split("").includes("-") ? x.toUpperCase() : x)
                .map(x => x.split("").includes("_") ? x.toUpperCase() : x)
                .map(x => x.replace(/[-_]?/g, ""))
                .join("")
    return strMatch
}

----------------------------------------------------------------------------------------;

'DZIŚ :)'


'https://www.codewars.com/kata/repeatit/train/javascript'


const repeatIt = (str, n) => nCheck(n) ? "" : strCheck(str) ? "Not a string" : strRepeater(str, n)
const strCheck = str => typeof str !== "string"
const nCheck = n => n === 0
const strRepeater = (str, n) => str.toString().repeat(n)

''
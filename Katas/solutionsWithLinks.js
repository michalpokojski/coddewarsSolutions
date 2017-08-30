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

'https://www.codewars.com/kata/length-of-missing-array/train/javascript'

const getLengthOfMissingArray = array => {
    const map = array === null ? 0 : array.map(x => x !== null ? x.length : 0)
    const sorted = map === 0 ? 0 : map.sort((a,b) => a-b)
    const checker = sorted === 0 ? 0 : sorted.filter((x,i,a) => (a[i] - a[i - 1]) !== 1)
    if (sorted === 0)
        return 0
    return sorted.includes(0) ? 0 : checker[1] - 1 || 0
}



'https://www.codewars.com/kata/stringy-strings/javascript'

const stringy = size => {
    const array = Array.from({length: size}).map((x,i) => i%2).map(x => x ? 0 : 1)
    return array.join("")
}

'https://www.codewars.com/kata/pre-fizzbuzz-workout-number-1'

const preFizz = n => Array.from({length: n}).map((_, i) => i+1)

'https://www.codewars.com/kata/zipwith'

const zipWith = (fn,a0,a1) => {
    const sortedArr = [[...a0], [...a1]]
    sortedArr[0] = sortedArr[0].slice(0,sortedArr[1].length)
    const length = sortedArr[0].length
    const arrOfPairs = Array.from({ length }).map(
        (item, x) => Array.from({ length: sortedArr.length }).map(
            (_, y) => sortedArr[y][x]
        )
    )
    const applyFn = arrOfPairs.reduce((c, p) => {
        c.push(fn(p[0], p[1]))
        return c
    },[])
    const filtered = applyFn.filter(x => x !== isNaN)
    return filtered
}


--------------------------------------------------------------------------;

'https://www.codewars.com/kata/strings-strings-strings-easy'


Array.prototype.toString = function(){
    var ret = "[";
    for (var prop in this)
        ret += this[prop] + ","
    return (ret + "]").replace(/,]/g, ']')
}

Boolean.prototype.toString = function(){
    return this + ''
}

Number.prototype.toString = function() {
    return this + ''
}


'https://www.codewars.com/kata/coding-meetup-number-9-higher-order-functions-series-is-the-meetup-age-diverse/javascript'



const ageCreator = (n, age) => Array.from({length: n}).map((_, i) => i + age)
const diverseList = [ageCreator(19, 1),
    ageCreator(10, 20),
    ageCreator(10, 30),
    ageCreator(10, 40),
    ageCreator(10, 50),
    ageCreator(10, 60),
    ageCreator(10, 70),
    ageCreator(10, 80),
    ageCreator(10, 90),
    ageCreator(100, 100)]
const isAgeDiverse = list => {
    const listOfAges = list.map(x => x.age)

    const check = diverseList.map(x => x.some(y => listOfAges.includes(y)))
    return check.every(y => y === true)
}

'https://www.codewars.com/kata/coding-meetup-number-16-higher-order-functions-series-ask-for-missing-details'

const askForMissingDetails = list => {
    const keysArr = Object.keys(list[0])
    const newArr = list.map(x => {
        const value = keysArr.filter(y => x[y] === null)[0]
        x.question = `Hi, could you please provide your ${value}.`
        return x
    })
    return newArr
}
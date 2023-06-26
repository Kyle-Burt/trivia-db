import { AppState } from "../AppState.js"
import { triviasServices } from "../services/TriviasServices.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"


function _drawQuestion() {
    const triv = AppState.trivias
    let template = ''

    console.log(triv)

    triv.forEach(t => template += t.QTemplate)

    setHTML('qSpot', template)
}

function _drawAnswer() {
    const triv = AppState.trivias
    let template = ''

    console.log(triv)

    triv.forEach(t => template += t.AnsTemplate)

    setHTML('aSpot', template)
}


export class TriviaController {
    constructor() {
        console.log('trivia controller working')

        this.getTrivias()

        AppState.on('trivias', _drawQuestion)
        AppState.on('trivias', _drawAnswer)

    }

    async getTrivias() {
        try {
            await triviasServices.getTrivias()
            Pop.success('got the trivia!')
        } catch (error) {
            console.error(error)
            Pop.error('Error')
        }
    }

    questionAnswer() {
        console.log('Working Boi')
        App.triviasServices.questionAnswer()
    }
}
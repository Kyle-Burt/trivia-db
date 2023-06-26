import { AppState } from "../AppState.js"
import { Trivia } from "../models/Trivia.js"
import { triviaApi } from "./AxiosServices.js"





class TriviasServices {
    async getTrivias() {
        const response = await triviaApi.get()

        console.log('got trivia questions', response.data)

        const arrayOfTrivia = response.data.results.map(triviaPojo => new Trivia(triviaPojo))

        console.log(arrayOfTrivia)

        AppState.trivias = arrayOfTrivia
    }

    questionAnswer() {
        let answer = AppState.trivias.find(t => t.correctAnswer == true)
        if (answer == this.correctAnswer) {
            Pop.success('Correct Answer, Good Job')
        } else {
            Pop.alert('Wrong Answer, Better luck next time.')
        }
    }
}



export const triviasServices = new TriviasServices()
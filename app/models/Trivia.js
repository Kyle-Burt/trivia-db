export class Trivia {
    constructor(data) {
        this.category = data.category
        this.correctAnswer = data.correctAnswer
        this.incorrectAnswer = data.incorrectAnswer
        this.question = data.question
        this.type = data.type
    }

    get QTemplate() {
        return `
        <div class="row my-5">
            <div class="col-4">Question <span>${this.category}</span></div>
            <div class="col-8">${this.question}?</div>
        </div>
        `
    }

    get AnsTemplate() {
        return `
        <div class="col-6">
                <h2 onclick="questionAnswer()" class="selectable text-end pe-4">${this.correctAnswer} True</h2>
            </div>
            <div class="col-6">
                <h2 onclick="questionAnswer()" class="selectable text-start ps-4">${this.incorrectAnswer}False</h2>
            </div>
        `
    }
}
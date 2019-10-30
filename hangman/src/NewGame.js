import React from 'react';

function NewGame() {

    const [hiddenWord, setHiddenWord] = React.useState([])
    const [list_of_preset_words] = React.useState(["trains", "acoustics", "level",
                                                    "sneaky", "legs", "needless",
                                                    "crabby", "bone", "use",
                                                    "charming", "crow", "stage"])
    const [randomWordIndex] = React.useState(Math.floor(Math.random() * 11))
    const [randomWord, setRandomWord] = React.useState(list_of_preset_words[randomWordIndex])
    var randomWordArray = []

    const wordToArray = () => {
        const randomWordArray = randomWord.split("")
        console.log(randomWordArray.fill("_"))
        
    }

    return(
        <>
            <button onClick = {wordToArray }>Click to start a new game</button><br  />
            <input type = "text"></input><br  />
            <p>{randomWordArray}</p>

        </>
    )

}

export default NewGame; 
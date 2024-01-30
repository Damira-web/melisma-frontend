import axios from 'axios';

const getAllFeedback = (setFeedback) => {
    axios.get('https://melisma-backend.onrender.com')
    .then(({data}) => {
        console.log(data)
        setFeedback(data)
    })
}

const addFeedback = (title, setTitle, setFeedback) => {
    axios.post('https://melisma-backend.onrender.com/saveFeedback', {title})
    .then((data) => {
        console.log(data)
        setTitle("")
        getAllFeedback(setFeedback)
    })
}

export { getAllFeedback, addFeedback };
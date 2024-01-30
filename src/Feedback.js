import { MyFeedback } from './MyFeedback';
import { getAllFeedback, addFeedback } from './FetchFeedback';
import { useState, useEffect } from 'react';
import './App.css';

const Feedback = () => {

    const [myFeedback, setFeedback] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        getAllFeedback(setFeedback)
    }, [])

    return(<div>

        <div className='heading'>
            <h2 className='heading-inner'>Отзывы</h2>
        </div>

        <div className="feedback-container">
            <div className="input-container">

                <textarea 
                    className='feedback-message' 
                    cols='30' 
                    rows='10' 
                    value={title}
                    onChange = {(e) => setTitle(e.target.value)}
                    placeholder="Оставить отзыв ..."
                > 
                </textarea>

                <button className="feedback-btn" 
                disabled={!title}
                onClick={() => addFeedback(title, setTitle, setFeedback)}>Отправить</button>
            </div>

            <div className="feedback-paragraph-container feedback-paragraph">
                {myFeedback.map((feedback) => <MyFeedback text={feedback.title} key={feedback.id}/>)}
            </div>
        </div>

    </div>);
}

export { Feedback };
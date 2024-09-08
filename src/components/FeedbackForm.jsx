import React, { useContext, useEffect } from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackForm = () => {
    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    const [text, setText] = useState('')
    const [btnDisabled, setbtnDisabled] = useState(true)
    const [msg, setMsg] = useState('')
    const [rating, setRating] = useState(10)

    useEffect(() => {
        if(feedbackEdit.edit === true){
            setbtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)

        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        if(text === ''){
            setbtnDisabled(true)
            setMsg(null)
        } else if(text !== '' && text.trim().length <= 10){
            setbtnDisabled(true)
            setMsg('Text must be at least 10 characters')
        } else {
            setMsg(null)
            setbtnDisabled(false)
        }
        setText(e.target.value)
        }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }
            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback);
            }
            setText('')
            
        }
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us</h2>
            <RatingSelect select={(rating) => setRating(rating)}/>
            <div className="input-group">
                <input type="text" placeholder='Write a review' onChange={handleTextChange} value={text}/>
                <Button type='submit' isDisabled={btnDisabled}>
                    Send
                </Button>
            </div>
            {msg && <div className='message'>{msg}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm
import React from 'react'
import FeedbackItem from './FeedbackItem'
import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from "react";
import FeedbackContext from '../context/FeedbackContext';
import Spinner from './shared/Spinner';

const FeedbackList = () => {
const {feedback, isLoading} = useContext(FeedbackContext)

    if(!isLoading && (!feedback || feedback.length === 0)){
        return <p>No Feedback Yet</p>
    }

    return isLoading ? <Spinner/> : (
        <div className='feedback-list'>
            <AnimatePresence>
            {feedback.map((item) => {
               return  (
                <motion.div 
                    key={item.id}
                    initial ={{opacity:0}}
                    animate = {{opacity:1}}
                    exit={{opacity:0}}
                    >
                <FeedbackItem item={item} key={item.id} />
                </motion.div>
               )
            })}
            </AnimatePresence>
        </div>
    )



//   return (
//     <div className='feedback-list'>
//         {feedback.map((item) => {
//            return  (
//             <FeedbackItem item={item} key={item.id} handleDelete={handleDelete}/>
//            )
//         })}
//     </div>
//   )
}


export default FeedbackList
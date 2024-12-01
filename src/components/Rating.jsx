import React, { useState } from 'react'
import styles from './Rating.module.css'

export const Rating = () => {
    const [selectedRating, setSelectedRating] = useState();
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleRatingClicked(rating) {
        setSelectedRating(rating);
    };


  return (
    <div onSubmit={() => setIsSubmitted(true)} className={styles.panel}>
        <img className= {styles.star}
            src="./public/icon-star.svg" alt="Star icon" 
        />

        <h1 className={styles.title}>How did we do?</h1>
        <p className={styles.description}>Please let's us know how we didi with your support request.
            All feedback is appreciated to help us improve our offering!
        </p>

        <div className={styles.group}>
            {[1,2,3,4,5].map((rating => (
                <button
                onClick={() =>handleRatingClicked(rating)}
                className={styles.rating}>
                    {rating}
                </button>
            )))}
        </div>

        <button className={styles.submit}> Submit</button>
    </div>
  )
}

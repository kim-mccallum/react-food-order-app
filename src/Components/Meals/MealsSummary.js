import classes from './MealsSummary.module.css';

const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Delicious Food, Delivered to You</h2>
            <p>
                Choose your favorite veggie meal from our selection of seasonal produce meals and enjoy a delicious veggie snack.
            </p>
            <p>
                All of our produce are organic and sustainably grown by an army of grandmas with excellent farming skills.
            </p>
        </section>
    )
};

export default MealsSummary;
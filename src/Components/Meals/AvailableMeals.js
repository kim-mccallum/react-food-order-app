import classes from './AvailableMeals.module.css'

import Card from '../UI/Card/Card';
import MealItem from '../Meals/MealItem/MealItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Veggie Slaw',
      description: 'Mish mash of chop chop',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Greenest Green Casserole',
      description: 'A green party!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Gazpacho Galore',
      description: 'Soupy fresh and goopy',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];


const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => <MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>)
    return (
        <section className={classes.meals}>
            <Card>
            <ul>
                {mealsList}
            </ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
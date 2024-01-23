// import React, { useState } from 'react';
// import './MealList.css';
// import pancakeImage from '../src/images';
// import samosaImage from '../src/images/Chapati.jpg';
// import cassavaImage from '../src/images/Samosa 2.jpg';

// const MealList = () => {
//   const [selectedMeals, setSelectedMeals] = useState([]);

//   const handleMealClick = (meal) => {
//     setSelectedMeals([...selectedMeals, meal]);
//   };

//   const handleDeleteClick = (index) => {
//     const updatedMeals = [...selectedMeals];
//     updatedMeals.splice(index, 1);
//     setSelectedMeals(updatedMeals);
//   };

//   const mealData = [
//     { name: 'Pancakes', image: pancakeImage },
//     { name: 'Samosas', image: pancakeImage },
//     { name: 'Fried Cassava', image: pancakeImage },
//   ];

//   return (
//     <div className="meal-list-container">
//       <div className="selected-meals">
//         <h3>ORDERED EATS</h3>
//         <ul>
//           {selectedMeals.map((meal, index) => (
//             <li key={index}>
//               <img src={meal.image} alt={meal.name} />
//               <span>{meal.name}</span>
//               <button onClick={() => handleDeleteClick(index)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="available-meals">
//         <h3>AVAILABLE EATS</h3>
//         <div className="meal-buttons">
//           {mealData.map((meal, index) => (
//             <div key={index} className="meal-card">
//               <img src={meal.image} alt={meal.name} />
//               <button onClick={() => handleMealClick(meal)}>Add to Order</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MealList
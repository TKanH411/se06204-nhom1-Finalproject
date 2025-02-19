import React from 'react'
import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Share2, Heart, Clock, Users, MessageSquare } from "lucide-react";

/*const CookingDetailPage = () => {
  return (
    <div>CookingDetailPage</div> e  
  )
} */
const recipeData = {
  id: 1,
  title: "Spaghetti Carbonara",
  image: "https://source.unsplash.com/600x400/?pasta",
  description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper. Quick, easy, and delicious!",
  time: "25 minutes",
  servings: 2,
  ingredients: [
    "200g spaghetti",
    "100g pancetta",
    "2 large eggs",
    "50g pecorino cheese",
    "50g parmesan",
    "Freshly ground black pepper",
    "Salt",
    "2 cloves garlic",
    "1 tbsp olive oil"
  ],
  instructions: [
    "Boil spaghetti in salted water until al dente.",
    "Fry pancetta with garlic until crispy, then remove garlic.",
    "Whisk eggs with grated cheeses and black pepper.",
    "Combine pasta, pancetta, and egg mixture off the heat.",
    "Mix well and serve immediately."
  ],
  rating: 4.8,
  comments: [
    { user: "Alice", text: "Delicious! My family loved it." },
    { user: "Bob", text: "Easy to make and tastes amazing." }
  ]
};

const CookingDetailPage = () => {
  const { id } = useParams();
  // Trong thực tế, bạn có thể fetch dữ liệu dựa trên ID

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Card>
        <img
          src={recipeData.image}
          alt={recipeData.title}
          className="w-full h-64 object-cover rounded-t-2xl"
        />
        <CardContent className="p-4">
          <h1 className="text-2xl font-bold mb-2">{recipeData.title}</h1>
          <p className="text-gray-600 mb-4">{recipeData.description}</p>
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center">
              <Clock className="mr-2" />
              <span>{recipeData.time}</span>
            </div>
            <div className="flex items-center">
              <Users className="mr-2" />
              <span>{recipeData.servings} servings</span>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <Star className="text-yellow-500" />
            <span className="ml-2 text-lg">{recipeData.rating}</span>
          </div>
          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside mb-4">
            {recipeData.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside mb-4">
            {recipeData.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
<h2 className="text-xl font-semibold mb-2">Comments</h2>
          <div className="mb-4">
            {recipeData.comments.map((comment, index) => (
              <div key={index} className="p-2 border-b border-gray-200">
                <strong>{comment.user}</strong>: {comment.text}
              </div>
            ))}
          </div>
          <div className="flex space-x-2">
            <Button className="flex-1">Save Recipe</Button>
            <Button className="flex-1 flex items-center justify-center">
              <Share2 className="mr-2" /> Share
            </Button>
            <Button className="flex-1 flex items-center justify-center">
              <Heart className="mr-2 text-red-500" /> Like
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};


export default CookingDetailPage

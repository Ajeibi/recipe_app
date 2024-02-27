import PreviousSearches from "../components/sections/PreviousSearches"
import RecipeCard from "../components/card/RecipeCard"

export default function Recipes(){
    const recipes = [
        {
            title: "Amala and Gbeberi with Ewedu soup",
            image: "/img/gallery/img_1.jpg",
            authorImg: "/img/top-chefs/img_1.jpg",
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/img/gallery/img_4.jpg",
            authorImg: "/img/top-chefs/img_2.jpg",
        },
        {
            title: "Eba and Vegetables",
            image: "/img/gallery/img_5.jpg",
            authorImg: "/img/top-chefs/img_3.jpg",
        },
        {
            title: "Mutton Biriyani",
            image: "/img/gallery/img_6.jpg",
            authorImg: "/img/top-chefs/img_6.jpg",
        },
        // {
        //     title: "Japanese Sushi",
        //     image: "/img/gallery/img_10.jpg",
        //     authorImg: "/img/top-chefs/img_6.jpg",
        // },
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_7.jpg",
            authorImg: "/img/top-chefs/img_1.jpg",
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/img/gallery/img_4.jpg",
            authorImg: "/img/top-chefs/img_4.jpg",
        },
        {
            title: "Bouillabaisse",
            image: "/img/gallery/img_3.jpg",
            authorImg: "/img/top-chefs/img_5.jpg",
        },
        {
            title: "Seasoned Fish Fillet ",
            image: "/img/gallery/img_8.jpg",
            authorImg: "/img/top-chefs/img_5.jpg",
        },
        {
            title: "Okra Soup",
            image: "/img/gallery/img_10.jpg",
            authorImg: "/img/top-chefs/img_6.jpg",
        },
        {
            title: "Fufu and Vegetable Soup",
            image: "/img/gallery/img_9.jpg",
            authorImg: "/img/top-chefs/img_3.jpg",
        },
        {
            title: "Bouillabaisse",
            image: "/img/gallery/img_3.jpg",
            authorImg: "/img/top-chefs/img_5.jpg",
        }
    ].sort(() => Math.random() - 0.5)

    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {/* <RecipeCard /> */}
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}
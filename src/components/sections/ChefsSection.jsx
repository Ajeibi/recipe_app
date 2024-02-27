import ChefCard from "../card/ChefCard"

export default function ChefsSection(){
    const chefs = [
        {
            name: "Ben Gbenga",
            img: "/img/top-chefs/img_1.jpg",
            recipesCount: "10",
            cuisine: "African Cuisines",
        },
        {
            name: "Hilda Bacci",
            img: "/img/top-chefs/img_2.jpg",
            recipesCount: "05",
            cuisine: "Nigerian",
        },
        {
            name: "Dricus Ayanda",
            img: "/img/top-chefs/img_3.jpg",
            recipesCount: "13",
            cuisine: "Nigeria",
        },
        {
            name: "Musa Abdulrahman",
            img: "/img/top-chefs/img_4.jpg",
            recipesCount: "08",
            cuisine: "Arab Cuisines"
        },
        {
            name: "Alain Bonaparte ",
            img: "/img/top-chefs/img_5.jpg",
            recipesCount: "09",
            cuisine: "French"
        },
        {
            name: "Joey Zaza",
            img: "/img/top-chefs/img_6.jpg",
            recipesCount: "04",
            cuisine: "Indian"
        }
    ]
    return (
        <div className="section chefs">
            <h1 className="title">Our Top Chefs</h1>
            <div className="top-chefs-container">
                { chefs.map(chef => <ChefCard key={chef.name} chef={chef} />) }
            </div>
        </div>
    )
}
import ProductItemCard from "../../components/productItemCard";

const Home = () => {

    const productList = [
        {
            image: "https://i.pinimg.com/736x/a7/42/3e/a7423efc0979d68e4e2add26022dabb0.jpg",
            name: "Glasses",
            price: 10.21,
            description: "Stylish sunglasses for any occasion.",
        },
        {
            image: "https://contents.mediadecathlon.com/p1909024/8a1c99312b7c74ecbaa2ad57e54158f3/p1909024.jpg",
            name: "Umbrella",
            price: 9.21,
            description: "Durable umbrella to keep you dry from the rain.",
        },
        {
            image: "https://hips.hearstapps.com/hmg-prod/images/elle-loves-away-the-bigger-carry-on-suitcase-coast-index-641e07dd117de.jpg?crop=0.429xw:0.859xh;0.279xw,0.0705xh&resize=1200:*",
            name: "Suit Case",
            price: 12.21,
            description: "Spacious suitcase for all your travel adventures.",
        },
        {
            image: "https://img.freepik.com/free-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg?size=338&ext=jpg&ga=GA1.1.632798143.1704844800&semt=sph",
            name: "Mobile",
            price: 100,
            description: "High-tech smartphone to stay connected and on top of things.",
        },
        {
            image: "https://cdn.thewirecutter.com/wp-content/media/2023/12/wirelesswiredheadsets-2048px-06290.jpg?auto=webp&quality=75&width=1024",
            name: "Headset",
            price: 5000,
            description: "Crystal clear sound and comfortable design for immersive audio experiences.",
        },
        {
            image: "https://www.galaxybags.com.pk/cdn/shop/files/Z_1_32407f80-525f-492a-b4ae-7abf728d5320.jpg?v=1707314955",
            name: "Hand bag",
            price: 1500,
            description: "Elegant handbag to elevate your style for any occasion.",
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0zs2F5xXm24floIykIRcTqtn3_1RY9eIoBg&usqp=CAU",
            name: "Sports shoe",
            price: 1500,
            description: "Supportive sports shoes to keep you comfortable and energized during your workouts.",
        },
        {
            image: "https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "Makeup kit",
            price: 1500,
            description: "Complete makeup kit for creating a flawless look that lasts all day.",
        },
        {
            image: "https://www.bigbasket.com/media/uploads/p/m/40213312-5_2-villain-combo-perfume-eau-de-parfum-for-men.jpg",
            name: "perfume",
            price: 1500,
            description: "Alluring perfume to leave a lasting and unforgettable impression.",
        },
    ];

    return (
        <main id="main-home-page">
            <h6 className="text-center my-4">Filter Products</h6>
            <h2 className="text-center"><span className="text-muted"><i>Last</i></span> Days of Summer</h2>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between">
                        <h6>9 items from 5 categories</h6>
                        <h6>Sort By:<span className="text-danger"> Relevence</span></h6>
                    </div>
                </div>
            </div>
            <div className="container mt-5">

                <div className="row">
                    {
                        productList.map((card, index) => {
                            return <ProductItemCard
                                key={index}
                                image={card.image}
                                name={card.name}
                                price={card.price}
                                description={card.description}
                            />
                        })
                    }
                </div>

            </div>
        </main>
    )
}

export default Home;
import ProductItemCard from "../../components/productItemCard";

const Electronics = () => {

    const electronicList = [
        {
            image: "https://5.imimg.com/data5/SELLER/Default/2022/5/SD/TX/PM/32928643/gaming-laptop.jpg",
            name: "Gaming Laptop",
            price: 1500.00,
            description: "Powerful laptop for an immersive gaming experience."
        },
        {
            image: "https://m.media-amazon.com/images/I/61CXp9DFaDL.jpg",
            name: "Wireless Earbuds",
            price: 150.00,
            description: "Enjoy crystal clear audio on the go with these wireless earbuds."
        },
        {
            image: "https://www.hindustantimes.com/ht-img/img/2023/09/19/550x309/LED_TV_1695123123749_1695123147285.JPG",
            name: "Smart TV",
            price: 800.00,
            description: "Experience stunning visuals and a smart entertainment hub with this Smart TV."
        },
        {
            image: "https://m.media-amazon.com/images/I/31KAjjezgpL._AC_SS250_.jpg",
            name: "Mirrorless Camera",
            price: 4000.00,
            description: "Capture high-quality photos and videos with this advanced mirrorless camera."
        },
        {
            image: "https://5.imimg.com/data5/SELLER/Default/2022/4/FI/WW/GB/1646970/sony-a7s-iii-mirrorless-camera-500x500.jpg",
            name: "Smartphone Gimbal",
            price: 180.00,
            description: "Create smooth and stable videos with your smartphone using this gimbal."
        },
        {
            image: "https://m.media-amazon.com/images/I/61UxfXTUyvL._AC_UF1000,1000_QL80_.jpg",
            name: "Mouse", // Not exactly an electronic device, but often included in electronics stores
            price: 100.00,
            description: "Cook a variety of meals quickly and easily with this smart pressure cooker."
        },
        {
            image: "https://www.ilifeshop.in/uploads/fc5d33eaed585731b44ac8b1ad411c24.jpg",
            name: "Robot Vacuum Cleaner",
            price: 300.00,
            description: "Keep your floors clean effortlessly with this robot vacuum cleaner."
        },
        {
            image: "https://elexexplorer.com/wp-content/uploads/2021/05/Smart_refrigerator_feature_image_767x512.jpg",
            name: "Smart Refrigerator",
            price: 2500.00,
            description: "Manage your groceries and control temperature with this smart refrigerator."
        },
        {
            image: "https://m.media-amazon.com/images/I/61wurNWKKbL._AC_UF1000,1000_QL80_.jpg",
            name: "Gaming Console",
            price: 300.00,
            description: "Experience next-gen gaming with this powerful console."
        }
    ];

    return (
        <main id="main-home-page">
            <h6 className="text-center my-4">Electronics Products</h6>
            <h2 className="text-center"><span className="text-muted"><i>Last</i></span> Days of Summer</h2>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between">
                        <h6>9 items from 3 categories</h6>
                        <h6>Sort By:<span className="text-danger"> Relevence</span></h6>
                    </div>
                </div>
            </div>
            <div className="container mt-5">

                <div className="row">
                    {
                        electronicList.map((card, index) => {
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

export default Electronics;
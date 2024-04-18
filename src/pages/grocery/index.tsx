import ProductItemCard from "../../components/productItemCard";

const Grocery = () => {

    const GroceryList = [
        {
            image: "https://thumbs.dreamstime.com/b/pearl-millet-9109963.jpg",
            name: "Kambu",
            price: 50,
            description: "A nutritious and gluten-free millet grain, rich in protein and fiber."
        },
        {
            image: "https://www.graceonline.in/uploads/products/2023/06/14/moong-dhall-premium--11686744375.webp",
            name: "Moong Dal",
            price: 9.21,
            description: "A versatile and easily digestible lentil, perfect for soups, dals, and stews."
        },
        {
            image: "https://m.media-amazon.com/images/I/618EAfNAj4L._AC_UF1000,1000_QL80_.jpg",
            name: "Block Horse Gram",
            price: 12.21,
            description: "A high-protein legume, often sprouted or used in curries and stir-fries."
        },
        {
            image: "https://5.imimg.com/data5/SELLER/Default/2024/2/394358286/KD/ZT/AX/3698782/finger-millet-seeds-250x250.jpeg",
            name: "Finger Millet",
            price: 44,
            description: "A tiny but powerful millet, packed with nutrients and known for its gluten-free properties."
        },
        {
            image: "https://www.bigbasket.com/media/uploads/p/l/40109376_11-bb-royal-organic-little-millet-samai-rice.jpg",
            name: "Samai",
            price: 150,
            description: "A small-grained millet with a nutty flavor, ideal for light and fluffy porridges."
        },
        {
            image: "https://5.imimg.com/data5/SELLER/Default/2022/5/LV/LA/PL/87590775/new-product-500x500.jpeg",
            name: "Kodo Millet",
            price: 90,
            description: "A protein-rich millet with a slightly bitter taste, perfect for salads and flatbreads."
        },
        {
            image: "https://www.bigbasket.com/media/uploads/p/xl/40110355_11-bb-royal-basmati-rice-everyday.jpg",
            name: "Basmati Rice",
            price: 80,
            description: "Aromatic long-grain rice known for its delicate flavor and fluffy texture."
        },
        {
            image: "https://5.imimg.com/data5/SELLER/Default/2022/3/WQ/FT/ID/3642811/1kg-tata-salt-packet-500x500.jpg",
            name: "Salt",
            price: 20,
            description: "A mineral essential for taste and food preservation."
        },
        {
            image: "https://5.imimg.com/data5/PK/FW/GR/SELLER-82966331/black-pepper-500x500.jpg",
            name: "Black Pepper",
            price: 80,
            description: "A pungent spice that adds heat and complexity to savory dishes."
        }
    ];

    return (
        <main id="main-home-page">
            <h6 className="text-center my-4">Grocery Products</h6>
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
                        GroceryList.map((card, index) => {
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

export default Grocery;
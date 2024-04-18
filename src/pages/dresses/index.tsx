import ProductItemCard from "../../components/productItemCard";

const DressList= () => {

    const dressList = [
        {
            image: "https://assets.ajio.com/medias/sys_master/root/20230519/u500/64677c2b42f9e729d79c0c11/-473Wx593H-466168870-red-MODEL.jpg",
            name: "flare dress",
            price: 50,
            description: "This is sun glass you can use anywhere",
        },
        {
            image: "https://assets.ajio.com/medias/sys_master/root/20240112/hrf7/65a1400174cb305fe014908c/-473Wx593H-466798111-black-MODEL.jpg",
            name: "palka-dot print dress",
            price: 580,
            description: "This is sun glass you can use anywhere",
        },
        {
            image: "https://assets.ajio.com/medias/sys_master/root/20240301/vCC2/65e2139205ac7d77bb90311f/-1117Wx1400H-466798111-beige-MODEL.jpg",
            name: "Round neck drs",
            price: 12.21,
            description: "This is suit case glass you can use anywhere",
        },
        {
            image: "https://assets.ajio.com/medias/sys_master/root/20230602/F9u3/64791cd8d55b7d0c63341855/-473Wx593H-461185769-black-MODEL.jpg",
            name: "LOng kurta",
            price: 870,
            description: "This is suit case glass you can use anywhere",
        },
        {
            image: "https://assets.ajio.com/medias/sys_master/root/20240322/KbnR/65fdb2c705ac7d77bbd33267/-473Wx593H-467128406-blue-MODEL.jpg",
            name: "Men regular fit",
            price: 592,
            description: "This is suit case glass you can use anywhere",
        },
        {
            image: "https://assets.ajio.com/medias/sys_master/root/20231012/9h7T/6527aa75ddf779151935e06e/-473Wx593H-466390946-red-MODEL.jpg",
            name: "t-shirt",
            price: 765,
            description: "This is suit case glass you can use anywhere",
        },
        {
            image: "https://assets.ajio.com/medias/sys_master/root/20240106/ZrHT/659884f554c30e6276989129/-473Wx593H-466951185-cream-MODEL.jpg",
            name: "floral print ",
            price: 1510,
            description: "This is suit case glass you can use anywhere",
        },
        {
            image: "https://assets.ajio.com/medias/sys_master/root/20240218/oDlH/65d205d316fd2c6e6a02ab3c/-473Wx593H-467083540-lime-MODEL.jpg",
            name: "Micro-print",
            price: 1820,
            description: "This is suit case glass you can use anywhere",
        },
        {
            image: "https://assets.ajio.com/medias/sys_master/root/20240317/kflE/65f5fa6d16fd2c6e6a625777/-473Wx593H-467172642-grey-MODEL.jpg",
            name: "Micro-print",
            price: 1820,
            description: "This is suit case glass you can use anywhere",
        }
    ]

    return (
        <main id="main-home-page">
            <h6 className="text-center my-4">Trending Dresses</h6>
            <h2 className="text-center"><span className="text-muted"><i>Last</i></span> Days of Summer</h2>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between">
                        <h6>360 items from 14 categories</h6>
                        <h6>Sort By:<span className="text-danger"> Relevence</span></h6>
                    </div>
                </div>
            </div>
            <div className="container mt-5">

                <div className="row">
                    {
                      dressList.map((card, index) => {
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

export default DressList;
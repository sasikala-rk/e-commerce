export interface IProps {
    image: string;
    name: string;
    price: number;
    description: string;
};


const ProductItemCard = (props: IProps) => {
    return (
        <div className="col-md-6 col-lg-4 col-12 mb-5 product-item">
            <img className="w-100" src={props.image} />
            <div className="d-flex justify-content-between mt-3">
                <span className="bold">{props.name}</span>
                <span className="bold">${props.price}</span>
            </div>
            <span className="text-muted opacity-50">{props.description}</span>
        </div>
    )
}

export default ProductItemCard
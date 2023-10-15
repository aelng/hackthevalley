import { FunctionComponent, CSSProperties } from "react";
import { Product } from "../../types/types";
import { IconMapPin } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import "./Card.scss";

interface CardProps {
    product: Product;
}

const Card: FunctionComponent<CardProps> = ({ product }) => {
    return (
        <div
            className="Card flex-shrink-0 rounded-[40px] bg-[#D9D9D9] w-80 h-64 overflow-clip relative"
            style={{ "--image": `url('${product.image}')` } as CSSProperties}
        >
            <div className="top h-1/2 flex flex-col justify-end items-start p-4 bg-center">
                <h3 className="text-white font-semibold text-2xl">
                    {product.name}
                </h3>
                <div
                    className="text-[#C5C5C5] rounded-full px-3"
                    style={{
                        backgroundColor: `hsl(${
                            4 + 10.8 * Math.min(10, product.left - 1)
                        }, 59%, 45%)`,
                    }}
                >
                    {product.left} left
                </div>
            </div>
            <div className="h-1/2 flex flex-col justify-evenly p-4">
                <div className="flex gap-4 items-center font-bold">
                    <img
                        src={product.storeIcon}
                        className="w-[30px] h-[30px] rounded-full object-cover"
                    />
                    <h4>{product.storeName}</h4>
                </div>
                <div className="flex flex-col justify-start">
                    <p className="text-left">
                        Pick up: today at {product.pickupTime}
                    </p>
                    <p className="text-left">Cost: {product.cost}</p>
                </div>
                <div className="absolute bottom-4 right-6 text-xs text-[#818181]">
                    <span className="mr-1">
                        {product.DistanceMatrixResponseElement?.status ==
                        "ZERO_RESULTS"
                            ? "Cannot drive"
                            : product.DistanceMatrixResponseElement?.distance
                                  ?.text +
                              " | " +
                              product.DistanceMatrixResponseElement?.duration
                                  ?.text}
                    </span>
                    <Link
                        to={`/map/${product.location[0]}/${product.location[1]}`}
                    >
                        <div className="inline-block bg-[#0E694A] h-8 w-8 p-auto rounded-full relative top-2">
                            <IconMapPin
                                className="inline absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                color="#CCCCCC"
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;

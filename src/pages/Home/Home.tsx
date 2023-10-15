import { FunctionComponent } from "react";
import Card from "../../components/Card/Card";
import { useAppContext } from "../../hooks/useAppContext";
import "./Home.scss";

const Home: FunctionComponent = () => {
    const { products } = useAppContext();
    const rec = [...products].filter((_, i) => i % 2);
    const byDistance = [...products].sort(
        (a, b) =>
            (a.DistanceMatrixResponseElement?.distance?.value || 0) -
            (b.DistanceMatrixResponseElement?.distance?.value || 0)
    );

    const byDuration = [...products].sort(
        (a, b) =>
            (a.DistanceMatrixResponseElement?.duration?.value || 0) -
            (b.DistanceMatrixResponseElement?.duration?.value || 0)
    );
    return (
        <div className="Home page">
            <h2>Recommended for you</h2>
            <div className="card-container">
                {rec.map((product, i) => (
                    <Card {...{ product, key: i }} />
                ))}
            </div>
            <h2>All</h2>
            <div className="card-container">
                {products.map((product, i) => (
                    <Card {...{ product, key: i }} />
                ))}
            </div>
            <h2>Nearest by Distance</h2>
            <div className="card-container">
                {byDistance.map((product, i) => (
                    <Card {...{ product, key: i }} />
                ))}
            </div>
            <h2>Nearest by Time</h2>
            <div className="card-container">
                {byDuration.map((product, i) => (
                    <Card {...{ product, key: i }} />
                ))}
            </div>
        </div>
    );
};

export default Home;

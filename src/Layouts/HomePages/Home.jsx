import Header from "../../Components/Header/Header";
import LatestNews from "../../Components/LatestNews";

const Home = () => {

    return (
        <div>
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav>

            </nav>
            <main>

            </main>
        </div>
    );
};

export default Home;
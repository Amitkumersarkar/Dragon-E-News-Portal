import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Header/Navbar";
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
            <section className="w-11/12 mx-auto py-3">
                <Navbar></Navbar>
            </section>
            <nav>

            </nav>
            <main>

            </main>
        </div>
    );
};

export default Home;
import { Link, useLoaderData } from "react-router-dom";
import Header from "../Components/Header/Header";
import RightNav from "../Layouts/RightNav";

const NewsDetails = () => {
    const data = useLoaderData();
    const news = data.data[0];
    console.log(news);
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
                {/* header section of news details page */}
                <section className="col-span-9">
                    <h2 className="font-semibold mb-3">Dragon News</h2>
                    {/* Card layout */}
                    <div className="card bg-base-100 shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src={news?.image_url}
                                alt="usa president jue biden"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{news?.title}</h2>
                            <p>{news?.details}</p>
                            <div className="card-actions">
                                <Link to={`/category/${news?.category_id}`}>
                                    <button className="btn btn-primary">Back To Category</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* right navbar integrate here */}
                <aside className="col-span-3">
                    <RightNav></RightNav>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;
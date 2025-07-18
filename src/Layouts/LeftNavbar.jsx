import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
    // loading and holding data here
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category))
    }, [])
    return (
        <div>
            {/* showing categories data here */}
            <h2 className="font-semibold mb-4">All Category({categories.length})</h2>
            <div className="flex flex-col gap-3">
                {/* mapping categories and dynamic routing here */}
                {
                    categories.map(category => <NavLink to={`/category/${category.category_id}`} className="btn btn-block" key={category.category_id} >{category.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;
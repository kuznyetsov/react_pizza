import React, {useEffect, useState} from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";

const Home = () => {
    let [items, setItems] = useState([]);
    let [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://62bd1eacbac21839b6fc78da.mockapi.io/items')
            .then((res) => {
                return res.json();
            })
            .then((arr) => {
                setItems(arr);
                setLoading(false);
            });
    }, []);

    return (
       <>
           <div className="content__top">
               <Categories />
               <Sort />
           </div>
           <h2 className="content__title">Все пиццы</h2>
           <div className="content__items">
               {
                   isLoading ? [...new Array(6)].map((_,index) => <Skeleton key={index} />) :
                       items.map(obj => <PizzaBlock key={obj.id} {...obj}/>)
               }

           </div>
       </>
    );
}

export default Home;
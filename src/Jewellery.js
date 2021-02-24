
import React, { useState } from 'react';
import Item from './item';
import './jewellery.css';
import {Link} from 'react-router-dom';


const Jewellery = (props) => {
    console.log('jewerly props', props)
    // useEffect(()=>{
    // fetchItems();
    // },[]);

    //  const [jewelery, getJewerlyData] = useState({})

    //  const res = React.useMemo(() => { 
    //      getJewerlyData(props.jewelery)
    //        return props.jewelery.filter(item => getJewerlyData(item))
    //    }, []);
    //   console.log('result', res);
    // const fetchItems = async ()=>{
    //     const data = await fetch("https://fakestoreapi.com/products",{
    //         method:"POST",
    //         body:JSON.stringify(
    //             {
    //                 title: 'test product',
    //                 price: 13.5,
    //                 description: 'lorem ipsum set',
    //                 image: 'https://i.pravatar.cc',
    //                 category: 'electronic'
    //             }
    //         )
    //     });
    //     const itemsJewellery = await data.json();
    //     console.log(itemsJewellery);

    //const dataItems = await fetch("https://fakestoreapi.com/products");
    //const itemsDataJew = await dataItems.json();
    //console.log(itemsDataJew)



    return (
        <main>
            <section className="jewellery">
                <div className="container">
                    <h1>Jewellery page</h1>
                    <div className="jewellery-wrapper">
                        {props.jewelerys.map((item, index) => {
                            console.log('evo ga ovde napokon', item);
                            return (
                                <div className="jewellery-wrapper-item">
                                <Link className="link" to={{ pathname: `/singleItem/${item.category}/${item.title}`, item }}>
                                    <Item itemImage={item.image} itemTitle={item.title} itemPrice={item.price} />
                                </Link>
                                </div>
                            )

                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}


export default Jewellery;
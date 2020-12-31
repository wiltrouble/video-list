import React, {useEffect, useState} from 'react';
import Header from '../components/Header.jsx'
import Search from '../components/Search.jsx'
import Categories from '../components/Categories.jsx'
import Carousel from '../components/Carousel.jsx'
import CarouselItem from '../components/CarouselItem.jsx'
import Footer from '../components/Footer.jsx';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';


const Home = () => {
    const initialState = useInitialState(API);
    return (
    <div className="App">
        <Header></Header>
        <Search></Search>
        {
            initialState.mylist.lenght > 0 && 
            <Categories title="My list">
                <Carousel>
                    <CarouselItem/>
                </Carousel>
            </Categories>
        }
        <Categories title="Most Viewed">
            <Carousel>
                {
                    initialState.trends.map(item =>
                        <CarouselItem key={item.id} {...item}></CarouselItem>
                        )
                }
            </Carousel>
        </Categories>
        <Categories title="Recent Added">
            <Carousel>
                {
                    initialState.originals.map(item => 
                        <CarouselItem key={item.id} {...item}></CarouselItem>
                        )
                }
            </Carousel>
        </Categories>
        <Footer></Footer>
    </div>
)}

export default Home;
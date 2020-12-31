import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux'
import Search from '../components/Search.jsx'
import Categories from '../components/Categories.jsx'
import Carousel from '../components/Carousel.jsx'
import CarouselItem from '../components/CarouselItem.jsx'
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const Home = ({myList, trends, originals}) => {
    return (
    <>
        <Search></Search>
        {
            myList.lenght > 0 && 
            <Categories title="My list">
                <Carousel>
                    <CarouselItem key={item.id} {...item}/>
                </Carousel>
            </Categories>
        }
        <Categories title="Most Viewed">
            <Carousel>
                {
                    trends.map(item =>
                        <CarouselItem key={item.id} {...item}></CarouselItem>
                        )
                }
            </Carousel>
        </Categories>
        <Categories title="Recent Added">
            <Carousel>
                {
                    originals.map(item => 
                        <CarouselItem key={item.id} {...item}></CarouselItem>
                        )
                }
            </Carousel>
        </Categories>
    </>
)}

const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals
    }
}

export default connect(mapStateToProps, null)(Home);
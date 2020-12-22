import React, {useEffect, useState} from 'react';
import Header from '../components/Header.jsx'
import Search from '../components/Search.jsx'
import Categories from '../components/Categories.jsx'
import Carousel from '../components/Carousel.jsx'
import CarouselItem from '../components/CarouselItem.jsx'
import Footer from '../components/Footer.jsx';
import '../assets/styles/App.scss';


const App = () => {
    const [ videos, setVideos ] = useState({ mylist: [], trends: [], originals: [] });

    useEffect(() => {
        fetch('http://localhost:3000/initalState')
            .then(response => response.json())
            .then(data => setVideos(data))

    }, []);

    console.log(videos)

    return (
    <div className="App">
        <Header></Header>
        <Search></Search>
        {
            videos.mylist.lenght > 0 && 
            <Categories title="My list">
                <Carousel>
                    <CarouselItem/>
                </Carousel>
            </Categories>
        }
        <Categories title="Most Viewed">
            <Carousel>
                {
                    videos.trends.map(item =>
                        <CarouselItem key={item.id} {...item}></CarouselItem>
                        )
                }
            </Carousel>
        </Categories>
        <Categories title="Recent Added">
            <Carousel>
                {
                    videos.originals.map(item => 
                        <CarouselItem key={item.id} {...item}></CarouselItem>
                        )
                }
            </Carousel>
        </Categories>
        <Footer></Footer>
    </div>
)}

export default App;
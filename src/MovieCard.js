import React from "react";
class MovieCard extends React.Component {

    constructor() {
        super();
        this.state = {
            title: "The Avengers",
            plot: "Marvel's The Avengers redirects here.For the original comic book characters, see Avengers(comics).For other works in the Marvel Comics universe, see Avenger(disambiguation) § Marvel Comics universe The Avengers(Marvel Cinematic Universe) redirects here.For the superhero team, see Avengers(Marvel Cinematic Universe).",
            price: 199,
            rating: 8.9
        }
    }

    render() {
        const { plot, price, rating } = this.state;
        return (
            < div className="main" >
                < div className="movie-card" >
                    < div className="left" >
                        <img alt="Movie Poster" src="https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg" />
                    </div >
                    < div className="right" >
                        < div className="title" >{this.state.title}</div >
                        < div className="plot" >{plot}</div >
                        < div className="plot" >${price}</div >
                        < div className="footer" >
                            < div className="rating" >{rating}</div >
                            < div className="star-dis" >
                                <img alt="star" className="str-btn" src="https://cdn-icons-png.flaticon.com/128/1828/1828901.png" />
                                <img alt="star" className="stars" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" />
                                <img alt="star" className="str-btn" src="https://cdn-icons-png.flaticon.com/128/20/20183.png" />
                                <span>0</span>
                            </div >
                            <button className="favourite-btn">Favourite</button>
                            <button className="cart-btn">Add to Cart</button>
                        </div >
                    </div >
                </div >
            </div >
        )
    }
}

export default MovieCard;
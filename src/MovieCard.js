import React from "react";
class MovieCard extends React.Component {
    render() {
        return (
            < div className="main" >
                < div className="movie-card" >
                    < div className="left" >
                        <img alt="Movie Poster" src="" />
                    </div >
                    < div className="right" >
                        < div className="title" >The Avengers</div >
                        < div className="plot" >Love you 3000</div >
                        < div className="plot" >$199.00</div >
                        < div className="footer" >
                            < div className="rating" >8.9</div >
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
import React from "react";
class MovieCard extends React.Component {
    render() {
        return (
            < div className="main" >
                < div className="movie-card" >
                    < div className="left" >
                        <img alt="Movie Poster" />
                    </div >
                    < div className="right" >
                        < div className="title" >The Avengers</div >
                        < div className="plot" >Love you 3000</div >
                        < div className="plot" >$199.00</div >
                        < div className="footer" >
                            < div className="rating" >8.9</div >
                            < div className="stars" >star</div >
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
const Hero = () => {

    return (
        <main className="hero container">

            <div className="hero-content">
                <h1>YOUR FEET DESERVES BEST</h1>
                <p>YOUR FEET DESERVES BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVES BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
            
            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary-btn">Category</button>
            </div>

            <div className="shopping">
                <p>Also Available On</p>

                <div className="brand-icons">
                    <img src="/images/flipkart.png" alt="flipkart-logo" width = "40" height="40"></img>
                    <img src="/images/amazon.png" alt="amazon-logo" width = "60" height="40"></img>
                </div>
            </div>
            </div>

            <div className="hero-image">
                <img src= "/images/shoe.png" alt = "shoe" width = "480" height="600" />   
            </div>
        
        </main>
    );

};

export default Hero;
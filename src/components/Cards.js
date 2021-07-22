import CardItem from "./CardItem"

function Cards() {
    return (
        <div className='cards'>
            <video id="background-video" loop autoPlay>
                <source src={require('../videos/video-3.mp4').default} type="video/mp4" />
            </video>
            <div className='hero'>
            <h1>Projects Overview</h1>
            <h2>"Any sufficiently advanced technology is indistinguishable from Magic"<br></br>Arthur C. Clarke</h2>
            </div>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src = {require('../images/Mr bean faces/naughty_mr.bean_gif_calendar_background_5.gif').default}
                        text= "React Interactive Calendar App"
                        subtext= {[<h3>✓ Uses the browser's date API for a live calendar<br></br>✓ Daily events can be added or deleted (uses local storage)</h3>]}
                        label='Fullstack'
                        path='/calendar'
                        />
                        <CardItem 
                        src = {require('../images/Mr bean faces/breaking-bad-cast-bean2-min.jpg').default}
                        text="React Breaking Bad API"
                        subtext= {[<h3>✓ Fetch API using Async function and Await promise<br></br>✓ Filter query to render info and image from characters</h3>]}
                        label='Fullstack'
                        path='/bbapi'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src = {require('../images/Fluid lightbox popup min.png').default}
                        text="Fluid Lightbox Popup"
                        label='Frontend'
                        path='/lightbox'
                        />
                        <CardItem 
                        src = {require('../images/spacex launch.jpg').default}
                        text="Fetch SpaceX launches, GraphQL and SpaceX API "
                        label='Building in progress..'
                        path='/fullstack'
                        />
                        <CardItem 
                        src = {require('../images/Hooks-Chat-2_16X9-4-ue7i3 min.jpg').default}
                        text="React Chat App"
                        label='Building in progress..'
                        path='/fullstack'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards

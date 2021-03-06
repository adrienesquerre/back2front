import CardItem from "./CardItem"
import CardItemLink from "./CardItemLink"

function Cards() {
    return (
        <div className='cards'>
            <video id="background-video" loop autoPlay>
                <source src={require('../videos/video-compressed.mp4').default} type="video/mp4" />
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
                        subtext= {[<h3 style={{fontSize: '14px'}}>✓ Fetch API using Async function + Await promise<br></br>✓ Search bar with name filter</h3>]}
                        label='Fullstack'
                        path='/bbapi'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src = {require('../images/ECR docker terraform.jpeg').default}
                        text="Use Terraform to deploy a React app to AWS ECR"
                        subtext= {[<h3 style={{fontSize: '14px'}}>✓ The containerized weather app is deployed to AWS ECR<br></br>✓ Terraform & React repos available</h3>]}
                        label='Video'
                        path='/videos'
                        />

                        <CardItem 
                        src = {require('../images/Vid-thumbnail.png').default}
                        text="React Overview, How it works, Hooks"
                        subtext= {[<h3 style={{fontSize: '14px'}}>✓ The video is a bit crappy, but the content is really good<br></br>✓ Learn how React works under the hood</h3>]}
                        label='Video'
                        path='/videos'
                        />
                        <CardItemLink 
                        src = {require('../images/Diary.jpg').default}
                        text="Node.js CRUD app"
                        subtext= {[<h3>✓ Google authentication<br></br>✓ Public/private stories are stored in a cloud MongoDB database</h3>]}
                        label='Back-end'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src = {require('../images/Lightbox grid thumbnail min.jpg').default}
                        subtext= {[<h3>✓ Responsive gird of images with soft zoom effect on hover<br></br>✓ HD Full screen image pop up on click</h3>]}
                        text="Fluid Lightbox Popup"
                        label='Frontend'
                        path='/lightbox'
                        />
                        <CardItem 
                        src = {require('../images/default-image.jpg').default}
                        text={[<cards__item__text style={{fontSize: '24px'}}><center><i class="fas fa-wrench fa-spin"></i>&nbsp;&nbsp;Coming Soon !</center></cards__item__text>]}
                        label='Under construction'                     
                        />
                        <CardItem 
                        src = {require('../images/default-image.jpg').default}
                        text={[<cards__item__text style={{fontSize: '24px'}}><center><i class="fas fa-wrench fa-spin"></i>&nbsp;&nbsp;Coming Soon !</center></cards__item__text>]}
                        label='Under construction'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards

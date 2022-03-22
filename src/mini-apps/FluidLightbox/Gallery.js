import React, {useState} from 'react';
import './gallery.css'
import CloseIcon from '@material-ui/icons/Close';
import Img1 from './Fullimages/Bath Chill FULL.jpg'
import Img2 from './Fullimages/Countryside FULL.jpg'
import Img3 from './Fullimages/Cruise FULL.jpg'
import Img4 from './Fullimages/France FULL.jpg'
import Img5 from './Fullimages/Mountains FULL.jpg'
import Img6 from './Fullimages/Outdoor Bath FULL.jpg'
import Img7 from './Fullimages/Pool FULL.png'
import Img8 from './Fullimages/River FULL.jpg'
import Img9 from './Fullimages/San Pedro Cactus FULL.jpg'
import Img10 from './Fullimages/Sea FULL.jpg'
import Img11 from './Fullimages/Seaside FULL.jpg'
import Img12 from './Fullimages/Thunder FULL.jpg'


const Gallery = () => {

    let data =[
        {
            id: 1,
            imgSrc: Img1,
            caption: "Just chillin'",
        },
        {
            id: 2,
            imgSrc: Img2,
            caption: "Contemplation",
        },
        {
            id: 3,
            imgSrc: Img3,
            caption: "Don't wake up Daddy",
        },
        {
            id: 4,
            imgSrc: Img4,
            caption: "Somewhere in France",
        },
        {
            id: 5,
            imgSrc: Img5,
            caption: "Silverton, CO, USA",
        },
        {
            id: 6,
            imgSrc: Img6,
            caption: "Outdoor bath",
        },
        {
            id: 7,
            imgSrc: Img7,
            caption: "Time for fun",
        },
        {
            id: 8,
            imgSrc: Img8,
            caption: "Canada",
        },
        {
            id: 9,
            imgSrc: Img9,
            caption: "San Pedro Cactus near Quito",
        },
        {
            id: 10,
            imgSrc: Img10,
            caption: "Portugal",
        },
        {
            id: 11,
            imgSrc: Img11,
            caption: "Ocean breeze",
        },
        {
            id: 12,
            imgSrc: Img12,
            caption: "Thunder",
        },
    ]

    const [modal, setModal] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModal(true);
    }

    return(    
        <>
        <div className={modal? "modal open" : "modal"}>
        <img src={tempimgSrc} />
        <CloseIcon onClick={() => setModal(false)} />
        </div>
        <div className="gallery">
            {data.map((item, index)=> {
                return(
                    <div class="img-container">
                    <div className="pics" key={index} onClick={()=> getImg(item.imgSrc)}>
                        <img src={item.imgSrc}></img>
                        <h2 className="gal-txt">{item.caption}</h2>
                    </div>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Gallery
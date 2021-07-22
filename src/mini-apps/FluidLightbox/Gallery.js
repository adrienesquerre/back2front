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
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        },
        {
            id: 7,
            imgSrc: Img7,
        },
        {
            id: 8,
            imgSrc: Img8,
        },
        {
            id: 9,
            imgSrc: Img9,
        },
        {
            id: 10,
            imgSrc: Img10,
        },
        {
            id: 11,
            imgSrc: Img11,
        },
        {
            id: 12,
            imgSrc: Img12,
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
                    <div className="pics" key={index} onClick={()=> getImg(item.imgSrc)}>
                        <img src={item.imgSrc} style={{width: '100%'}}></img>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Gallery
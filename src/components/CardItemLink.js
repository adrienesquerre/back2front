import React from 'react'
import { ExternalLink } from 'react-external-link';
import './Cards.css';

function CardItemLink(props) {
    return (
        <>
            <li className="cards__item">
                <ExternalLink href="https://online-diary-adrien.up.railway.app/" className="cards__item__link">
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <img src={props.src} alt="Travel"
                        className="cards__item__img" />
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{props.text}</h5>
                        <h3 className="subtext">{props.subtext}</h3>
                    </div>
                </ExternalLink>
            </li>
        </>
    )
}

export default CardItemLink

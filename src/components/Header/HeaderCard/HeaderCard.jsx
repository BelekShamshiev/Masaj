import React from 'react';
import s from "../Header.module.scss"
const HeaderCard = ({title}) => {
    return (
        <div>
               <div className={s.header_card}>
            <div className={s.header_card_title}>
                <p>{title}</p>
            </div>
            <div className={s.header_card_title_btn}>
                <button>ПОДРОБНЕЕ</button>
            </div>
          </div>
        </div>
    );
};

export default HeaderCard;
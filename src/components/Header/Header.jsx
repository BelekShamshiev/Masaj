import React from "react";
import s from "./Header.module.scss";
import Image from "next/image";
import { card } from "@/constans/card";
import HeaderCard from "./HeaderCard/HeaderCard";
const Header = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <div className={s.header_title}>
          <div className={s.header_title_logo}>
            <Image src="/logo.svg" alt="logo" width={150} height={150}></Image>
          </div>
          <div className={s.header_title_desc}>
            <h1>Никнейм</h1>
            <div className={s.header_title_head}>
              <p>Расслабление, оздоровление, блаженство.</p>
            </div>
          </div>
       
        </div> 
         <div className={s.header_all_card}>
            {card.map((item) => {
                return (
                    <HeaderCard
                    title={item.title}
                    />
                )
            })}
         </div>
         <div className={s.header_network}>
            
         </div>
      </div>
    </div>
  );
};

export default Header;

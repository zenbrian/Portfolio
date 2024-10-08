import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'
// 檔案的最上方加入
/* eslint-disable @typescript-eslint/no-unused-vars */
const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item, idx) => (
          <BentoGridItem
            id ={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
          ))}
      </BentoGrid>
    </section>
  )
}

export default Grid
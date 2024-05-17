import React from "react";
import { VideoCardGroupContainer, Title, ExtraLink } from "./styles";
import VideoCard from "./components/VideoCard";
import Slider, { SliderItem } from "./components/Slider";

function Carousel({ ignoreFirstVideo, category }) {
  const categoryTitle = category.title;
  const categoryColor = category.color.HEX;
  const categoryExtraLink = category.extra_link;
  const { videos } = category;

  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || "red" }}>{categoryTitle}</Title>
          {categoryExtraLink && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
          )}
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.title}>
              <VideoCard
                videoTitle={video.title}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;

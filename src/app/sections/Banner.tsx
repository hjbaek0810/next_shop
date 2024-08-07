'use client';

import Slider from '@components/Slider';

/* TODO: 임시 로컬 이미지 사용 */
const Banner = () => (
  <Slider type="fade">
    <Slider.List height="sizing-640">
      <Slider.Item>
        <Slider.ClickableImage
          src="/img/slider_1.jpeg"
          alt="test_slider_01"
          redirectTo="/news/1"
        />
      </Slider.Item>
      <Slider.Item>
        <Slider.ClickableImage
          src="/img/slider_2.jpeg"
          alt="test_slider_02"
          redirectTo="/news/2"
        />
      </Slider.Item>
      <Slider.Item>
        <Slider.ClickableImage
          src="/img/slider_3.jpeg"
          alt="test_slider_03"
          redirectTo="/news/3"
        />
      </Slider.Item>
      <Slider.Item>
        <Slider.ClickableImage
          src="/img/slider_4.jpeg"
          alt="test_slider_04"
          redirectTo="/news/4"
        />
      </Slider.Item>
    </Slider.List>
  </Slider>
);

export default Banner;

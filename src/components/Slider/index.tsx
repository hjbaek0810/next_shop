'use client';

import {
  Children,
  type PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

import clsx from 'clsx';
import Image from 'next/image';

import { passPropsToSingleChild } from '@/utils/render';
import { sprinkles } from '@styles/sprinkles.css';

import * as css from './slider.css';

import type { sizing } from '@styles/tokens';

type SliderActionContextType = {
  updateShowIndex: (index: number) => void;
};

type SliderValueContextType = {
  showIndex: number;
  showDot?: boolean;
};

type SliderListPropsType = {
  width?: keyof typeof sizing;
  height: keyof typeof sizing;
};

type SliderItemPropsType = {
  itemIndex?: number;
};

const SliderActionContext = createContext<SliderActionContextType | null>(null);
const SliderValueContext = createContext<SliderValueContextType | null>(null);

const useSliderActionContext = () => {
  const context = useContext(SliderActionContext);

  if (!context) {
    throw new Error('This component must be used within Slider component');
  }

  return context;
};

const useSliderValueContext = () => {
  const context = useContext(SliderValueContext);

  if (!context) {
    throw new Error('This component must be used within Slider component');
  }

  return context;
};

const SliderRoot = ({
  showDot = true,
  children,
}: PropsWithChildren<Pick<SliderValueContextType, 'showDot'>>) => {
  const [showIndex, setShowIndex] = useState<number>(0);
  const values = useMemo(
    () => ({
      showIndex,
      showDot,
    }),
    [showDot, showIndex],
  );

  const actions = useMemo(
    () => ({
      updateShowIndex: setShowIndex,
    }),
    [],
  );

  return (
    <SliderActionContext.Provider value={actions}>
      <SliderValueContext.Provider value={values}>
        <div className={css.sliderRoot}>{children}</div>
      </SliderValueContext.Provider>
    </SliderActionContext.Provider>
  );
};

const SliderList = ({
  width = 'sizing-fill',
  height,
  children,
}: PropsWithChildren<SliderListPropsType>) => {
  const { updateShowIndex } = useSliderActionContext();
  const { showIndex, showDot } = useSliderValueContext();

  const handleDotClick = (index: number) => updateShowIndex(index);

  const modifiedChildren = Children.map(children, (child, index) =>
    passPropsToSingleChild(child, {
      itemIndex: index,
    }),
  );

  return (
    <>
      <ul
        className={clsx(
          css.sliderList,
          sprinkles({
            width,
            height,
          }),
        )}
      >
        {modifiedChildren}
      </ul>
      {/* dot button */}
      {/* TODO : inner, outer 보완 */}
      {showDot && modifiedChildren?.length && (
        <ul className={css.sliderDotList}>
          {Array.from({ length: modifiedChildren.length }, (_, index) => {
            return (
              <li key={`dot-${index}`}>
                <button
                  className={css.sliderDotItem({ active: index === showIndex })}
                  onClick={() => handleDotClick(index)}
                />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

const SliderItem = ({
  itemIndex,
  children,
}: PropsWithChildren<SliderItemPropsType>) => {
  const { showIndex } = useSliderValueContext();

  return (
    <li className={css.sliderItem({ active: itemIndex === showIndex })}>
      {children}
    </li>
  );
};

const SliderPhoto = ({ src, alt }: { src: string; alt: string }) => {
  return <Image src={src} alt={alt} fill />;
};

const Slider = Object.assign(SliderRoot, {
  List: SliderList,
  Item: SliderItem,
  Photo: SliderPhoto,
});

export default Slider;

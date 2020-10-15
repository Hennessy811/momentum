import React, { useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';
import Unsplash, { toJson } from 'unsplash-js';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
// @ts-ignore
import ReactFullpage from '@fullpage/react-fullpage';
import cn from 'classnames';
import { PhotoRes } from '../../interfaces/photos';

import styles from './Unsplash.module.scss';

const APP_ACCESS_KEY = '2bFrn9jWOFmglLRoDG4gif2rbNpEvyAkjuarwTQ3458';
const unsplash = new Unsplash({ accessKey: APP_ACCESS_KEY });

const UnsplashComponent = () => {
  const [dailyPhoto, setDailyPhoto] = useLocalStorage('dailyPhoto');
  const [photosList, setPhotosList] = useLocalStorage<any[]>('photosList');
  const [photos, setPhotos] = useState<PhotoRes[]>([]);

  console.log(photosList);

  useEffect(() => {
    if (!photosList?.length) {
      console.log('go');

      // @ts-ignore
      unsplash.photos.listPhotos(2, 15, 'popular')
        .then(toJson)
        .then((json: PhotoRes[]) => {
          setPhotos(json);
          // setPhotosList(json.map((i) => ({ url: i.urls.full, color: i.color, likes: i.likes })));
          setPhotosList(json);
        });
    } else {
      setPhotos(photosList);
    }
  }, []);

  if (!photos.length) return <div>Loading...</div>;

  return (
    <ReactFullpage
    // fullpage options
      licenseKey="YOUR_KEY_HERE"
      scrollingSpeed={1000} /* Options here */

      // @ts-ignore
      render={({ state, fullpageApi }) => (
        <ReactFullpage.Wrapper>
          {photos.map((i) => (
            <div className={cn('section', styles.section)}>
              <img src={i?.urls?.full} className={styles.photoItemImg} alt="" />
            </div>
          ))}
        </ReactFullpage.Wrapper>
      )}
    />
  );
};

export default UnsplashComponent;

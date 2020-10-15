import React, { useEffect, useState } from 'react';
import {
  useLocalStorage,
} from 'react-use';
import Unsplash, { toJson } from 'unsplash-js';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { PhotoRes } from '../../interfaces/photos';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

import styles from './Unsplash.module.scss';

const APP_ACCESS_KEY = '2bFrn9jWOFmglLRoDG4gif2rbNpEvyAkjuarwTQ3458';
const unsplash = new Unsplash({ accessKey: APP_ACCESS_KEY });

const UnsplashComponent = () => {
  const [dailyPhoto, setDailyPhoto] = useLocalStorage<PhotoRes | null>('dailyPhoto');
  const [photosList, setPhotosList] = useLocalStorage<PhotoRes[]>('photosList');
  const [index, setIndex] = useLocalStorage<number>('photoIndex', 0);
  const [photos, setPhotos] = useState<PhotoRes[]>([]);

  useEffect(() => {
    if (!photosList?.length) {
    // @ts-ignore
      unsplash.photos.listPhotos(1, 30, 'popular')
        .then(toJson)
        .then((json: PhotoRes[]) => {
          setPhotos(json);
          setPhotosList(json);
        });
    } else {
      setPhotos(photosList);
    }
  }, []);

  useEffect(() => {
    // @ts-ignore
    setDailyPhoto(photos[index]);
  }, [photos, index]);

  if (!dailyPhoto) return <div>Loading...</div>;
  if (index === undefined) return null;

  return (
    <div className={styles.photosContainer}>
      <div className={styles.photoItem} style={{ background: dailyPhoto.color }}>
        <LazyLoadImage
          effect="black-and-white"
          className={styles.photoItemImg}
          src={dailyPhoto.urls.full}
          alt={dailyPhoto.description}
        />
      </div>
    </div>
  );
};

export default UnsplashComponent;

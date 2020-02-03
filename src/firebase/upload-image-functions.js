import firebase from './firebase';
import { storage } from './firebase';

export const uploadOnStorageAndSetLinkDb_1 = (
  selectedCategory,
  placeSelected,
  imageFiles
) => {
  const storageRef = storage.ref(
    `places/${selectedCategory}/${placeSelected.name}/${imageFiles[0].name}`
  );
  let task = storageRef.put(imageFiles[0]);
  return task.on(
    'state_changed',
    snapshot => {},
    error => {},
    () => {
      const db = firebase.firestore().collection('places');
      storageRef.getDownloadURL().then(url => {
        db.onSnapshot(snapshot => {
          snapshot.docs.map(doc => {
            db.doc(doc.id)
              .update({
                imageLink_1: url
              })
              .then(() => console.log('Upload / Edit success'))
              .catch(error =>
                console.error('Error updating image link ref: ', error)
              );
          });
        });
      });
      console.log('Images successfully updated on storage');
    }
  );
};

export const uploadOnStorageAndSetLinkDb_2 = (
  selectedCategory,
  placeSelected,
  imageFiles
) => {
  const storageRef = storage.ref(
    `places/${selectedCategory}/${placeSelected.name}/${imageFiles[1].name}`
  );
  let task = storageRef.put(imageFiles[1]);
  return task.on(
    'state_changed',
    snapshot => {},
    error => {},
    () => {
      const db = firebase.firestore().collection('places');
      storageRef.getDownloadURL().then(url => {
        db.onSnapshot(snapshot => {
          snapshot.docs.map(doc => {
            db.doc(doc.id)
              .update({
                imageLink_2: url
              })
              .then(() => console.log('Upload / Edit success'))
              .catch(error =>
                console.error('Error updating image link ref: ', error)
              );
          });
        });
      });
      console.log('Images successfully updated on storage');
    }
  );
};

export const uploadOnStorageAndSetLinkDb_3 = (
  selectedCategory,
  placeSelected,
  imageFiles
) => {
  const storageRef = storage.ref(
    `places/${selectedCategory}/${placeSelected.name}/${imageFiles[2].name}`
  );
  let task = storageRef.put(imageFiles[2]);
  return task.on(
    'state_changed',
    snapshot => {},
    error => {},
    () => {
      const db = firebase.firestore().collection('places');
      storageRef.getDownloadURL().then(url => {
        db.onSnapshot(snapshot => {
          snapshot.docs.map(doc => {
            db.doc(doc.id)
              .update({
                imageLink_3: url
              })
              .then(() => console.log('Upload / Edit success'))
              .catch(error =>
                console.error('Error updating image link ref: ', error)
              );
          });
        });
      });
      console.log('Images successfully updated on storage');
    }
  );
};

export const uploadOnStorageAndSetLinkDb_4 = (
  selectedCategory,
  placeSelected,
  imageFiles
) => {
  const storageRef = storage.ref(
    `places/${selectedCategory}/${placeSelected.name}/${imageFiles[3].name}`
  );
  let task = storageRef.put(imageFiles[3]);
  return task.on(
    'state_changed',
    snapshot => {},
    error => {},
    () => {
      const db = firebase.firestore().collection('places');
      storageRef.getDownloadURL().then(url => {
        db.onSnapshot(snapshot => {
          snapshot.docs.map(doc => {
            db.doc(doc.id)
              .update({
                imageLink_4: url
              })
              .then(() => console.log('Upload / Edit success'))
              .catch(error =>
                console.error('Error updating image link ref: ', error)
              );
          });
        });
      });
      console.log('Images successfully updated on storage');
    }
  );
};

export const uploadOnStorageAndSetLinkDb_5 = (
  selectedCategory,
  placeSelected,
  imageFiles,
  successMessageUploadImage,
  setSuccessMessageUploadImage
) => {
  const storageRef = storage.ref(
    `places/${selectedCategory}/${placeSelected.name}/${imageFiles[4].name}`
  );
  let task = storageRef.put(imageFiles[4]);
  return task.on(
    'state_changed',
    snapshot => {},
    error => {},
    () => {
      const db = firebase.firestore().collection('places');
      storageRef.getDownloadURL().then(url => {
        db.onSnapshot(snapshot => {
          snapshot.docs.map(doc => {
            db.doc(doc.id)
              .update({
                imageLink_5: url
              })
              .then(() => {
                setSuccessMessageUploadImage(true);
                setTimeout(() => {
                  setSuccessMessageUploadImage(false);
                }, 2000);
              })
              .catch(error =>
                console.error('Error updating image link ref: ', error)
              );
          });
        });
      });
      console.log('Images successfully updated on storage');
    }
  );
};

import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal';
import { ImageGalleryItemImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image }) => {
  const { webformatURL, largeImageURL, tags } = image;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(state => !state);
  };

  return (
    <>
      <ImageGalleryItemImg
        src={webformatURL}
        alt={tags}
        onClick={toggleModal}
      />
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          largeImageURL={largeImageURL}
          tags={tags}
          onClose={toggleModal}
        />
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};

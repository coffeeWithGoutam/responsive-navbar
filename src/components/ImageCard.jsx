import PropTypes from 'prop-types';

const ImageCard = ({ imageUrl, altText }) => {
  return (
    <div className="rounded-lg overflow-hidden w-[35rem] h-[26rem]">
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

ImageCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default ImageCard;
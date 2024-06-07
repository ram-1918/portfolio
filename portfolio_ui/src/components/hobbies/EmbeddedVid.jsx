import PropTypes from 'prop-types';

const EmbeddedVid = ({embedId}) => {
    return (
        <div className='border w-88 h-56'>
            <iframe
            className='w-full h-full rounded-lg shadow-lg'
            src={`https://www.youtube.com/embed/${embedId}`}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title="Embedded Yt"
            >
            </iframe>
        </div>
    );
};
EmbeddedVid.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default EmbeddedVid;
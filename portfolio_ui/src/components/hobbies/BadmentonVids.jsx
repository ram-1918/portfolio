import EmbeddedVid from './EmbeddedVid';
import testvideo from '../../images/samplevideo.mp4';

export default function BadmentonVids() {
    return (
        <div id="cricketvids" className="w-full p-2 grid grid-cols-3 grid-flow-row gap-4">
            <EmbeddedVideo video={testvideo} />
            <EmbeddedVideo video={testvideo} />
            <EmbeddedVid embedId="V0wF5ij5hwM" />
            <EmbeddedVid embedId="STScKOUpXR8" />
            <EmbeddedVid embedId="sNlDCrrBA5c" />
            <EmbeddedVid embedId="b1q5N06U07g" />
            <EmbeddedVid embedId="3zOCInbXzy8" />
            <EmbeddedVid embedId="rokGy0huYEA" />
        </div>
    );
}

const EmbeddedVideo = ({video}) => {
    return (
        <video src={video} className='rounded-xl shadow-lg' controls="controls" autoplay="true" />
    )
}
import { useParams } from "react-router-dom";
import './read.css'


const ReadPage = () => {
    const { id } = useParams();

    // return <embed src={`https:/www.gutenberg.org/ebooks/${id}.txt.utf-8`} width="100%" height="1500" />

    return <embed src={`    https://www.gutenberg.org/cache/epub/${id}/pg${id}-images.html`} width="100%" height="1500" />

    // https://www.gutenberg.org/cache/epub/2641/pg2641-images.html
};

export default ReadPage;
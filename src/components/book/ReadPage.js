import { useParams } from "react-router-dom";


const ReadPage = () => {
    const { id } = useParams();

    return <embed src={`https:/www.gutenberg.org/ebooks/${id}.txt.utf-8`} width="100%" height="600" />
};

export default ReadPage;
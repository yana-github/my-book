import { useParams } from 'react-router-dom';
import styles from "../../styles/readPage.module.css";

const ReadPage = () => {
  const { id } = useParams();

  return (
    <>
    <embed
      src={`    https://www.gutenberg.org/cache/epub/${id}/pg${id}-images.html`}
      width='100%'
      height='1500'
    />
    </>
  );
};

export default ReadPage;
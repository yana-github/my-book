import { useParams } from 'react-router-dom';
import styles from "../../styles/readPage.module.css";
import ScreenContainer from "../ScreenContsiner";

const ReadPage = () => {
  const { id } = useParams();

  return (
   <ScreenContainer>
    <embed
      src={`    https://www.gutenberg.org/cache/epub/${id}/pg${id}-images.html`}
      width='100%'
      height='900'
      type="text/html"
      id="element"
    />
    </ScreenContainer>
  );
};

export default ReadPage;
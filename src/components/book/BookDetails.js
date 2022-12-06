const BookDetails = (props) => {
  const { bookDetail } = props;
  console.log(bookDetail);

  return (
    <>
      <h1>Поздравляем!</h1>
      <h2>Вы читаете</h2>
      {`${props.url}`}/
    </>
  );
};

export default BookDetails;

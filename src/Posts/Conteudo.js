export default function Conteudo(props) {
  const { conteudoImage, conteudoImageAlt } = props;

  return (
    <div class="conteudo">
      <img src={conteudoImage} alt={conteudoImageAlt} />
    </div>
  );
};

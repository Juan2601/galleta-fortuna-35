import './styles/PhraseCard.css'

const PhraseCard = ({phraseRandom}) => {

const {phrase, author} = phraseRandom

  return (
    <div>
      <p className='card__phrase'>{phrase}</p>
      <p className='card__author'>{author}</p>
    </div>

  )
}

export default PhraseCard
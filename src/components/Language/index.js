import './index.css'

const Language = props => {
  const {details} = props
  const {imageUrl, imageAltText} = details

  return (
    <>
      <li className="item-container">
        <img className="item-image" src={imageUrl} alt={`${imageAltText}`} />
      </li>
    </>
  )
}
export default Language

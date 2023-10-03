const Title = ({titleProp}) => {
    const country = titleProp.country
    return (
        <h1>Upcoming Film Releases For {country}</h1>
    )
}
export default Title
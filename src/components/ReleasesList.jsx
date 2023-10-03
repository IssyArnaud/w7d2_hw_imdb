import Film from "./Film"

const ReleasesList = ({releasesProp}) => {
    const filmReactComponents = releasesProp.map((film) => {
        return <Film key={film.id} name={film.name}>{film.url}</Film>
    })
    return (
            <ul>
            {filmReactComponents}
            </ul>
    )
}
export default ReleasesList
const ExtraInfo = ({extraInfoProp}) => {
    const url = extraInfoProp.url
    const info = extraInfoProp.info
    return (
        <a href={url}>{info}</a>
    )
}
export default ExtraInfo
import React, {useState} from "react"
import ReleasesList from "../components/ReleasesList"
import Title from "../components/Title"
import ExtraInfo from "../components/ExtraInfo"

const ReleasesBox = () => {
    const [releases, setReleases] = useState(
        [
            {
                id: 1,
                name: "Spider-Man: Into the Spider-Verse",
                url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
                },
            {
                id: 2,
                name: "Life Itself",
                url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
                },
            {
                id: 3,
                name: "Mary Queen of Scots",
                url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
                },
            {
                id: 4,
                name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
                },
            {
                id: 5,
                name: "Captain Marvel",
                url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
                }
        ]
    )
    const [title, setTitle] = useState(
        {country: "UK"}
    )
    const [extraInfo, setExtra] = useState(
        {info:"View more upcoming releases >>", url:"https://www.imdb.com/calendar/?region=gb"}
    )
    return (
        <>
        <Title titleProp={title}/>
        <ReleasesList releasesProp={releases}/>
        <ExtraInfo extraInfoProp={extraInfo}/>
        </>
    )
}
export default ReleasesBox
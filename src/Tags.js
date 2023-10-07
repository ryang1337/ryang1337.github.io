import { Link } from 'react-router-dom'

const Tags = ({tags}) => {
    const tagDisplay = tags.map((tag, i) => {
        const searchParams = `?tags=${encodeURIComponent(tag)}`
        return <Link to={{
            pathname: "/projects",
            search: searchParams
        }} className="tagItem" key={i}>{tag}</Link>;
    })

    return (
        <div>
            { tagDisplay }
        </div>
    )
}

export default Tags
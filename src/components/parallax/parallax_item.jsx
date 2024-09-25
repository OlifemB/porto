export const ParallaxItem = ({ item, style }) => {
    switch (item.type) {
        case 'block':
            return <div className={item.className} />
        case 'image':
            return (
                <img
                    src={item.src}
                    width={item.width}
                    alt={''}
                    className={item.className}
                    // Make the image display full width
                />
            )
        case 'text':
            return (
                <div
                    style={style}
                    className={item.className + ' drop-shadow-xl '}
                >
                    {item.text}
                </div>
            )
        case 'list':
            return (
                <div className={item.className}>
                    {item.list.map((li, listIndex) => (
                        <div key={'listIndex_' + listIndex}>{li}</div>
                    ))}
                </div>
            )
        case 'link':
            return (
                <animated.a
                    style={style}
                    href={item.href}
                    children={item.text}
                    className={item.className}
                />
            )
        default:
            return null
    }
}

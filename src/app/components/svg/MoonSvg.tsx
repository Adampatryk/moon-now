
interface MoonSvgProps {
    shadePercentage: number,
    shadeSide: "left" | "right"
}

const MoonSvg = (props: MoonSvgProps) => {
    const width = 330
    const height = 330

    const viewBox = `0 0 ${width} ${height}`
    const shadePath = `
        M ${width/2} 0 
        A ${width/2} ${height/2} 0 0 0 ${width/2} ${height}
        M ${width/2} 0 
        A ${width/2*(props.shadePercentage)} ${height/2} 0 0 1 ${width/2} ${height}
    `

    return (
        <svg
            width={width}
            height={height}
            viewBox={viewBox}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="moon">
                <circle id="body" cx={width/2} cy={height/2} r={width/2} fill="white" />
                <g id="craters">
                    <ellipse
                    id="Ellipse 3"
                    cx={74.6846}
                    cy={216.398}
                    rx={28.7601}
                    ry={31}
                    transform="rotate(-12.2543 74.6846 216.398)"
                    fill="#F2F2F2"
                    />
                    <ellipse
                    id="Ellipse 7"
                    cx={268.583}
                    cy={123.649}
                    rx={17.8961}
                    ry={19.2899}
                    transform="rotate(-12.2543 268.583 123.649)"
                    fill="#FAF7F7"
                    />
                    <ellipse
                    id="Ellipse 6"
                    cx={88.7248}
                    cy={68.4205}
                    rx={26.1349}
                    ry={24.43}
                    transform="rotate(-12.2543 88.7248 68.4205)"
                    fill="#F2F2F2"
                    />
                    <ellipse
                    id="Ellipse 4"
                    cx={185.715}
                    cy={253.225}
                    rx={51.5323}
                    ry={53.5066}
                    transform="rotate(-12.2543 185.715 253.225)"
                    fill="#F7F7F7"
                    />
                    <ellipse
                    id="Ellipse 5"
                    cx={139.16}
                    cy={146.314}
                    rx={39.3791}
                    ry={40.8878}
                    transform="rotate(-12.2543 139.16 146.314)"
                    fill="#FAFAFA"
                    />
                </g>
                <path
                    id="shade"
                    d={shadePath}
                    fill="black"
                    opacity={0.8}
                />
            </g>
        </svg>
    )
}
export default MoonSvg

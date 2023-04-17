import React from "react"

export default function Results(props) {
    return (
        props.name.map(row =>
            <div key={row.id}>
            {row.name}
            </div>
        )
    );
}
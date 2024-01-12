import React from 'react'

export default function card(props) {
    return (
        <>
            <div className="card m-3 bg-black" style={{width: "82rem" , height: "35rem"}}>
                <div className="card-body">
                            <img src={`./img/1 (${props.imgNo}).png`} alt="" />
                    <p className="card-text text-white">astronaut with a delivery man's bag on his back an</p>
                </div>
            </div>
        </>
    )
}

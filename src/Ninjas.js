import React from 'react';

const Ninjas = ({ ninjas, deleteNinja }) => {
    const ninjaList = ninjas.map(ninja => {
        if (ninja.age > 20) {
            return (
                <div className="ninja" key={ninja.id}>
                    <div className="name">Name {ninja.name}</div>
                    <div className="age">Age {ninja.age}</div>
                    <button onClick={() => { deleteNinja(ninja.id) }}>Delete Ninja</button>
                </div>
            )
        } else {
            return null
        }
    })

    return (
        <div className="ninja-List" >
            {ninjaList}
        </div>
    )
}

export default Ninjas;
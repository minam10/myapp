// import React, { useEffect } from 'react'
// import axios from 'axios'

// const Axios = () => {
//     //  first way using then and catch(not recommend)
//     useEffect(()=>{
//     // using then and catch
//        axios.get("https://api.github.com/users").then(x =>{
//         let {data}= x;
//         console.log(x);
//        }).catch(err=> console.log(err));
//         //axios returns a promise we have to handle by then and catch

//     },[])
//   return (
//     <div>Axios</div>
//   )
// }

// export default Axios

// recommended way--- (async and await)

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './global.css'

const Axios = () => {
    let [users, setUsers] = useState(null);
    useEffect(() => {
        try {
            let fetchUser = async () => {
                let { data } = await axios.get("https://api.github.com/users")
                setUsers(data);
                // console.log(data);

            }
            fetchUser();

        } catch (error) {
            console.log(error);
        } finally {

        }
    }, [])

    return (
        <section>
            <article className='one'>
                {users === null ? "loading..." : users?.map(x => {
                    return <div key={x.id}>
                        <div>{x.login}</div>
                        <div>
                            <img src={x.avatar_url} alt="" />
                        </div>
                        <div>
                            <h2>org-url:{x.organizations_url}</h2>
                            </div>
                    </div>

                })}
            </article>
        </section>
    )
}

export default Axios

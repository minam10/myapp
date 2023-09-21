import React, { useState } from 'react'

const App1 = () => {
    //username, email, phone, password, skills, gender

    //userdata => Component level

    let [state, setState] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        skills: [],
        gender: ""
    })

    let { name, email, phone, password, skills, gender } = state;

    let handleChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    }

    //? solution

    // let [skill, setSkill]=useState([]);

    // let handleCheckbox=(e)=>{
    //     setSkill([...skill, e.target.value])
    // }

    //! Handling checkbox
    //1. create state for every checkbox
    //2. initial value should be true
    //3. create seperate handle functions for every checkbox
    //4. change the state according to checkbox (checked or not) [ for that, we should use - useState(!state)]
    //5. create a condition depending on the value of the state(true / false)
    //6. create one forAll state - ([])
    //7. depending on the condition we are going to add or remove an element from the array

    let [skill, setSkill] = useState([]);

    let [one, setOne] = useState(true);
    let handleOne = e => {
        setOne(!one)

        //? condition
        if (one === true) {
            setSkill([...skill, e.target.value])
        } else if (one === false) {
            skill.splice(skill.indexOf(e.target.value), 1)
            //1. starting index.. 2. no of elements want to remove.. 3.add an element
        }

    }

    let [two, setTwo] = useState(true);
    let handleTwo = e => {
        setTwo(!two)

        if (two === true) {
            setSkill([...skill, e.target.value])
        } else if (two === false) {
            skill.splice(skill.indexOf(e.target.value), 1)
        }
    }

    let [three, setThree] = useState(true);
    let handleThree = e => {
        setThree(!three)

        if (three === true) {
            setSkill([...skill, e.target.value])
        } else if (three === false) {
            skill.splice(skill.indexOf(e.target.value), 1)
        }
    }

    let [four, setFour] = useState(true);
    let handleFour = e => {
        setFour(!four)

        if (four === true) {
            setSkill([...skill, e.target.value])
        } else if (four === false) {
            skill.splice(skill.indexOf(e.target.value), 1)
        }
    }

    let [five, setFive] = useState(true);
    let handleFive = e => {
        setFive(!five)

        if (five === true) {
            setSkill([...skill, e.target.value])
        } else if (five === false) {
            skill.splice(skill.indexOf(e.target.value), 1)
        }
    }
    //! for submitting


    let handleSubmit = (e) => {
        e.preventDefault();
        console.log('form is submitted');

        let user = {
            name,
            email,
            phone,
            password,

            //new code

            skills: [...skill],
            gender,
        }
        console.log(user);
    }

    let [show, setShow] = useState(false);

    let handleShow = () => {
        setShow(!show)
    }

    return (

        // fragments

        <main>
            <form onSubmit={handleSubmit}>
                <aside>
                    <label htmlFor="name">Username :</label>
                    <input type="text" name="name" value={name} onChange={handleChange} />
                </aside>

                <aside>
                    <label htmlFor="email">email :</label>
                    <input type="email" name="email" value={email} onChange={handleChange} />
                </aside>

                <aside>
                    <label htmlFor="phone">phone :</label>
                    <input type="tel" name="phone" value={phone} onChange={handleChange} />
                </aside>

                <aside>
                    <label htmlFor="password">password :</label>
                    <input type={show ? "text" : "password"} name="password" value={password} onChange={handleChange} />

                    <button className='show' onClick={handleShow}>{show === true ? "hide" : "show"}</button>

                </aside>

                <aside>
                    <label htmlFor="gender">gender :</label>
                    <article>
                        <input type="radio" name="gender" value="Male" onChange={handleChange} />
                        <span>Male</span>
                    </article>

                    <article>
                        <input type="radio" name="gender" value="Female" onChange={handleChange} />
                        <span>Female</span>
                    </article>

                    <article>
                        <input type="radio" name="gender" value="Other" onChange={handleChange} />
                        <span>Others</span>
                    </article>
                </aside>

                <aside>
                    <label htmlFor="skills">Skills: </label>
                    <article>
                        <input type="checkbox" name="skills" value="HTML" onChange={handleOne} />
                        {""}
                        <span>HTML</span>
                    </article>

                    <article>
                        <input type="checkbox" name="skills" value="CSS" onChange={handleTwo} />
                        {""}
                        <span>CSS</span>
                    </article>

                    <article>
                        <input type="checkbox" name="skills" value="JS" onChange={handleThree} />
                        {""}
                        <span>JS</span>
                    </article>

                    <article>
                        {/*for every checkbox create a state -> initially false */}
                        <input type="checkbox" name="skills" value="REACTjs" onChange={handleFour} />
                        <span>REACTjs</span>
                    </article>

                    <article>
                        <input type="checkbox" name="skills" value="Vuejs" onChange={handleFive} />
                        <span>VUEjs</span>
                    </article>
                </aside>

            </form>

            <aside>
                <button type='submit'>Submit</button>
            </aside>
        </main>

    )
}

export default App1
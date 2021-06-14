function FormComponent(props){
    return(
        <div>
        <form>

            <input type="text" name="firstName" value={props.data.firstName} onChange={props.handleChange}/><br/>
            <input type="text" name="lastName" value={props.data.lastName} onChange={props.handleChange}/><br/>
            <input type="number" name="age" value={props.data.age} onChange={props.handleChange}/><br/>


            <label>
                <input type="radio" name="gender" value="male" checked={props.data.gender==="male"} onChange={props.handleChange}/>
            Male</label>
            <br/>
            <label>
                <input type="radio" name="gender" value="female" checked={props.data.gender==="female"} onChange={props.handleChange}/>
            Female</label>


            <br/>
            <select name="loc" value={props.data.loc} onChange={props.handleChange}>
                <option value="">Please choose one</option>
                <option value="Rome">Rome</option>
                <option value="Tokyo">Tokyo</option>
                <option value="Seoul">Seoul</option>
            </select>

            <br/>
            <label>
            <input type="checkbox" name="isVegan" checked={props.data.isVegan} onChange={props.handleChange}/>
            Vegan</label>
            <br/>
            <label>
            <input type="checkbox" name="isKosher" checked={props.data.isKosher} onChange={props.handleChange}/>
            Kosher</label>
            <br/>
            <label>
            <input type="checkbox" name="isLactose" checked={props.data.isLactose} onChange={props.handleChange}/>
            Lactose free</label>
            

            <button>Submit</button>
        </form>
        <p>Name: {props.data.firstName} {props.data.lastName}</p>
        <p>Age: {props.data.age}</p>
        <p>Gender: {props.data.gender}</p>
        <p>Location: {props.data.loc}</p>
        <p>
            Your diertary
            Vegam: {props.data.isVegan}
        </p>
        
        </div>     





    )
}

export default FormComponent
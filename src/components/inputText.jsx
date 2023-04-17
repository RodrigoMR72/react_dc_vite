export function InputText(props){

    console.log(props)
    return(
        //Type apesar de ser uma propriedade, não muda.
        <input type="text" name={props.name} id={props.id} placeholder={props.placeholder}/>

    );
}
// ou export default InputText
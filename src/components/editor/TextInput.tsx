import { Textarea } from "../ui/textarea";


type TextInputProps = {
    value:string;
    onChange:(value:string)=>void;
}
export function TextInput({value, onChange}:TextInputProps){
    return(
        <Textarea
        placeholder="Paste your text here..."
        className="min-h-45"
        value={value}
        onChange={(e)=>onChange(e.target.value)}
        />
    )
}

// ask : "why didnt we use useState here"
// bcz TextInput dosent own the data, it only displays data.
//This is called controlled component
// Parent owns state, child displays state.
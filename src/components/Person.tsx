import {Name} from './props.types'

type PersonProps = {
    name:Name
}

const Person = (props:PersonProps) => {
    return (
        <div>
            My name is {props?.name?.firstName } {props?.name?.lastName}
        </div>
    )
}

export default Person

import { IconComponent } from "@structure/IconComponent";

function RoundedButton(props) {
    return (
        <button className="rounded-full w-[50px] h-[50px]" type="button">
            <IconComponent type={props.type} />
        </button>
    );
}
export {RoundedButton};
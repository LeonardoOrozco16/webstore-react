import { LoginIcon } from "@structure/icons/LoginIcon";
import { RegisterIcon } from "@structure/icons/RegisterIcon";
function IconComponent(props) {
  const icon = {
    login: <LoginIcon />,
    register: <RegisterIcon/>
  };
  return icon[props.type];
}
export { IconComponent };

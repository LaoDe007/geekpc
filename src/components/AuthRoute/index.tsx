
import { useRoutes } from "react-router-dom";

import { hasToken } from "../../utils/storageToken";
import pathApp from "../../pages/routes";


export default function AuthRoute() {
  const pathAppTmp = hasToken() ? pathApp[1] : pathApp[0];
  const element = useRoutes(pathAppTmp);
  return element
}

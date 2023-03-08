import React from "react";
import { Navigate, useLocation } from "react-router-dom";

type Props = {
  element: React.FC;
};

export const ProtectedRoute: React.FC<Props> = ({ element: Element }) => {
  const { pathname } = useLocation();
  const apisucces = localStorage.getItem("apisucces");

  if (!apisucces && ["/landing"].includes(pathname)) {
    return <Navigate to="/" />;
  }
  return <Element />;
};

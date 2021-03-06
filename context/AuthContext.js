import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

const initialState = {
  isAuthenticated: null,
  user: {
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    updatedAt: "",
    createdAt: "",
  },
};

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const Router = useRouter();
  const [state, setState] = useState(initialState);

  // fetching user profile if he is authenticated
  useEffect(() => {
    (async () => {
      try {
        // end-point for reading profile info
        const url = "http://localhost:5000/users/profile";
        const response = await fetch(url, { credentials: "include" });
        if (response.status === 200) {
          const user = await response.json();
          setState({
            isAuthenticated: true,
            user,
          });
        } else {
          setState({
            ...initialState,
            isAuthenticated: false,
          });
        }
      } catch (error) {
        setState({
          ...initialState,
          isAuthenticated: false,
        });
        console.log(error.message);
      }
    })();
  }, []);

  const signup = async (userInfo) => {
    try {
      // end-point for registering a new user
      const url = "http://localhost:5000/users";
      // sending request with the new user info
      const response = await fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: userInfo.firstName,
          lastName: userInfo.lastName,
          password: userInfo.password,
          email: userInfo.email,
        }),
      });
      // checking if the user is successfully registered
      if (response.status === 201) {
        // user object returned by the server
        const user = await response.json();
        setState({
          isAuthenticated: true,
          user,
        });
        Router.push("/board");
      } else {
        throw new Error("Registeration Failed!");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async (credentials) => {
    try {
      // end-point for logging in
      const url = "http://localhost:5000/users/login";
      const response = await fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });

      if (response.status === 200) {
        const user = await response.json();
        setState({
          isAuthenticated: true,
          user,
        });
        Router.push("/board");
      } else {
        throw new Error("Login Failed!");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    try {
      // end-point for logining out
      const url = "http://localhost:5000/users/logout";
      const response = await fetch(url, {
        method: "POST",
        credentials: "include",
      });
      if (response.status === 200) {
        setState({
          ...initialState,
          isAuthenticated: false,
        });
        Router.push("/");
      } else {
        throw new Error("loging out failed!");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, signup, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

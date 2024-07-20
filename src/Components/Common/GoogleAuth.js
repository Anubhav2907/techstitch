import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, setDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../Utils/firebaseConfig";
import { v4 as uuidv4 } from "uuid";

const SignInwithGoogle = ({ navigateTo }) => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {}, [loggedIn]);
  let flag = false;
  return (
    <div>
      <GoogleLogin
        onSuccess={async (credentialResponse) => {
          const data = jwtDecode(credentialResponse?.credential);
          setLoggedIn(true);
          const querySnapshot = await getDocs(collection(db, "users"));
          querySnapshot.forEach((doc) => {
            if (doc.data().email === data.email) {
              flag = true;
            }
          });
          if (flag === false) {
            await setDoc(doc(db, "users", uuidv4()), {
              name: data.name,
              email: data.email,
              picture: data.picture,
            });
          }
          localStorage.setItem("email", data.email);
          localStorage.setItem("name", data.given_name);
          localStorage.setItem("fullname", data.name);
          localStorage.setItem("pic", data.picture);
          localStorage.setItem("user", JSON.stringify(data));
          navigate(navigateTo);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};
export default SignInwithGoogle;

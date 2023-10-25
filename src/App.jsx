import { FormGroup } from "./FormGroup";
import ReactSelect from "react-select";
// import { useRef, useState } from "react";
import "./styles.css";
// import { checkCountry, checkEmail, checkPassword } from "./validators";
import { useForm, useController } from "react-hook-form";

const COUNTRY_OPTIONS = [
  { label: "United States", value: "US" },
  { label: "India", value: "IN" },
  { label: "Mexico", value: "MX" },
];

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  // const emailRef = useRef();
  // const passwordRef = useRef();
  // const countryRef = useRef();
  // console.log(countryRef);

  // const [emailErrors, setEmailErrors] = useState([]);
  // const [passwordErrors, setPasswordErrors] = useState([]);
  // const [countryErrors, setCountryErrors] = useState([]);

  const { field: countryField } = useController({
    name: "country",
    control,
    rules: {
      required: { value: true, message: "Country selection is required" },
    },
  });

  function onSubmit(data) {
    // e.preventDefault();  The default prevention is now handled behind the scenes by the handleSubmit function from react-hook-form.

    // These are all handled by handleSubmit from react-hook-form.
    // const emailResults = checkEmail(emailRef.current.value);
    // const passwordResults = checkPassword(passwordRef.current.value);
    // const countryResults = checkCountry(countryRef.current.getValue()[0]);

    // setEmailErrors(emailResults);
    // setPasswordErrors(passwordResults);
    // setCountryErrors(countryResults);

    // if (
    // emailResults.length === 0 &&
    //   passwordResults.length === 0 &&
    //   countryResults.length === 0
    // ) {
    console.log(data);
    alert("Success");
    // }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <FormGroup errorMessage={errors?.email?.message}>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          className="input"
          type="email"
          id="email"
          {...register("email", {
            required: { value: true, message: "Email is required" },
            validate: (value) => {
              if (!value.endsWith("@webdevsimplified.com")) {
                return "Email must end with @webdevsimplified.com";
              }
            },
          })}
        />
        {/* Removed ref={emailRef} and replaced it with the register function. */}
      </FormGroup>
      <FormGroup errorMessage={errors?.password?.message}>
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="input"
          type="password"
          id="password"
          // ref={passwordRef}
          {...register("password", {
            required: { value: true, message: "Password is required" },
            minLength: {
              value: 10,
              message: "Password must be at least 10 characters",
            },
            validate: {
              hasLowerCase: (value) => {
                if (!value.match(/[a-z]/)) {
                  return "Must include at least 1 lowercase letter";
                }
              },
              hasUpperCase: (value) => {
                if (!value.match(/[A-Z]/)) {
                  return "Must include at least 1 uppercase letter";
                }
              },
              hasNumber: (value) => {
                if (!value.match(/[0-9]/)) {
                  return "Must include at least 1 number";
                }
              },
            },
          })}
        />
      </FormGroup>
      <FormGroup errorMessage={errors?.country?.message}>
        <label className="label" htmlFor="country">
          Country
        </label>
        <ReactSelect
          isClearable
          classNamePrefix="react-select"
          id="country"
          options={COUNTRY_OPTIONS}
          // ref={countryRef}
          {...countryField}
        />
      </FormGroup>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default App;

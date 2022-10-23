import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { modifiedProfile } from "../../redux/userAction";

const Profil = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  const dispatch = useDispatch();

  const submitForm = (data) => {
    dispatch(modifiedProfile(data));
  };

  return (
    <div className="profil">
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="inputs">
          <label htmlFor="firstName" className="LabelsInput">
            Prenom
            <input
              className="input"
              type="text"
              name="firstName"
              id="firstName"
              {...register("firstName", {
                minLength: {
                  value: 2,
                  message: "Minimum 2 caractères",
                },
              })}
            />
          </label>
          <label htmlFor="lastName" className="LabelsInput">
            {" "}
            Nom
            <input
              className="input"
              type="text"
              name="lastName"
              id="lastName"
              {...register("lastName", {
                minLength: {
                  value: 2,
                  message: "Minimum 2 caractères",
                },
              })}
            />
          </label>
        </div>
        <span>{errors.firstName?.message}</span>
        <span>{errors.lastName?.message}</span>
        <div>
          <button className="edit-button margin-right" type="submit">
            Save
          </button>
          <button
            className="edit-button cancel margin-right"
            onClick={() => props.result(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profil;

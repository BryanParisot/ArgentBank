import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { modifiedProfile } from "../../redux/userAction";

const Profil = (props) => {
  const { register, handleSubmit } = useForm();
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
              // placeholder={props.firstname}
              {...register("firstName")}
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
              // placeholder={props.lastName}
              {...register("lastName")}
            />
          </label>
        </div>
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

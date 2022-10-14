const Profil = (props) => {

  return (
    <div>
      <form>
        <div>
          <input
            className="input"
            type="text"
            name="firstName"
            id="firstName-id"
            placeholder={props.firstname}
          />
          <input
            className="input"
            type="text"
            name="lastName"
            id="lastName-id"
            placeholder={props.lastName}

          />
        </div>
        <div>
          <button>Save</button>
          <button onClick={() => props.result(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Profil;

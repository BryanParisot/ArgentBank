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
          />
          <input
            className="input"
            type="text"
            name="lastName"
            id="lastName-id"
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

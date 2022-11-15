import "./style.css";
import avatarLogo from "../../style/avatar-user-svgrepo-com.svg";
import emailLogo from "../../style/email-svgrepo-com.svg";
import callLogo from "../../style/call-svgrepo-com.svg";
//Input field
export const InputField = ({
  label,
  placeholder,
  name,
  type,
  value,
  handelChange,
}) => {
  return (
    <div className="inputBox">
      <div className="label_field">
        <label htmlFor="">{label}</label>
      </div>
      <div className="input_field">
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => handelChange(e)}
        />
      </div>
    </div>
  );
};

//Radio button field
export const RadioButton = ({
  label,
  name,
  RadioOn,
  RadioOff,
  handelChange,
}) => {
  return (
    <div className="inputBox">
      <div className="label_field">
        <label htmlFor="">{label}</label>
      </div>
      <div className="input_field radio_field">
        <input
          style={{ width: "15px" }}
          type="radio"
          name={name}
          value="on"
          onChange={(e) => handelChange(e)}
        />
        <p className="radio_text">{RadioOn}</p>
        <input
          style={{ width: "15px" }}
          type="radio"
          name={name}
          value="off"
          onChange={(e) => handelChange(e)}
        />
        <p className="radio_text">{RadioOff}</p>
      </div>
    </div>
  );
};

//Card
export const Card = ({
  cardType,
  role,
  jobId,
  total,
  newNum,
  avatarName,
  avatarId,
  designation,
  joinDate,
  email,
  phone,
}) => {
  if (cardType === "jobCard") {
    return (
      <div className="cardBox">
        <div className="card_header card_inner_box">
          <h4 className="job_id">Job id: {jobId}</h4>
          <h6>{role}</h6>
        </div>
        <div className="card_body card_inner_box">
          <h4 className="body_header_text">Candidates</h4>
          <div className="card_num_box">
            <div className="card_total_num">
              total <br /> <h3>{total}</h3>
            </div>
            <div className="card_new_num">
              new <br /> <h3>{newNum}</h3>
            </div>
          </div>
        </div>
        <hr />
        <div className="card_footer card_inner_box">
          <h4 className="card_footer_btn_text">
            <a href="">Details</a>
          </h4>
        </div>
      </div>
    );
  }
  if (cardType === "avatarCard") {
    return (
      <div className="cardBox">
        <div className="card_avatar_header">
          <div className="avatar_img">
            <img src={avatarLogo} alt="" />
          </div>
          <div className="card_header_text">
            <h4>{avatarName}</h4>
            <h6>ID - {avatarId}</h6>
          </div>
        </div>
        <div className="avatar_card_body">
          <div className="card_body_header">
            <div className="designation_box">
              Designation <br />-{designation}
            </div>
            <div className="joined_data">
              Joined Date <br />- <i>{joinDate}</i>
            </div>
          </div>
          <div className="card_body_Contact_info">
            <div className="avatar_contact_section">
              <img src={emailLogo} alt="" />
              <h7>{email}</h7>
            </div>
            <div className="avatar_contact_section">
              <img src={callLogo} alt="" />
              <h7>{phone}</h7>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

import { connect } from "react-redux";
import { useState } from "react";
import { setAlerts } from "../../actions/alerts";
import Alerts from "../Alerts/Alerts";
import { createProfile } from "../../actions/profile";

const CreateProfile = ({ setAlerts, createProfile }) => {
  const [profile, setProfile] = useState({
    companyName: "",
    companyBio: "",
    companyWebsite: "",
    companyAddress: "",
    companyPhone: "",
  });

  const handleChange = (event) => {
    setProfile({ ...profile, [event.target.name]: event.target.value });
  };

  const {
    companyName,
    companyBio,
    companyWebsite,
    companyAddress,
    companyPhone,
  } = profile;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      companyName &&
      companyBio &&
      companyWebsite &&
      companyAddress &&
      companyPhone
    ) {
      createProfile(profile);
    } else {
      setAlerts([{ msg: "All fields must be filled", type: "DANGER" }]);
    }
  };

  return (
    <div
      style={{ minHeight: "86vh" }}
      className="flex items-center justify-center min-w-full py-6 dark:bg-dark-primary"
    >
      <div className="w-3/5 rounded-lg border bg-light-op-09 dark:bg-dark-op-09 dark:border-dark-secondary">
        <div className="py-4 px-8 border-b dark:border-dark-secondary">
          <h2 className="text-xl dark:text-white">Setup Company Profile</h2>
        </div>
        <form
          className="py-8 px-6 md:py-8 md:px-8"
          onSubmit={(e) => handleFormSubmit(e)}
        >
          <Alerts />
          {/*Label for Company Name*/}
          <label className="block mb-2 text-sm dark:text-white">
            Company Name
          </label>
          <input
            className="w-full border mb-4 bg-gray-100 outline-none rounded-md focus:border-orange-primary flex-1 p-2.5 dark:bg-dark-primary dark:text-white transition dark:border-dark-secondary"
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          {/*Label for Company Bio*/}
          <label className="block mb-2 text-sm dark:text-white">
            Company Bio
          </label>
          <textarea
            className="w-full border mb-4 bg-gray-100 outline-none rounded-md focus:border-orange-primary flex-1 p-2.5 dark:bg-dark-primary dark:text-white transition h-32 dark:border-dark-secondary"
            name="companyBio"
            placeholder="Company Bio"
            value={companyBio}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          {/*Label for Company Bio*/}
          <label className="block mb-2 text-sm dark:text-white">
            Company Website
          </label>
          <input
            className="w-full border mb-4 bg-gray-100 outline-none rounded-md focus:border-orange-primary flex-1 p-2.5 dark:bg-dark-primary dark:text-white transition dark:border-dark-secondary"
            type="text"
            name="companyWebsite"
            placeholder="Company Website"
            value={companyWebsite}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          {/*Label for Company Office Address*/}
          <label className="block mb-2 text-sm dark:text-white">
            Company Address
          </label>
          <input
            className="w-full border mb-4 bg-gray-100 outline-none rounded-md focus:border-orange-primary flex-1 p-2.5 dark:bg-dark-primary dark:text-white transition dark:border-dark-secondary"
            type="text"
            name="companyAddress"
            placeholder="Company Address"
            value={companyAddress}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          {/*Label for Company Office Phone*/}
          <label className="block mb-2 text-sm dark:text-white">
            Company Phone
          </label>
          <input
            className="w-full border mb-4 bg-gray-100 outline-none rounded-md focus:border-orange-primary flex-1 p-2.5 dark:bg-dark-primary dark:text-white transition dark:border-dark-secondary"
            type="text"
            name="companyPhone"
            placeholder="Company Phone"
            value={companyPhone}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <input
            className="w-full p-2.5 rounded-md border mb-5 outline-none text-white cursor-pointer transition bg-primary-gradient dark:border-dark-secondary"
            type="submit"
            value="Create"
          />
        </form>
      </div>
    </div>
  );
};
export default connect(null, { setAlerts, createProfile })(CreateProfile);

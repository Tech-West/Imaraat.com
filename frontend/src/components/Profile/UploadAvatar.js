import { useState } from "react";
import { connect } from "react-redux";
import { uploadAvatar } from "../../actions/profile";

const UploadAvatar = ({ profile, uploadAvatar }) => {
  //
  const [file, setFile] = useState({ selectedFile: null, loaded: 0 });

  const handleChange = (e) => {
    setFile({ selectedFile: e.target.files[0], loaded: 0 });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (file) {
      uploadAvatar(file.selectedFile);
    } else {
      console.log("Choose some file");
    }
  };

  return (
    <div
      style={{ minHeight: "86vh" }}
      className="flex items-center justify-center min-w-full py-6 dark:bg-dark-primary"
    >
      <div className="w-3/5 rounded-lg border bg-light-op-09 dark:bg-dark-op-09 dark:border-dark-secondary">
        <div className="py-4 px-8 border-b dark:border-dark-secondary text-center">
          <h2 className="text-xl dark:text-white">
            Upload Avatar or Logo for your company
          </h2>
        </div>
        <form
          className="py-8 px-6 md:py-8 md:px-8"
          onSubmit={(e) => handleFormSubmit(e)}
        >
          <label
            className="block mb-2 text-sm dark:text-white text-center border border-dashed p-6 cursor-pointer"
            htmlFor="avatar"
          >
            Choose Company Avatar
          </label>
          <input
            className="hidden"
            type="file"
            name="avatarImage"
            id="avatar"
            placeholder="Company Name"
            onChange={handleChange}
          />
          <input
            className="w-full p-2.5 rounded-md border mb-5 outline-none text-white cursor-pointer transition bg-primary-gradient dark:border-dark-secondary"
            type="submit"
            value="Upload"
          />
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile.data,
});

export default connect(mapStateToProps, { uploadAvatar })(UploadAvatar);

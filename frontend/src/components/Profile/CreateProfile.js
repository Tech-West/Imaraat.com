const CreateProfile = () => {
  return (
    <div
      style={{ minHeight: "86vh" }}
      className="flex items-center justify-center min-w-full py-6"
    >
      <div className="w-4/5 rounded-lg border py-8 px-6 md:py-8 md:px-8 bg-light-op-09 dark:bg-dark-op-09 dark:border-dark-secondary">
        <form onSubmit={null}>
          <input
            className="w-full border mb-2.5 bg-white outline-none rounded-md focus:border-orange-primary flex-1 p-2.5 dark:bg-dark-primary dark:text-white transition"
            type="text"
            name="email"
            placeholder="Email Address"
          />
          <input
            className="w-full border mb-2.5 bg-white outline-none rounded-md focus:border-orange-primary flex-1 p-2.5 dark:bg-dark-primary dark:text-white transition"
            type="text"
            name="email"
            placeholder="Email Address"
          />
          <input
            className="w-full border mb-2.5 bg-white outline-none rounded-md focus:border-orange-primary flex-1 p-2.5 dark:bg-dark-primary dark:text-white transition"
            type="text"
            name="email"
            placeholder="Email Address"
          />
          <input
            className="w-full border mb-2.5 bg-white outline-none rounded-md focus:border-orange-primary flex-1 p-2.5 dark:bg-dark-primary dark:text-white transition"
            type="text"
            name="email"
            placeholder="Email Address"
          />
          <input
            className="w-full p-2.5 rounded-md border mb-5 outline-none text-white cursor-pointer transition bg-primary-gradient dark:border-dark-secondary"
            type="submit"
            value="Register"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;

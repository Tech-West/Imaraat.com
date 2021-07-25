import { Fragment } from "react";
import { connect } from "react-redux";
import Navbar from "../Navbar/Navbar";
import HeroBanner from "../Banner/HeroBanner";
import ListingBanner from "../Banner/ListingBanner";
import Footer from "../Footer/Footer";

const Home = ({ isLoading, isAuthenticated }) => {
  return (
    <div style={{ minHeight: "86vh" }} className="">
      <HeroBanner />
      <ListingBanner />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading,
});

export default connect(mapStateToProps, null)(Home);

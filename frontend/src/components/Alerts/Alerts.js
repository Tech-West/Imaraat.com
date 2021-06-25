import Alert from "./Alert.js";
import { connect } from "react-redux";

const Alerts = ({ alerts }) => {
  return (
    <div>
      {alerts && alerts.length > 0
        ? alerts.map((alert) => {
            return <Alert msg={alert.msg} type={alert.type} />;
          })
        : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  alerts: state.alerts,
});

export default connect(mapStateToProps, null)(Alerts);

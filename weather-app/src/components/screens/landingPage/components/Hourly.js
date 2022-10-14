import { getHour } from "../../../../utils/covert";
import { getWeatherIcon } from "../../../../utils/getIcon";
import { convertTempFToC } from "../../../../utils/covert";

const Hourly = ({ data }) => {
  return (
    <div className="hourly">
      <div className="hourly-content">
        <span className="hourly-content-hour">
          {getHour(data?.datetimeEpoch)}
        </span>
        <div className="hourly-content-temp">
          <img src={getWeatherIcon(data?.icon)} alt="condition" width={"64"} />
          <div className="hourly-content-temp-container">
            <div className="hourly-content-temp-info">
              {convertTempFToC(data?.temp)}°
            </div>
            <div className="hourly-content-temp-realfeel">
              RealFeel® {convertTempFToC(data?.feelslike)}°
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hourly;

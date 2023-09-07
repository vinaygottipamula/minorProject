import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Hyderabad,Delhi,Bangalore"
  );
  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://t4.ftcdn.net/jpg/00/47/49/01/240_F_47490128_JLClMTbZyVdxl3OW2m8H4vJHW7hDZ8Jj.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Hyderabad</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://t4.ftcdn.net/jpg/01/15/24/53/240_F_115245346_vN7bdFfwD3LR4pnG4fa4EtNTArafpodb.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Delhi</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://t4.ftcdn.net/jpg/03/11/94/23/240_F_311942374_cK69g8ORWymuDTy6CuuRd8LSGgy8l93D.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Bangalore</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Featured;

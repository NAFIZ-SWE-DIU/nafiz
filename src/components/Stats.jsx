import { useState, useEffect } from "react";
import { stats } from "../constants";
import styles from "../style";

const Stats = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [totalVisitorCount, setTotalVisitorCount] = useState(0);

  useEffect(() => {
    // Increment visitor count when the component mounts
    setVisitorCount((prevCount) => prevCount + 1);

    // Update total visitor count from localStorage
    const storedTotalCount = localStorage.getItem("totalVisitorCount");
    if (storedTotalCount) {
      setTotalVisitorCount(parseInt(storedTotalCount));
    }

    // Increment total visitor count and update localStorage
    setTotalVisitorCount((prevCount) => {
      const newCount = prevCount + 1;
      localStorage.setItem("totalVisitorCount", newCount.toString());
      return newCount;
    });
  }, []);

  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-15 mb-6`}>

      <div className="flex-1 flex justify-start items-center flex-row m-3">
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
          {totalVisitorCount}+
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          Visitors
        </p>
      </div>


      {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`} >
          <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}



    </section>
  );
};

export default Stats;

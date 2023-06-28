// import { useState } from "react";

const useGetTotalSp = (data, epicName) => {
    // const [totalSp, setTotalSp] = useState(0);

    const totalValue = data.filter(el => el.epicName === epicName).reduce((acc, val) => {
        let currentSP = parseFloat(val.sp);
        return acc + currentSP
    }, 0);

    // setTotalSp(totalValue);
    return totalValue;
};

export default useGetTotalSp;
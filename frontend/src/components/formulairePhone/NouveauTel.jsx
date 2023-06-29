import React, { useState } from 'react';

import General from './General'
import Technique from './Technique'
import Aspect from './Aspect'
const NouveauTel = () => {
    const [data, setData] = useState(undefined)
    const [page, setPage] = useState("General")

    return (
        <div>
            {page === "General" && <General data={data} setData={setData} setPage={setPage} />}
            {page === "Technique" && <Technique data={data} setData={setData} setPage={setPage} />}
            {page === "Aspect" && <Aspect data={data} setData={setData} setPage={setPage} />}
        </div>
    );
};

export default NouveauTel;
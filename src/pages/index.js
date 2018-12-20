import React from "react"
import { Helmet } from 'react-helmet'

export default () => (

  <div style={{ margin: `4rem auto`, maxWidth: 460 }}>
    <Helmet>
        <title>Rian Malik</title>
    </Helmet>

    {" "}
    
    <h1>Ahoy, fellow hooman!</h1>
    <div>
      <p>
        I am currently developing this site! So, comeback later! If you want to say hi, "
        <a href="mailto:rianmalikt@gmail.com">
           click here
        </a>
         " to e-mail me :)
      </p>
    </div>
    <p>Posted December 20, 2018 by Rian Malik Tambengi</p>
  </div>
)
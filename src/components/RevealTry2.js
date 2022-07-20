import { Container } from '@mui/material'
import React from 'react'
import { Fade } from 'react-reveal'

function RevealTry2() {
    return (
        <div style={{ color: '#fff', backgroundColor: '#000', textAlign: 'center' }}>
            <Container maxWidth={"md"} sx={{ pt: 15, pb: 15 }}>
                <Fade bottom>
                    <span style={{ display:'flex',alignItems:'center', justifyContent:'center', fontWeight: 500, fontSize: '1.75rem', padding: 2, paddingBottom: 15 }}>
                        Your business is growing but not fast enough. You struggle to find a way to capture every last lead and sale available online. As a result, you feel frustrated and stuck.
                    </span><br />
                </Fade>
                <Fade>
                    <span style={{ display:'flex',alignItems:'center', justifyContent:'center',  fontWeight: 500, fontSize: '1.75rem', padding: 2 }}>
                        You know there are better solutions. The competition is passing you by, executing the most up-to-the-minute marketing strategies for far more leads, and far more sales.
                    </span><br />
                </Fade>
                <Fade>
                    <span style={{ display:'flex',alignItems:'center', justifyContent:'center',  fontWeight: 500, fontSize: '1.75rem', padding: 2 }}>
                        It’s time to go beyond your in-house or vendor-driven marketing to “capture it all.”
                    </span><br />
                </Fade>


            </Container>
        </div>
    )
}

export default RevealTry2
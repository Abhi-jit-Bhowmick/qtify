import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "./Faq.css"

function Faq() {
    return (
        <div className='faq-box'>
            <div className='faq-container'>
                <div className='faqs-text'>
                    <h1>FAQs</h1>
                </div>
                <div className='faq-carosel-item'>

                    <Accordion className='accordian'>
                        <AccordionSummary
                            className='accordian-summary'
                            expandIcon={<ExpandMoreIcon className='accordian-icon' />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography
                                style={{
                                    fontSize: "20px",
                                    fontWeight: "500"
                                }}
                            >Is QTify free to use?</Typography>
                        </AccordionSummary>
                        <AccordionDetails className='accordian-details'>
                            <Typography
                                style={{
                                    fontSize: "18px",
                                    fontWeight: "500"
                                }}
                            >
                                Yes! It is 100% free, and has 0% ads!
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className='accordian'>
                        <AccordionSummary
                            className='accordian-summary'
                            expandIcon={<ExpandMoreIcon className='accordian-icon' />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography
                                style={{
                                    fontSize: "20px",
                                    fontWeight: "500"
                                }}
                            >
                                Can I download and listen to songs offline?</Typography>
                        </AccordionSummary>
                        <AccordionDetails className='accordian-details'>
                            <Typography
                                style={{
                                    fontSize: "18px",
                                    fontWeight: "500"
                                }}
                            >
                                Sorry, unfortunately we don't provide the service to download any songs.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>


            </div>
        </div>

    )
}

export default Faq
import { Accordion, AccordionSummary, Typography } from "@mui/material";
import React, { useState } from "react";

const LessonPageMain = ({ lesson }) => {
  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const { lessons } = lesson;

  const [selectedVideo, setSelectedVideo] = useState(null);
  const handleVideoSelect = (lesson) => {
    setSelectedVideo(lesson);
    window.location.reload(false);

    console.log("lessong", lesson);
  };

  return (
    <div>
      {lessons.map((lesson) => (
        <>
          <Accordion
            expanded={expanded === `panel${lesson.lessonNumber}`}
            onChange={handleChange(`panel${lesson.lessonNumber}`)}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography onClick={() => handleVideoSelect(lesson)}>
                {lesson.lessonTitle}
              </Typography>
            </AccordionSummary>
            {selectedVideo && (
              <video
                id="myVideo"
                src={selectedVideo.leasonVideo}
                controls
                // autoplay
                // loop
                preload
                width="400"
                height="300"
              />
            )}
          </Accordion>
        </>
      ))}
    </div>
  );
};

export default LessonPageMain;

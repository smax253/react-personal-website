import { title } from "process";
import { useEffect, useMemo, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { MS_PER_MONTH, TIMELINE } from "../../constants/timeline";
import { TimelineEntry } from "../../models/timeline";
import Image from "next/image";
import styles from "./projects.module.scss";

const monthWidthPx = 200;
const startDate = new Date(Date.parse("01 August 2018"));

export const Timeline = (props: { allTimelineElements: TimelineEntry[] }) => {
  const timelineRef = useRef<HTMLDivElement>(null);

  const timelineWidth = timelineRef.current?.clientWidth;
  const [timelineMonthElements, setTimelineMonthElements] = useState([<></>]);
  const [timelineElements, setTimelineElements] = useState<TimelineEntry[]>([]);
  const timelineEntryElements = useMemo(() => {
    return timelineElements.map((entry, index) => {
      const periodMonths =
        (entry.endDate.getTime() - entry.startDate.getTime()) / MS_PER_MONTH;

      const pixelLength = periodMonths * monthWidthPx;
      const leftOffset =
        ((entry.startDate.getTime() - startDate.getTime()) / MS_PER_MONTH) *
        monthWidthPx;
      return (
        <li
          style={{
            width: `${pixelLength}px`,
            backgroundColor: entry.color,
            left: `${leftOffset}px`,
            position: "absolute",
            top: `${index * 5.5}vh`,
          }}
          className={styles.timelineBar}
          key={entry.id}
        >
          <div className={styles.timelineIcon}>
            <Image key={entry.id} src={entry.icon} alt={entry.title} />
          </div>
        </li>
      );
    });
  }, [timelineElements]);

  const timelineHeight = useMemo(
    () => Math.max(...timelineElements.map((val) => val.ordinal)),
    [timelineElements]
  );

  const timelineMonthWindow = useMemo(
    () => (timelineWidth || 0) / monthWidthPx,
    [timelineWidth]
  );

  const timelineScrollHandler = (event) => {
    console.log(timelineWidth, timelineMonthWindow);
    const pixelsScrolled = timelineRef.current!.scrollLeft;
    const monthsScrolled = pixelsScrolled / monthWidthPx;
    const startDateRange = new Date(startDate);
    startDateRange.setMonth(
      startDateRange.getMonth() + Math.floor(monthsScrolled) - 1
    );
    const endDateRange = new Date(startDate);
    endDateRange.setMonth(
      endDateRange.getMonth() +
        Math.ceil(monthsScrolled + timelineMonthWindow) +
        1
    );
    console.log(`start: ${startDateRange}\n end: ${endDateRange}`);
    const currentElements = props.allTimelineElements.filter((entry) => {
      return (
        (startDateRange < entry.startDate && entry.startDate < endDateRange) ||
        (startDateRange < entry.endDate && entry.endDate < endDateRange)
      );
    });
    setTimelineElements(currentElements);
  };

  useEffect(() => {
    const startDateCopy = new Date(startDate);
    const endDate = new Date();
    const dates = [];
    for (
      let currentDate = startDateCopy;
      currentDate < endDate;
      currentDate.setMonth(currentDate.getMonth() + 1)
    ) {
      const dateString = currentDate.toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      });
      dates.push(
        <div
          key={currentDate.getTime()}
          className={styles.timelineDate}
          style={{
            minWidth: `${monthWidthPx}px`,
            textAlign: "center",
          }}
        >
          {dateString}
        </div>
      );
    }

    setTimelineMonthElements(dates);
  }, []);

  return (
    <div>
      <main className={styles.main}>
        <Fade>
          <div className={styles.timelineContainer}>
            <div
              className={styles.timeline}
              onScroll={timelineScrollHandler}
              ref={timelineRef}
            >
              <Fade>
                <ul
                  className={styles.timelineEventContainer}
                  style={{
                    height: `${timelineElements.length * 6}vh`,
                    minHeight: "6vh",
                  }}
                >
                  {timelineEntryElements}
                </ul>
              </Fade>
              <div className={styles.timelineDateContainer}>
                {timelineMonthElements}
              </div>
            </div>
          </div>
        </Fade>
      </main>
    </div>
  );
};

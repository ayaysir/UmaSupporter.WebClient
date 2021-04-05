import { AccordionSummary, createStyles, makeStyles, Theme, Typography, Accordion } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import React from "react";
import { UmaEventWithChoice } from "../../types";
import Hero from "../common/Hero";
import EventDetail from "../EventDetail";

type Props = {
  umaName: string,
  secondName: string,
  umaImage: string,
  rareDegree: string,
  event: UmaEventWithChoice[]
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }),
);

const UmaDetailComponent: React.FC<Props> = (props: Props) => {
  const {event, umaImage, umaName, secondName, rareDegree} = props;
  const classes = useStyles();

  return <div className={"UmaDetail"}>
    <Hero
      name={umaName}
      secondName={secondName}
      image={umaImage}
      rareDegree={rareDegree}/>
    <div className={"EventListWrapper"}>
      <div className={"EventList"}>
      {
        event.map((x, i) => {
          return <Accordion key={i}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>{x.title}</Typography>
            </AccordionSummary>
            <EventDetail
              title={x.title}
              choice={x.choices} />
          </Accordion>
        })
      }
      </div>
    </div>
  </div>
}

export default UmaDetailComponent;
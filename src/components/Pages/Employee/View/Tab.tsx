import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { uuid } from '../../../../utils/helpers';

interface TabPanelProps {
  children: React.ReactNode
  index: number
  value: number
}

interface BasicTabsProps {
  cols: any
  data: any
  bg?: any
}

const useStyles = makeStyles({
  tabs: {
    backgroundColor: 'white',
    borderRadius: '8px',
    '& .MuiTabs-indicator': {
      backgroundColor: '#FF8059',
    },
    '& .MuiTabs-flexContainer button': {
      width: window.innerWidth < 768 ? '8rem' : '13rem !important',
    },
    '& .MuiTab-root.Mui-selected': {
      color: '#FF8059',
      fontFamily: 'Nunito !important',
      fontWeight: '700',
      fontSize: '18px',
      lineHeight: '25px',
    },
    '& .MuiButtonBase-root': { textTransform: 'none' },
  },
});

export const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: '24px' }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const BasicTabs = ({ cols, data, bg }: BasicTabsProps) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  let px: string = '48px';

  if (window.innerWidth < 1024) {
    px = '6px';
  }

  const classes = useStyles();

  return (
    <Box sx={{ width: '100%' }} className={`w-full h-full bg-${bg}`}>
      <Box>
        <div>
          <Tabs
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            value={value}
            onChange={handleChange}
            className={classes.tabs}
            sx={{ border: 1, borderColor: 'rgba(47, 72, 110, 0.1)' }}
          >
            {cols.map((col: any, index: number) => (
              <Tab
                key={uuid()}
                label={<span className="font-nunitoRegular font-bold text-lg">{col.title}</span>}
                sx={{
                  color: '#141C4C',
                  fontSize: '16px',
                  marginRight: `${px}`,
                  lineHeight: '25px',
                }}
                {...a11yProps(index)}
              />
            ))}
          </Tabs>
        </div>
      </Box>

      {data.map((item: any, index: any) => (
        <TabPanel key={uuid()} value={value} index={index}>
          {item}
        </TabPanel>
      ))}
    </Box>
  );
};

export default BasicTabs;

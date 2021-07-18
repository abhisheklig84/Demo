import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { alpha,makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import styled, {ThemeProvider} from 'styled-components';
import { createTheme, ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';
import Overview from '../Assets/Overview.svg';
import Businesses from '../Assets/Businesses.svg';
import Drone from '../Assets/Drone.svg';
import Stock from '../Assets/Stock.svg';
import Chat from '../Assets/Chat Support.svg';
import Order from '../Assets/Order.svg';
import Settings from '../Assets/Settings.svg';



const customTheme = createTheme({
  palette: {
    primary: {
      main: '#6772e5',
    },
  },
});

const drawerWidth = 256;

const SDrawer = styled(Drawer)`
  width: ${drawerWidth}px;
  border: none;
`;
const Sdiv = styled.div`
  width: ${drawerWidth}px;
`;

const Snav = styled.nav`
  width: ${drawerWidth}px;
  ${({ theme }) => `
  ${theme.breakpoints.up('sm')} {
      width: ${drawerWidth}px;
      flexShrink: 0;
  }
  `}
`;

const SAppBar = styled(AppBar)`
${({ theme }) => `
  background-color: white;
  box-Shadow: none;
  ${theme.breakpoints.up('sm')} {
    width: calc(100% - ${drawerWidth}px);
    margin-Left: drawerWidth;
  }
  `}
`;

const Head = styled.div`
    position: absolute;
    top: 17px;
    left: 24px;
    width: 232px;
`;
const Data = styled.div`
    color: ${props => props.icolor};
    font-size: ${props => props.isize || 14 }px;
    font-weight: ${props => props.iweight || 700};
    text-align: ${props => props.ialign};
`;

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    color: "black",
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    border:"none",
    width: drawerWidth,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white),
    },
    width: '100%',
    color:"black",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    color: "#C2CFE0",
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function SideBar(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Sdiv>
      <div className={classes.toolbar} />
      <List>
        <ListItem button>
            <ListItemIcon><img src={Overview}/></ListItemIcon>
            <ListItemText primary="Overview" />
        </ListItem>
        <ListItem button>
            <ListItemIcon><img src={Businesses}/></ListItemIcon>
            <ListItemText primary="Businesses" />
        </ListItem>
        <ListItem button>
            <ListItemIcon><img src={Drone}/></ListItemIcon>
            <ListItemText primary="Drone" />
        </ListItem>
        <ListItem button>
            <ListItemIcon><img src={Stock}/></ListItemIcon>
            <ListItemText primary="Stock" />
        </ListItem>
        <ListItem button>
            <ListItemIcon><img src={Order}/></ListItemIcon>
            <ListItemText primary="Order" />
        </ListItem>
        <ListItem button>
            <ListItemIcon><img src={Chat}/></ListItemIcon>
            <ListItemText primary="Chat Support" />
        </ListItem>
        <ListItem button>
            <ListItemIcon><img src={Chat}/></ListItemIcon>
            <ListItemText primary="Complaints" />
        </ListItem>
        <Divider />
        <ListItem button>
            <ListItemIcon><img src={Chat}/></ListItemIcon>
            <ListItemText primary="History" />
        </ListItem>
        <ListItem button>
            <ListItemIcon><img src={Chat}/></ListItemIcon>
            <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Sdiv>
  );


  return (
      <MuiThemeProvider theme={customTheme}>
        <ThemeProvider theme={customTheme}>
    <div className={classes.root}>
      <CssBaseline />
      <SAppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </SAppBar>
      <Snav>
        <Hidden smUp implementation="css">
          <SDrawer
            variant="temporary"
            anchor={'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </SDrawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <SDrawer variant="permanent" open className={classes.drawerPaper} >
            <Head>
            <Data icolor="#109CF1" isize="18">Tech</Data>
            <Data icolor="#109CF1" isize="18">Company</Data><br/>
            <Data isize="14" ialign="center">User Name</Data>
            <Data icolor="#707D90" iweight="900" isize="11" ialign="center">aj99@gmail.com</Data>
            </Head>
            <br/><br/><br/><br/>
            {drawer}
          </SDrawer>
        </Hidden>
      </Snav>
    </div>
    </ThemeProvider>
    </MuiThemeProvider>
  );
}
export default SideBar;






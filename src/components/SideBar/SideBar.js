import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import styled, {ThemeProvider} from 'styled-components';
import { createTheme, ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';
import { itemsList } from './List';
import { withRouter } from 'react-router';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#6772e5',
    },
  },
});

const drawerWidth = 256;
const SDrawer = styled(Drawer)``;
const Sdiv = styled.div`
  width: ${drawerWidth}px;
`;

const Snav = styled.nav`
  ${({ theme }) => `
  ${theme.breakpoints.up('sm')} {
      width: ${drawerWidth}px;
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

const SIconButton = styled(IconButton)`
${({ theme }) => `
  margin-right: 10px;
  color: black;
  ${theme.breakpoints.up('sm')} {
    display: none;
  }
  `}
`;

const SInputBase = styled(InputBase)`
${({ theme }) => `
  width: 100%;
  ${theme.breakpoints.up('md')} {
    width: 20ch;
  }
  `}
`;

const SSearchIcon = styled(SearchIcon)`
  color: #C2CFE0;
  margin-right: 10px;
`;

const Search = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

function SideBar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Sdiv>
      <List>
        {itemsList.map((item) => {
          const { id, text, image, hist } = item;
          return (
            <div>
            <ListItem button key={id}>
              <ListItemIcon><img src={image}/></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
            {id == 6 ? <Divider /> : false}
            </div>
          );
        })}
      </List>
    </Sdiv>
  );


return (
    <MuiThemeProvider theme={customTheme}>
      <ThemeProvider theme={customTheme}>
        <div>
        <CssBaseline />
        <SAppBar position="fixed">
          <Toolbar>
            <SIconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
              <MenuIcon />
            </SIconButton>

            <Search>
              <SSearchIcon />
              <SInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
            </Search>

          </Toolbar>
        </SAppBar>
          <Snav>
            <Hidden smUp implementation="css">
              <SDrawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{keepMounted: true,}} >
                {drawer}
              </SDrawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <SDrawer variant="permanent" open>
                <Head>
                <Data icolor="#109CF1" isize="18">Tech</Data>
                <Data icolor="#109CF1" isize="18">Company</Data><br/>
                <Data isize="14" ialign="center">User Name</Data>
                <Data icolor="#707D90" iweight="900" isize="11" ialign="center">aj99@gmail.com</Data>
                </Head>
                <br/><br/><br/><br/><br/><br/><br/>
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






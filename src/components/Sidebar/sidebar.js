import React from "react";
import Sidebar from "react-sidebar";
import "../Sidebar/sidebar-style.css"
import MenuIcon from '@material-ui/icons/Menu';
 
class sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
 
  render() {
    return (
      <Sidebar
        sidebar={<b>Sidebar content</b>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white" } }}
      >
        <button className="sidebar_btn" onClick={this.onSetSidebarOpen}>
        <MenuIcon className="clr_white"/>
        </button>
      </Sidebar>
    );
  }
}
 
export default sidebar;
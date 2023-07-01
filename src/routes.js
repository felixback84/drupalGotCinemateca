
import LockScreenPage from "views/Pages/LockScreenPage.js";
import Got from "views/Pages/Got.js";
import YourHouse from "views/Pages/YourHouse.js";
import Houses from "views/Pages/Houses.js";
import SingleHouse from "views/Pages/SingleHouse";

var routes = [

  // {
  //   path: "/lock",
  //   layout: "/auth",
  //   name: "Lock Screen Page",
  //   icon: "nc-icon nc-chart-pie-35",
  //   component: LockScreenPage
  // },

  {
    path: "/got",
    layout: "/public",
    name: "Got",
    icon: "nc-icon nc-chart-pie-35",
    component: Got
  },

  {
    path: "/houses",
    layout: "/public",
    name: "houses",
    icon: "nc-icon nc-chart-pie-35",
    component: Houses
  },
  {
    path: "/house-single",
    layout: "/public",
    name: "house",
    icon: "nc-icon nc-chart-pie-35",
    component: SingleHouse
  },
  {
    path: "/yourhouse",
    layout: "/public",
    name: "yourhouse",
    icon: "nc-icon nc-chart-pie-35",
    component: YourHouse
  },
  
];
export default routes;

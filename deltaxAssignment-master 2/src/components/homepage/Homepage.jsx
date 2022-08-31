import "./homepage.css";

import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";

import Header from "../Header";
import Songs from "../Songs";
import SubHeading1 from "../SubHeading1";
import Song from "../Song";
import Artists from "../Artists";
import SubHeading2 from "../SubHeading2";
import Artist from "../Artist";
import AddNewSong from "../../pages/AddNewSong";
import { Route, Switch } from "react-router-dom";
export const HOMEPAGE = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Header />
        <Songs />
        <div id="design1">
          <SubHeading1 />
          <Song
            Artwork={img1}
            song="KESARIYA"
            dateOfRelease="Mar 21,2019"
            Artist="Arijit Singh"
          />
          <Song
            Artwork={img2}
            song="CHIKNI CHEMELI"
            dateOfRelease="February 17,2021"
            Artist="shreya ghosal"
          />
          <Song
            Artwork={img3}
            song="MAGHUVA MAGHUVA"
            dateOfRelease="December 14,2021"
            Artist="sid sriram"
          />
          <Song
            Artwork={img4}
            song="JAI HO"
            dateOfRelease="July 21,2008"
            Artist="A R rahman"
          />
        </div>
        <Artists />
        <div id="design2">
          <SubHeading2 />
          <Artist
            name="Arijit Singh"
            dob="25 April 1987"
            songslist="Pachtaoge,Humdard,Naina"
          />
          <Artist
            name="Jubin Nautiyal"
            dob="14 June 1987"
            songslist="Lut Gaye,Tum Hi AAna,Dil Galti Kar Baitha Hai"
          />
          <Artist
            name="Alan Walker"
            dob="14 August 1997"
            songslist="Lily,On My Way,Alone II"
          />
          <Artist
            name="Udit Narayan"
            dob="1 December 1955"
            songslist="Maahi Ve,Main Yahaan hoon Yahan,Tip Tip"
          />
        </div>
      </Route>
      <Route exact path="/AddNewSong">
        <AddNewSong />
      </Route>
      {/* <Route exact path="/Addartist">
        
        </Route> */}
    </Switch>
  );
};

import "./styles.css";
import { useState } from "react";
import Blog from "./blog.js";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  return (
    <div>
      <NavBar />
      <Search />

      <Messages
        profilePicture="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
        title="Godfred"
        message="Hello bro"
        time="10:32 pm"
        messageCount={2}
      />

      <Messages
        profilePicture="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?semt=ais_hybrid"
        title="Samuel Kofi"
        message="Charlie when you go come?"
        time="10:20 pm"
        messageCount={1}
      />
      <Messages
        profilePicture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyI9Cvp53aaP9XeRn-ZKbJDH2QaWC72O26A&s"
        title="Kweku"
        message="You fool oo herrh😂😂😂"
        time="09:50 pm"
        messageCount={2}
      />
      <Messages
        profilePicture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8kiSH5ZSAcVoj3tAQQDoP_ux0sSricMyUg&s"
        title="Enoch Danso"
        message="Yo the guy no he say he go come morrow oo"
        time="9:05 pm"
        messageCount={3}
      />
      <Messages
        profilePicture="https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg"
        title="Joe Ashaiman"
        message="Dem say ibi the police wey come storm there"
        time="8:30 pm"
        messageCount={1}
      />
      <Messages
        profilePicture="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
        title="Comfort Dansoman"
        message="I don't really know her well"
        time="8:13 pm"
        messageCount={1}
      />
      <Messages
        profilePicture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwme89cM8YZvHcybGrZl_Obd9U9p5QabozJQ&s"
        title="Lizzy"
        message="How are you doing?"
        time="8:11 pm"
        messageCount={1}
      />
      <Messages
        profilePicture="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg"
        title="Faustina"
        message="Not really sure lol😂😂"
        time="8:01 pm"
        messageCount={1}
      />
    </div>
  );
}

const NavBar = () => {
  return (
    <>
      <div className="nav-bar-container">
        <div className="logo">
          <h1>Whatsapp</h1>
        </div>
        <div className="other-navs">
          <FontAwesomeIcon icon={faCamera} />
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
      </div>
    </>
  );
};

const Search = () => {
  return (
    <>
      <div className="search">
        <input
          type="search"
          placeholder="Ask Meta AI or Search"
          name=""
          id=""
        />
      </div>
    </>
  );
};

const Messages = (props) => {
  return (
    <>
      <div className="message-content">
        <div className="dp">
          <img src={props.profilePicture} alt="ProfilePic" />
        </div>
        <div className="title-message">
          <p className="title">{props.title}</p>
          <p className="message">{props.message}</p>
        </div>
        <div className="time-count">
          <p className="time">{props.time}</p>
          <p className="messageCount">{props.messageCount}</p>
        </div>
      </div>
    </>
  );
};

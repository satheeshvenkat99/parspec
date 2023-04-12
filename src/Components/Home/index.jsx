import React, { useState, useEffect } from "react";
import { userService } from "../service/user.service";
import ListItem from "./ListItem";
import "./style.css";

// const useKeyPress = (targetKey) => {
//   const [keyPress, setKeyPress] = useState(false);
//   console.log("keyPress", targetKey);
//   useEffect(() => {
//     const downHandler = ({ key }) => {
//       if (key === targetKey) {
//         setKeyPress(true);
//       }
//     };
//     const upHandler = ({ key }) => {
//       if (key === targetKey) {
//         setKeyPress(false);
//       }
//     };
//     window.addEventListener("keyUp", upHandler);
//     window.addEventListener("keydown", downHandler);

//     return () => {
//       window.removeEventListener("keydown", downHandler);
//       window.removeEventListener("keyup", upHandler);
//     };
//   }, [targetKey]);

//   return keyPress;
// };

const HomeComponent = () => {
  const [searchVal, setSearchVal] = useState("");
  const [resData, setResData] = useState([]);
  const [userData, setUserData] = useState([]);

  // const downPress = useKeyPress("keydown");
  // const upPress = useKeyPress("keyUp");
  const [cursor, setCursor] = useState(0);
  // const [hovered, setHovered] = useState(undefined);

  useEffect(() => {
    const Handler = (e) => {
      let scrollAmount;
      if (e.key === "ArrowUp") {
        scrollAmount = -165;
        setCursor((prevState) => {
          return prevState > 0 ? prevState - 1 : prevState;
        });
      } else if (e.key === "ArrowDown") {
        scrollAmount = 165;
        setCursor((prevState) => {
          return prevState < userData.length - 1 ? prevState + 1 : prevState;
        });
      }
      let cardView = document.querySelector(".card-container");
      cardView.scrollBy({ top: scrollAmount, behavior: "smooth" });
    };

    window.addEventListener("keydown", Handler);

    return () => {
      window.removeEventListener("keydown", Handler);
    };
  }, [userData]);

  useEffect(() => {
    userService.getUsers().then((res) => {
      setResData(res);
    });
  }, []);

  const handleChange = (e) => {
    setSearchVal(e.target.value);
    let text = e.target.value;
    if (e.target.value.length) {
      let result = resData
        .filter((val) => {
          return (
            val?.items?.toString()?.includes(text) ||
            val?.id?.toLowerCase().includes(text) ||
            val?.name?.toLowerCase().includes(text) ||
            val?.address?.toLowerCase().includes(text) ||
            val?.pincode?.includes(text)
          );
        })
        .map((value) => {
          let newName = value.name.replace(
            new RegExp(text, "gi"),
            (match) =>
              `<mark style="background:#2769AA; color:white;">${match}</mark>`
          );
          let newId = value.id.replace(
            new RegExp(text, "gi"),
            (match) =>
              `<mark style="background:#2769AA; color:white;">${match}</mark>`
          );

          let newAddress = value.address.replace(
            new RegExp(text, "gi"),
            (match) =>
              `<mark style="background:#2769AA; color:white;">${match}</mark>`
          );
          let newItems = value?.items?.toString().includes(text) ? true : false;

          return {
            ...value,
            name: newName,
            id: newId,
            address: newAddress,
            searchItem: newItems,
          };
        });
      setUserData(result);
    } else {
      setUserData([]);
    }
  };

  return (
    <div className="home-container">
      <div className="input-wrapper">
        <span class="material-symbols-outlined">search</span>
        <input
          name="user"
          value={searchVal}
          type="text"
          placeholder="Search users by ID,Address,name"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="card-container">
        {userData.length > 0
          ? userData.map((item, index) => {
              return (
                <ListItem
                  item={item}
                  index={index}
                  searchVal={searchVal}
                  active={index === cursor}
                  // setSelected={setSelectedIndex}
                  setCursor={setCursor}
                />
              );
            })
          : searchVal && (
              <div className="card">
                <h3>No Results Found!</h3>
              </div>
            )}
      </div>
    </div>
  );
};
export default HomeComponent;

import React from "react";

const ListItem = ({
  item,
  index,
  searchVal,
  setSelected,
  setCursor,
  active,
}) => {
  return (
    <>
      <div
        className={`card ${active ? "active" : ""}`}
        onMouseOver={() => {
          setCursor(index);
        }}
      >
        <p dangerouslySetInnerHTML={{ __html: item.id }}></p>
        <p dangerouslySetInnerHTML={{ __html: item.name }}></p>

        {item.searchItem && (
          <ul>
            <li>
              <span
                style={{
                  backgroundColor: "#2769AA",
                  color: "#fff",
                  marginRight: "2px",
                }}
              >
                {searchVal}
              </span>
              found in items
            </li>
          </ul>
        )}
        <p dangerouslySetInnerHTML={{ __html: item.address }}></p>
      </div>
    </>
  );
};
export default ListItem;

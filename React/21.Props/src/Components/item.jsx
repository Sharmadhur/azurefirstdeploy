const Item = (props) => {
  return(
    <li className="list-group-item">
    {props.foodItem}
    </li>
  );
};

export default Item;

// SAme thing with Array Destructuring

// const Item = (props) => {
//   let {foodItem} = props;
//   return(
//     <li className="list-group-item">
//     {foodItem}
//     </li>
//   );
// };

//                                     or

// export default Item;
// const Item = ({foodItem}) => {
//   return(
//     <li className="list-group-item">
//     {foodItem}
//     </li>
//   );
// };

// export default Item;
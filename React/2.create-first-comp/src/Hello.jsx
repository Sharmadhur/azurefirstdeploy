function Hello() {

  let myName = 'Prashant';
  let number = 456;
  let fullName = () => {
    return 'Madhur Sharma';
  }

  return <h3> Hello this is the future speaking.
    Namaste to {myName} sir. My name is {fullName()}.
    My roll number is: {number}.</h3>
}

export default Hello;
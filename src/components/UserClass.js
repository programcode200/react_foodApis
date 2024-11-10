import React from "react";


class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props);

    this.state = {
      count: 0,
      count2: 2,

      userInfo: {
        id: "id",
        name: "name ",
        img: "photo"
      }
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Rohansaw2110");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    // this.timer = setIntervel (()=> {
    //   console.log("hello react");
    // },1000)

    console.log(json);
  }

  componentDidUpdate(){
    console.log("call when api call and re-render those value ");
  }

  componentWillDidmount(){
    // clearInterval(this.timer)
    console.log("call when change page or component");
  }

  

  render() {
    // const { name, location } = this.props;
    const { count, count2 } = this.state;
    const {id, login, avatar_url} = this.state.userInfo;


    return (
      <div className="user-card">
        <h4>Count: {count}</h4>
        <button
          onClick={() => {
            // Never update state variable directly
            //count = count + 1
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 2,
            });
          }}
        >
          Count ++
        </button>

        <h4>Count 2nd: {count2}</h4>
        <hr/>
        <img src={avatar_url}/>
        <h3>ID: {id} </h3>
        <h3>Name: {login}</h3>
        <h5>Contact: rohan@gmail.com</h5>
      </div>
    );
  }
}

export default UserClass;

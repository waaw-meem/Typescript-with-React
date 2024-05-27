import React from "react";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Buttonn from "./components/Buttonn";
import Input from "./components/Input";
import SecondaryHeading from "./components/SecondaryHeading";
import User from "./components/state/User";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
import { List } from "./components/generics/Lists";
import { RandomNumber } from "./components/restriction/RandomNumbers";
import { Toast } from "./components/templateliterals/toast";
import { CustomButton } from "./components/html/Button";
import { Text } from "./components/polymerphic/Text";

function App() {
  let personName = {
    fname: "Anas",
    lname: "Zafar",
  };

  let nameLists = [
    {
      fname: "Abdul",
      lname: "Rehman",
    },
    {
      fname: "Abdul",
      lname: "Qadir",
    },
    {
      fname: "Waliullah",
      lname: "Shiekh",
    },
  ];
  return (
    <div className="App">
      {/* <ThemeContextProvider><Box/></ThemeContextProvider> */}

      <Greet name="Wali Muhammad" messageCount={17} isLoggedIn={true} />

      <Person name={personName} />

      <PersonList names={nameLists} />

      <Status status="load" />

      <Heading>Hello heading is working!!</Heading>

      <Oscar>
        <Heading>Ok</Heading>
      </Oscar>

      {/* Event Props */}
      <Buttonn
        handleClick={(event, id) => {
          console.log("Button was clicked!", event, id);
        }}
      ></Buttonn>

      <Input value="" handleInput={(event) => console.log(event)} />

      {/* STYLE PROPS */}
      <SecondaryHeading style={{ border: "1px solid red", padding: "1rem" }} />

      {/* LOGIN AND LOGOUT FUNCTIONALITY */}

      <User />

      <div className="App">
        <ThemeContextProvider>
          <Box />
        </ThemeContextProvider>
        <UserContextProvider>
          <User />
        </UserContextProvider>



        <List
        items={[
          {
            id: 1,
            first: 'Bruce',
            last: 'Wayne'
          },
          {
            id: 2,
            first: 'Clark',
            last: 'Kent'
          },
          {
            id: 3,
            first: 'Princess',
            last: 'Diana'
          }
        ]}
        onClick={item => console.log(item)}
      />
      </div>

      <RandomNumber value={10} isPositive />
      <Toast position='center' />
      <CustomButton variant='primary' onClick={() => console.log('Clicked')}>
        Button Label
      </CustomButton>

      <Text size='lg' as='h1'>
        Heading
      </Text>
      <Text size='md' as='p'>
        Paragraph
      </Text>
      <Text size='sm' color='secondary' as='label' htmlFor='someId'>
        Label
      </Text>
    </div>
  );
}

export default App;

function App() {
  let isTeacher: boolean = false;
  const name: string = "Shrut";
  let age: number = 16;
  //UI
  return (
    <form style={{
      background: "linear-gradient(90deg, #f6d365, #fda085) padding-box" ,
      width: "300px",
      margin: "auto",
      padding: "20px",
      borderRadius: "10px",
      color: "black",
      fontWeight: "500",
    }}>
      <div>
        <label>Name: </label>
        <input id="name" required style={{
          backgroundColor: "#e3fff6 ",
          border: "3px solid #0f9369",
          color: "black",
          borderRadius: "5px",
        }}></input>
      </div>
      <div>
        <label>Age: </label>
        <input type="number" id="age" min="0" max="120" required style={{
          backgroundColor: "#e3fff6 ",
          border: "3px solid #0f9369",
          color: "black",
          borderRadius: "5px",
        }}></input>
      </div>
      <div>
        <button onClick={submitButtonOnClick} style={{ 
          backgroundColor: "#43cea2 ",
          border: "3px solid #0f9369",
          color: "white",
          padding: "5px 30px",
          margin: "5px 0",
          borderRadius: "5px",
          }}>
          Submit
        </button>
      </div>
    </form>
  )
}

  let teacher = new Person();
function submitButtonOnClick() {
  let name = document.querySelector<HTMLInputElement>("#name");
  let age = document.querySelector<HTMLInputElement>("#age");

  teacher.name = name;
  teacher.age = age;
  teacher.isTeacher = isTeacher;
  if (name && age && parseInt(age.value) >= 0 && parseInt(age.value) <= 120) {
    alert("Name: " + name.value + " | Age: " + age.value);
  }
}



  let people: Person[] = [
    { name: teacher.name, age: teacher.age, isTeacher: teacher.isTeacher },
    { name: "Jane", age: 28, isTeacher: false },
    { name: "Sam", age: 42, isTeacher: false },
  ];

  let message: string = "Start";
export default App

  let score: number = 70;
  if (score >= 60) {
    message = "You passed!";
  } else {
    message = "You failed!";
  }
// function App() {
//   let isTeacher: boolean = false;
//   const name: string = "Shrut";
//   let age: number = 16;

  let isActive: boolean = true;
//   let teacher = new Person();

  while (isActive) {
    message = "Loop";
    isActive = false;
  }
  
  let loops : number = 0;
  for (; loops < 3;) {
    loops = loops + 1;
  }
//   teacher.name = name;
//   teacher.age = age;
//   teacher.isTeacher = isTeacher;

  //Loop #1 - start --> Loops = 0, 0 < 3 = true, end --> loops = 1
  //Loop #2 - start --> Loops = 1, 1 < 3 = true, end --> loops = 2
  //Loop #3 - start --> Loops = 2, 2 < 3 = true, end --> loops = 3
  //Loop #4 - start --> Loops = 3, 3 < 3 = false, end --> loops = 3

  let product: number = Multiply(8, 7);

return (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px",
      boxSizing: "border-box",
      background:
        "radial-gradient(circle at top left, #4338ca, transparent 45%), linear-gradient(135deg, #0f172a, #111827, #1e1b4b)",
      fontFamily: "Inter, sans-serif",
    }}
  >
    <div
      style={{
        width: "100%",
        maxWidth: "432px",
        boxSizing: "border-box",
        padding: "36px",
        borderRadius: "28px",
        background: "rgba(255, 255, 255, 0.07)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(255, 255, 255, 0.16)",
        boxShadow:
          "0 24px 80px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.12)",
        color: "#ffffff",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div>
          <label
            htmlFor="name"
            style={{
              display: "block",
              fontSize: "13px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.85)",
              marginBottom: "10px",
            }}
          >
            Your name
          </label>

          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            required
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "15px 16px",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(15,23,42,0.45)",
              color: "#ffffff",
              fontSize: "14px",
              outline: "none",
              transition: "border-color 0.2s ease",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "15px",
            marginTop: "4px",
            border: "none",
            borderRadius: "14px",
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            color: "#ffffff",
            fontSize: "15px",
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 8px 24px rgba(99,102,241,0.3)",
            transition: "transform 0.2s ease",
          }}
        >
          Continue
        </button>
      </form>
    </div>
  </div>
);
}

class Person {
  name!: string;
  age!: number;
  isTeacher!: boolean;
  }

function Multiply(number1: number, number2: number): number {
    return number1 * number2;
}
//   let people: Person[] = [
//     { name: teacher.name, age: teacher.age, isTeacher: teacher.isTeacher },
//     { name: "Jane", age: 28, isTeacher: false },
//     { name: "Sam", age: 42, isTeacher: false },
//   ];

function printScore(parameter: string): string {
  try {
    let score: number = Number(parameter);
//   let message: string = "Start";

    if (isNaN(score)) {
      throw new Error("not a number!");
    }
//   let score: number = 70;
//   if (score >= 60) {
//     message = "You passed!";
//   } else {
//     message = "You failed!";
//   }

    return String(score);
  } catch (error) {
    return String(error);
  }
}
//   let isActive: boolean = true;

export default App
//   while (isActive) {
//     message = "Loop";
//     isActive = false;
//   }
  
//   let loops : number = 0;
//   for (; loops < 3;) {
//     loops = loops + 1;
//   }

//   //Loop #1 - start --> Loops = 0, 0 < 3 = true, end --> loops = 1
//   //Loop #2 - start --> Loops = 1, 1 < 3 = true, end --> loops = 2
//   //Loop #3 - start --> Loops = 2, 2 < 3 = true, end --> loops = 3
//   //Loop #4 - start --> Loops = 3, 3 < 3 = false, end --> loops = 3

//   let product: number = Multiply(8, 7);
// return 
// }

// class Person {
//   name!: string;
//   age!: number;
//   isTeacher!: boolean;
//   }

// function Multiply(number1: number, number2: number): number {
//     return number1 * number2;
// }

// function printScore(parameter: string): string {
//   try {
//     let score: number = Number(parameter);

//     if (isNaN(score)) {
//       throw new Error("not a number!");
//     }

//     return String(score);
//   } catch (error) {
//     return String(error);
//   }
// }

// export default App
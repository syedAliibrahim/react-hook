const BootstrapButton = () => {
    return <button>BOOTSTRAP</button>;
  };
  
  // const Button = ({ label, featured }) => {
  //   return (
  //     <button>
  //       {label || "THEME"} {featured && "Featured"}
  //     </button>
  //   );
  // };
  
  const Button = ({ children, str, clickKar }) => {
    return (
      <button
        onClick={() => {
          const a = prompt("Enter value");
          clickKar(a);
        }}
      >
        {children} {str}
      </button>
    );
  };
  
  export { BootstrapButton, Button };
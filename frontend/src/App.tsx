import classes from "./App.module.css";
import { Map } from "./pages/Map";

export function App() {
  return (
    <div className={classes.root}>
      <Map />
    </div>
  );
}

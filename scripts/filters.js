const { Paper, Chip } = MaterialUI;

function Filters(props) {
  const { value, onChange } = props;

  const toggle = (color) => () => {
    const isColorActive = !!~value.indexOf(color);
    const newValue = isColorActive
      ? value.filter((item) => item !== color)
      : value.concat(color);

    onChange(newValue);
  };

  return (
    <Paper className="filters" elevation={2}>
      <Chip
        color={~value.indexOf("red") ? "error" : "default"}
        label="Красные"
        onClick={toggle("red")}
      />
      <Chip
        color={~value.indexOf("blue") ? "primary" : "default"}
        label="Синие"
        onClick={toggle("blue")}
      />
      <Chip
        color={~value.indexOf("green") ? "success" : "default"}
        label="Зеленые"
        onClick={toggle("green")}
      />
    </Paper>
  );
}

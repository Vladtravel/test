import { useDispatch } from "react-redux";
import actions from "../../redux/actions";
import s from "./Filter.module.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles({
  filter: {
    marginBottom: 15,
    marginRight: 5,
  },
});

const Filter = () => {
  const dispatch = useDispatch();

  const onFilter = (event) => {
    console.log(event);
    dispatch(actions.filterContactType(event.target.name));
    dispatch(actions.filterContact(event.target.value));
  };

  const classes = useStyles();

  return (
    <>
      <TextField
        className={classes.filter}
        autoComplete="off"
        type="text"
        name="name"
        onChange={onFilter}
        // onBlur={() => dispatch(actions.filterContactTypeBlur())}
        size="small"
        label="Find contact by Name"
        variant="outlined"
      />
      <TextField
        className={classes.filter}
        autoComplete="off"
        type="text"
        name="lastname"
        onChange={onFilter}
        size="small"
        label="Find contact by Lastname"
        variant="outlined"
      />
      <TextField
        className={classes.filter}
        autoComplete="off"
        type="text"
        name="age"
        onChange={onFilter}
        size="small"
        label="Find contact by Age"
        variant="outlined"
      />
      <span className={s.spanTitle}>Find contact by sex</span>
      <FormControlLabel
        control={
          <Checkbox
            onChange={(e) =>
              e.target.checked
                ? onFilter(e)
                : dispatch(actions.filterContactTypeBlur())
            }
            name="sex"
            value="m"
          />
        }
        label="male"
      />
      <FormControlLabel
        control={
          <Checkbox
            onChange={(e) =>
              e.target.checked
                ? onFilter(e)
                : dispatch(actions.filterContactTypeBlur())
            }
            name="sex"
            value="f"
          />
        }
        label="female"
      />
    </>
  );
};

export default Filter;

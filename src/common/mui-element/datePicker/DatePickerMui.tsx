import "dayjs/locale/ru";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { calculateAge } from "../../../helpers/calculateAge";

interface LinkActiveType {
 value?: any;
 onChange: (data: any) => any;
 errors: any;
 placeholder: string;
 helperText?: string;
 required?: boolean;
 minDate?: any;
 views?: any;
}

export const DatePickerMui = ({
 value,
 onChange,
 placeholder,
 required = false,
 errors,
 helperText = "",
 minDate = new Date(28898667000),
 views = ["year", "month", "day"],
}: LinkActiveType) => {
 return (
  <LocalizationProvider
   dateAdapter={AdapterDayjs}
   adapterLocale={"ru"}
  >
   <DatePicker
    views={views}
    minDate={minDate}
    maxDate={new Date()}
    label={placeholder}
    value={value}
    inputFormat={calculateAge(value)}
    onChange={onChange}
    renderInput={(params) => (
     <TextField
      required={required}
      helperText={errors && errors.message}
      error={errors}
      fullWidth
      {...params}
      sx={{
       height: "100%",

       "& .MuiFormLabel-root": {
        lineHeight: "inherit",
        color: "#1A1C18",

        "& .MuiFormLabel-asterisk": {
         color: "red",
        },
       },
       "& .Mui-focused": {
        color: "#1A1C18 !important",
       },

       "& .MuiInputBase-root": {
        height: "100%",
        borderRadius: "8px",

        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
         border: "1px solid #C6D1B8 !important",
        },
       },
       "& .MuiFormHelperText-root": {
        position: "absolute",
        bottom: "-18px",
        color: "#ff0000 !important",
       },
       "& .MuiInputBase-input": {
        height: "auto",
        padding: "0 14px ",
        fontWeight: "700  !important",
        fontSize: "16px",
        "&:focus": {
         height: "auto",
        },
       },

       "& .MuiOutlinedInput-notchedOutline": {
        border: errors
         ? "1px solid #ff0000 !important"
         : "1px solid #C6D1B8",
        "&:focus": {
         border: "1px solid #C6D1B8 !important",
        },
       },
      }}
     />
    )}
   />
  </LocalizationProvider>
 );
};

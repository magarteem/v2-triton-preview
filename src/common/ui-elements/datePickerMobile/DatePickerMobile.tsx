import React from "react";
import ModalDatePicker from "react-mobile-datepicker-ts/dist";
import DatePicker from "react-mobile-datepicker-ts/dist";
import { calculateAge } from "../../../helpers/calculateAge";
import TextFieldElementMui from "../../mui-element/textFieldElementMui/textField/TextFieldElementMui";
import "./datepicker.scss";
import "react-mobile-datepicker-ts/dist/main.css";

const monthMap = {
 "1": "Янв",
 "2": "Фев",
 "3": "Мрт",
 "4": "Апр",
 "5": "Май",
 "6": "Июнь",
 "7": "Июль",
 "8": "Авг",
 "9": "Сен",
 "10": "Ост",
 "11": "Ноя",
 "12": "Дек",
};

const dateConfig = [
 {
  type: "year",
  format: "YYYY",
  caption: "Год",
  step: 1,
 },
 {
  type: "month",
  //@ts-ignore
  format: (value: Date) => monthMap[value.getMonth() + 1],
  caption: "Мес",
  step: 1,
 },
 {
  type: "date",
  format: "DD",
  caption: "День",
  step: 1,
 },
];

console.log(dateConfig);
export interface DatePickerMobileType {
 placeholder: string;
 onChange: (num: number) => void;
}

export const DatePickerMobile = ({
 placeholder,
 onChange,
}: DatePickerMobileType) => {
 const [time, setTime] = React.useState(new Date());
 const [isOpen, setIsOpen] = React.useState(false);
 const handleToggle = (nextIsOpen: typeof isOpen) => {
  setIsOpen(nextIsOpen);
 };

 const handleSelect = (nextTime: typeof time) => {
  setTime(nextTime);
  setIsOpen(false);
 };

 return (
  <div>
   <TextFieldElementMui
    disabled={isOpen && true}
    inputValue={calculateAge(new Date(time).getTime())}
    onClick={() => handleToggle(true)}
    placeholder=""
   />

   {/*<DatePicker*/}
   <ModalDatePicker
    showFooter={true}
    style={{ position: "fixed", bottom: "50px" }}
    cancelText="Закрыть"
    confirmText="Готово"
    //@ts-ignore
    dateConfig={dateConfig}
    showCaption={true}
    value={time}
    onChange={(date: Date) =>
     onChange(new Date(date).getTime())
    }
    isOpen={isOpen}
    onSelect={handleSelect}
    onCancel={() => handleToggle(false)}
   />
  </div>
 );
};
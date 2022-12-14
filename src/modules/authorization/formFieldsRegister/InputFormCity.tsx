import { Controller } from "react-hook-form";
import { SelectElementMui } from "../../../common/mui-element/SelectElementMui";
import { cityBD } from "../service/BD";
import s from "./formFieldsRegister.module.scss";

export interface InputFormCityType {
 control: any;
 name: string;
 placeholder: string;
}

export const InputFormCity = ({
 control,
 name,
 placeholder,
}: InputFormCityType) => {
 return (
  <div className={s.selectField}>
   <Controller
    name={name}
    control={control}
    rules={{
     required: "Обязательное поле",
    }}
    render={({
     field: { onChange, value, ref, ...field },
     formState: { errors },
    }) => (
     <SelectElementMui
      ItemRef={ref}
      value={value}
      placeholder={placeholder}
      required={true}
      options={cityBD}
      //onChange={onChange}
      //@ts-ignore
      onChange={(e) =>
       onChange({
        value: e.target.value,
        label: e.target.value,
       })
      }
      errors={errors.city}
      {...field}
     />
    )}
   />
  </div>
 );
};

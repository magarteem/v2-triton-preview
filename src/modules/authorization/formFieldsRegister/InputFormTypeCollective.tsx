import { Controller } from "react-hook-form";
import { SelectElementMui } from "../../../common/mui-element/SelectElementMui";
import { OptionSelectType } from "../../authorization/types/authType";
import s from "./formFieldsRegister.module.scss";

export interface InputFormTypeCollectiveType {
 control: any;
 placeholder: string;
 name: string;
 options: OptionSelectType[];
}

export const InputFormTypeCollective = ({
 control,
 placeholder,
 name,
 options,
}: InputFormTypeCollectiveType) => {
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
      value={value || ""}
      placeholder={placeholder}
      options={options}
      required={true}
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

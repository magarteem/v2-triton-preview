import { Controller } from "react-hook-form";
import { SelectElementMui } from "../../../common/mui-element/SelectElementMui";
import { cityBD } from "../../authorization/service/BD";
import s from "../style/filterFieldsFormAds.module.scss";

export interface InputFormCityType {
 control: any;
 name: string;
}

export const InputFormCity = ({
 control,
 name,
}: InputFormCityType) => {
 return (
  <div className={s.selectField}>
   <Controller
    name={name}
    control={control}
    render={({
     field: { onChange, value, ref, ...field },
     formState: { errors },
    }) => (
     <SelectElementMui
      ItemRef={ref}
      value={value || ""}
      placeholder="Город"
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

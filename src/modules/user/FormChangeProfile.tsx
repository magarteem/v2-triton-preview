import { Controller, useForm } from "react-hook-form";
import { BtnInFormSaveCancel } from "../../common/components/navigateButton/BtnInFormSaveCancel";
import { InputLabel } from "../../common/ui-elements/Input/InputLabel";
import { Input } from "../../common/ui-elements/Input/Input";
import { ReactSelectElement } from "../../common/ui-elements/react-select/ReactSelectElement";
import { ReactDatePickerElement } from "../../common/ui-elements/reactDatePicker/ReactDatePicker";
import { TextAreaElement } from "../../common/ui-elements/textarea/TextAreaElement";
import { useAppDispatch } from "../../core/redux/app/hooks";
import {
 genderBD,
 genreBD,
 groupeOptions,
 profilePrivacySettings,
 sityBD,
 skillBD,
} from "../authorization/service/BD";
import { ISignUpFormValues } from "../authorization/types/authType";
import { changeProfileThunk } from "./changeProfileThunk";
import s from "./style/formChangeProfile.module.scss";
import {
 ChangeProfileFormValues,
 InitialStateUserType,
} from "./types/userSliceType";
import { CustomReactSelectGenre } from "../../common/components/signIn/customReactSelectGenre/CustomReactSelectGenre";
import { CustomReactSelectTools } from "../../common/components/signIn/customReactSelectTools/CustomReactSelectTools";
import TextFieldElementMui from "../../common/mui-element/TextFieldElementMui";
import { SelectElementMui } from "../../common/mui-element/SelectElementMui";
import { CustomReactSelectToolsMui } from "../../common/mui-element/CustomReactSelectToolsMui";
import { SelectCheckedElementMui } from "../../common/mui-element/SelectCheckedElementMui";
import TextFieldTextareaElementMui from "../../common/mui-element/TextFieldTextareaElementMui";
import { useNavigate } from "react-router-dom";

interface FormChangeProfileType {
 userDataProfile: InitialStateUserType;
}
export const FormChangeProfile = ({
 userDataProfile,
}: FormChangeProfileType) => {
 const dispatch = useAppDispatch();
 const navigate = useNavigate();

 const {
  name,
  sity,
  age,
  gender,
  skills,
  private_settings,
 } = userDataProfile;

 const {
  control,
  watch,
  handleSubmit,
  formState: { errors },
 } = useForm<ISignUpFormValues>({
  mode: "all",
  defaultValues: {
   name_field: name,
   sity,
   gender,
   age: age && new Date(age).getTime(),
   tool: skills.tool,
   genre: skills.genre,
   work_experience: skills.workExperience,
   master: skills.master,
   education: skills.education,
   private_settings,
  },
 });

 const onSubmit = (data: ChangeProfileFormValues) => {
  console.log("data = ", data);
  dispatch(changeProfileThunk(data));
  navigate(-1);
 };

 // console.log("value hook = ", value);
 // console.log("sity = ", sity);
 return (
  <form
   noValidate
   onSubmit={handleSubmit(onSubmit)}
   className={s.formChangeProfile}
  >
   <div className={s.styleInput}>
    <Controller
     name="name_field"
     control={control}
     rules={{
      required: "Обязательное поле",
      minLength: {
       value: 3,
       message: "Не менее 3х символов",
      },
     }}
     render={({
      field: { onChange, value, ref, ...field },
     }) => (
      <div className={s.wrapperBlockInput}>
       <TextFieldElementMui
        ItemRef={ref}
        placeholder="Имя"
        required={true}
        onChange={onChange}
        helperText="Обязательное поле"
        inputValue={value}
        errors={
         errors.name_field && errors.name_field.message
        }
        {...field}
       />
      </div>
     )}
    />
   </div>

   {/*  */}
   {/*<div className={s.styleInput}>
    <InputLabel titleSelect="Имя" required />
    <Controller
     name="name_field"
     control={control}
     rules={{
      required: "Обязательное поле",
      minLength: {
       value: 3,
       message: "Не менее 3х символов",
      },
     }}
     render={({
      field: { onChange, value, ref, ...field },
     }) => (
      <div className={s.wrapperBlockInput}>
       <Input
        inputValue={value}
        placeholder="Александр Ковальчук "
        onChange={onChange}
        errors={
         errors.name_field && errors.name_field.message
        }
        {...field}
       />
      </div>
     )}
    />
   </div>*/}

   <div className={s.selectField}>
    <Controller
     name="sity"
     control={control}
     rules={{
      required: "Обязательное поле",
     }}
     render={({
      field: { onChange, value, ref, ...field },
      fieldState: { error },
     }) => {
      return (
       <div className={s.wrapperBlockInput}>
        <SelectElementMui
         ItemRef={ref}
         value={value}
         placeholder="Город"
         options={sityBD}
         //@ts-ignore
         onChange={(e) =>
          onChange({
           value: e.target.value,
           label: e.target.value,
          })
         }
         errors={errors.sity}
         {...field}
        />
       </div>
      );
     }}
    />
   </div>

   {/*<div className={s.selectField}>
    <InputLabel titleSelect="Город" required />
    <Controller
     name="sity"
     control={control}
     rules={{
      required: "Обязательное поле",
     }}
     render={({
      field: { onChange, value, ref, ...field },
      fieldState: { error },
     }) => (
      <ReactSelectElement
       value={value}
       ItemRef={ref}
       placeholder="Выбрать"
       options={sityBD}
       onChange={onChange}
       errors={errors.sity}
       {...field}
      />
     )}
    />
   </div>*/}

   {/*console.log("value hook = ", value);*/}
   <div className={s.selectField}>
    <Controller
     name="gender"
     control={control}
     rules={{
      required: "Обязательное поле",
     }}
     render={({
      field: { onChange, value, ref, ...field },
     }) => (
      <div className={s.wrapperBlockInput}>
       <SelectElementMui
        ItemRef={ref}
        value={value}
        placeholder="Пол"
        options={genderBD}
        //@ts-ignore
        onChange={(e) =>
         onChange({
          value: e.target.value,
          label: e.target.value,
         })
        }
        errors={errors.gender}
        {...field}
       />
      </div>
     )}
    />
   </div>

   {/*<div className={s.selectField}>
    <InputLabel titleSelect="Пол" required />
    <Controller
     name="gender"
     control={control}
     rules={{
      required: "Обязательное поле",
     }}
     render={({
      field: { onChange, value, ref, ...field },
     }) => (
      <ReactSelectElement
       ItemRef={ref}
       value={value}
       placeholder="Выбрать"
       options={genderBD}
       onChange={onChange}
       errors={errors.gender}
       {...field}
      />
     )}
    />
   </div>*/}

   <div className={s.selectField}>
    {/*<InputLabel titleSelect="Возраст" required />*/}
    <Controller
     name="age"
     control={control}
     rules={{
      required: "Обязательное поле",
     }}
     render={({
      field: { onChange, value, ref, ...field },
     }) => (
      <ReactDatePickerElement
       ItemRef={ref}
       placeholder="Дата рождения"
       value={value}
       onChange={(date) =>
        onChange(new Date(date).getTime())
       }
       errors={errors.age}
       {...field}
      />
     )}
    />
   </div>

   {/*<div className={s.selectField}>
    <Controller
     name="tool"
     control={control}
     rules={{
      required: "Обязательное поле",
     }}
     render={({
      field: { onChange, ref, value, ...field },
     }) => (
      <CustomReactSelectToolsMui
       ItemRef={ref}
       value={value}
       placeholder="Инструмент (род деятельности)"
       options={groupeOptions}
       onChange={onChange}
       errors={errors.tool}
       {...field}
      />
     )}
    />
   </div>*/}

   {/*<div className={s.selectField}>
    <InputLabel
     titleSelect="Инструмент (род деятельности)"
     required
    />
    <Controller
     name="tool"
     control={control}
     rules={{
      required: "Обязательное поле",
     }}
     render={({
      field: { onChange, ref, value, ...field },
     }) => (
      <CustomReactSelectTools
       ItemRef={ref}
       value={value}
       placeholder="Выбрать"
       options={groupeOptions}
       onChange={onChange}
       errors={errors.tool}
       {...field}
      />
     )}
    />
   </div>*/}

   <div className={s.selectField}>
    {/*<InputLabel titleSelect="Жанр" required />*/}
    <Controller
     name="genre"
     control={control}
     rules={{
      required: "Обязательное поле",
     }}
     render={({
      field: { onChange, value, ref, ...field },
     }) => (
      <SelectCheckedElementMui
       ItemRef={ref}
       value={value}
       placeholder="Жанр"
       options={genreBD}
       onChange={onChange}
       //@ts-ignore
       //onChange={(e) =>
       //  onChange({
       //   value: e.target.value,
       //   label: e.target.value,
       //  })
       // }
       errors={errors.genre}
       {...field}
      />
     )}
    />
   </div>

   {/*<div className={s.selectField}>
    <InputLabel titleSelect="Жанр" required />
    <Controller
     name="genre"
     control={control}
     rules={{
      required: "Обязательное поле",
     }}
     render={({
      field: { onChange, value, ref, ...field },
     }) => (
      <CustomReactSelectGenre
       ItemRef={ref}
       value={value}
       placeholder="Выбрать"
       options={genreBD}
       onChange={onChange}
       errors={errors.genre}
       {...field}
      />
     )}
    />
   </div>*/}

   <div className={s.styleInput}>
    <Controller
     name="work_experience"
     control={control}
     render={({
      field: { onChange, value, ref, ...field },
     }) => (
      <div className={s.sizeInput}>
       <TextFieldTextareaElementMui
        ItemRef={ref}
        inputValue={value}
        placeholder="Опыт работы/выступлений"
        onChange={onChange}
        multiline={true}
        helperText="Опишите ваш опыт"
        {...field}
       />
       {/*<span className={s.notes}>Опишите ваш опыт</span>*/}
      </div>
     )}
    />
   </div>

   {/*<div className={s.styleInput}>
    <InputLabel titleSelect="Опыт работы/выступлений" />
    <Controller
     name="work_experience"
     control={control}
     render={({
      field: { onChange, value, ref, ...field },
     }) => (
      <div className={s.textarea}>
       <TextAreaElement
        ItemRef={ref}
        value={value}
        onChange={onChange}
        placeholderValue="Указать"
        {...field}
       />
       <span className={s.notes}>Опишите ваш опыт</span>
      </div>
     )}
    />
   </div>*/}

   <div className={s.selectField}>
    <Controller
     name="master"
     control={control}
     render={({
      field: { onChange, value, ref, ...field },
     }) => (
      <div className={s.wrapperBlockInput}>
       <SelectElementMui
        ItemRef={ref}
        value={value}
        placeholder="Мастерство"
        options={skillBD}
        //@ts-ignore
        onChange={(e) =>
         onChange({
          value: e.target.value,
          label: e.target.value,
         })
        }
        {...field}
       />
      </div>
     )}
    />
   </div>

   {/*<div className={s.selectField}>
    <InputLabel titleSelect="Мастерство" />
    <Controller
     name="master"
     control={control}
     render={({
      field: { onChange, value, ref, ...field },
     }) => (
      <ReactSelectElement
       ItemRef={ref}
       value={value}
       placeholder="Выбрать"
       options={skillBD}
       onChange={onChange}
       {...field}
      />
     )}
    />
   </div>*/}

   <div className={s.styleInput}>
    <Controller
     name="education"
     control={control}
     render={({
      field: { onChange, value, ref, ...field },
     }) => (
      <div className={s.sizeInput}>
       <TextFieldTextareaElementMui
        ItemRef={ref}
        placeholder="Образование"
        multiline={true}
        onChange={onChange}
        inputValue={value}
        {...field}
       />
      </div>
     )}
    />
   </div>

   {/*<div className={s.styleInput}>
    <InputLabel titleSelect="Образование" />
    <Controller
     name="education"
     control={control}
     render={({
      field: { onChange, value, ref, ...field },
     }) => (
      <div className={s.textarea}>
       <TextAreaElement
        ItemRef={ref}
        value={value}
        onChange={onChange}
        placeholderValue="Указать"
        {...field}
       />
      </div>
     )}
    />
   </div>*/}

   <div className={s.selectField}>
    <Controller
     name="private_settings"
     control={control}
     rules={{
      required: "Обязательное поле",
     }}
     render={({
      field: { onChange, value, ref, ...field },
     }) => (
      <div className={s.wrapperBlockInput}>
       <SelectElementMui
        ItemRef={ref}
        value={value}
        placeholder="Настройки приватности анкеты"
        options={profilePrivacySettings}
        errors={errors.private_settings}
        //@ts-ignore
        onChange={(e) =>
         onChange({
          value: e.target.value,
          label: e.target.value,
         })
        }
        {...field}
       />
      </div>
     )}
    />
   </div>

   {/*<div className={s.selectField}>
    <InputLabel titleSelect="Настройки приватности анкеты" />
    <Controller
     name="private_settings"
     control={control}
     rules={{
      required: "Обязательное поле",
     }}
     render={({ field: { onChange, ref, ...field } }) => (
      <ReactSelectElement
       ItemRef={ref}
       placeholder="Выбрать"
       options={profilePrivacySettings}
       errors={errors.private_settings}
       onChange={onChange}
       {...field}
      />
     )}
    />
   </div>*/}

   <div className={s.btnFormWrapper}>
    <BtnInFormSaveCancel
     textCancelButton="Отмена"
     textButton="Сохранить"
    />
   </div>
  </form>
 );
};

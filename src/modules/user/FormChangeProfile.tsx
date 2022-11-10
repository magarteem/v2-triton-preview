import { Omit } from "@reduxjs/toolkit/dist/tsHelpers";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { BtnInFormSaveCancel } from "../../common/components/navigateButton/BtnInFormSaveCancel";
import { CustomSelectCheckboxGenre } from "../../common/components/signIn/CustomSelectCheckbox/CustomSelectCheckboxGenre";
import { CustomSelectCheckboxTools } from "../../common/components/signIn/CustomSelectCheckbox/CustomSelectCheckboxTools";
import { Input } from "../../common/ui-elements/Input/Input";
import { InputLabel } from "../../common/ui-elements/Input/InputLabel";
import { ReactSelectElement } from "../../common/ui-elements/react-select/ReactSelectElement";
import { TextAreaElement } from "../../common/ui-elements/textarea/TextAreaElement";
import {
 ageNumber,
 genderBD,
 genreBD,
 groupeOptions,
 profilePrivacySettings,
 sityBD,
 skillBD,
} from "../authorization/service/BD";
import { ISignUpFormValues } from "../authorization/types/type";
import s from "./style/formChangeProfile.module.scss";

type ChangeProfileFormValues = Omit<
 ISignUpFormValues,
 "email" | "password" | "img_upload" | "type_account"
>;

interface FormChangeProfileType {
 userDataProfile: any;
}
export const FormChangeProfile = ({
 userDataProfile,
}: FormChangeProfileType) => {
 const navigate = useNavigate();
 // const {
 //  name_field,
 //  sity,
 //  gender,
 //  age,
 //  tool,
 //  genre,
 //  work_experience,
 //  master,
 //  education,
 //  private_settings,
 // } = userDataProfile;

 const {
  control,
  handleSubmit,
  formState: { errors },
 } = useForm<ISignUpFormValues>({
  mode: "all",
  defaultValues: {
   name_field: "",
   sity: "",
   gender: "",
   age: "",
   tool: [],
   genre: "",
   work_experience: "",
   master: "",
   education: "",
   private_settings: "",
  },
 });

 const onSubmit = (data: ChangeProfileFormValues) =>
  navigate(-1);

 return (
  <form
   onSubmit={handleSubmit(onSubmit)}
   className={s.forms}
  >
   {/*  */}
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
     render={({ field: { onChange, ...field } }) => (
      <>
       <InputLabel titleSelect="Имя" required />
       <Input
        placeholder="Александр Ковальчук "
        onChange={onChange}
        errors={
         errors.name_field && errors.name_field.message
        }
        {...field}
       />
      </>
     )}
    />
   </div>

   <div className={s.selectField}>
    <InputLabel titleSelect="Город" required />
    <Controller
     name="sity"
     control={control}
     rules={{
      required: "Обязательное поле",
     }}
     render={({
      field: { onChange, ...field },
      fieldState: { error },
     }) => (
      <ReactSelectElement
       placeholder="Выбрать"
       options={sityBD}
       onChange={onChange}
       errors={errors.sity}
       {...field}
      />
     )}
    />
   </div>

   <div className={s.selectField}>
    <InputLabel titleSelect="Пол" required />
    <Controller
     name="gender"
     control={control}
     rules={{
      required: "Обязательное поле",
     }}
     render={({ field: { onChange, ...field } }) => (
      <ReactSelectElement
       placeholder="Выбрать"
       options={genderBD}
       onChange={onChange}
       errors={errors.gender}
       {...field}
      />
     )}
    />
   </div>

   <div className={s.selectField}>
    <InputLabel titleSelect="Возраст" required />
    <Controller
     name="age"
     control={control}
     rules={{
      required: "Обязательное поле",
     }}
     render={({ field: { onChange, ...field } }) => (
      <ReactSelectElement
       placeholder="Выбрать"
       options={ageNumber}
       onChange={onChange}
       errors={errors.age}
       {...field}
      />
     )}
    />
   </div>

   <div className={s.selectField}>
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
     render={({ field: { onChange, ...field } }) => (
      <CustomSelectCheckboxTools
       placeholder="Выбрать"
       options={groupeOptions}
       onChange={onChange}
       errors={errors.tool}
       {...field}
      />
     )}
    />
   </div>

   <div className={s.selectField}>
    <InputLabel titleSelect="Жанр" required />
    <Controller
     name="genre"
     control={control}
     rules={{
      required: "Обязательное поле",
     }}
     render={({ field: { onChange, ...field } }) => (
      <CustomSelectCheckboxGenre
       placeholder="Выбрать"
       options={genreBD}
       onChange={onChange}
       errors={errors.genre}
       {...field}
      />
      //<ReactSelectElement
      // placeholder="Выбрать"
      // options={genreBD}
      // onChange={onChange}
      // isMulti
      // errors={errors.genre}
      // {...field}
      ///>
     )}
    />
   </div>

   <div className={s.styleInput}>
    <InputLabel titleSelect="Опыт работы/выступлений" />
    <Controller
     name="work_experience"
     control={control}
     render={({ field: { onChange, ...field } }) => (
      <div className={s.textarea}>
       <TextAreaElement
        onChange={onChange}
        placeholderValue="Указать"
        {...field}
       />
       <span className={s.notes}>Опишите ваш опыт</span>
      </div>
     )}
    />
   </div>

   <div className={s.selectField}>
    <InputLabel titleSelect="Мастерство" />
    <Controller
     name="master"
     control={control}
     render={({ field: { onChange, ...field } }) => (
      <ReactSelectElement
       placeholder="Выбрать"
       options={skillBD}
       onChange={onChange}
       {...field}
      />
     )}
    />
   </div>

   <div className={s.styleInput}>
    <InputLabel titleSelect="Образование" />
    <Controller
     name="education"
     control={control}
     render={({ field: { onChange, ...field } }) => (
      <div className={s.textarea}>
       <TextAreaElement
        onChange={onChange}
        placeholderValue="Указать"
        {...field}
       />
      </div>
     )}
    />
   </div>

   <div className={s.selectField}>
    <InputLabel titleSelect="Настройки приватности анкеты" />
    <Controller
     name="private_settings"
     control={control}
     rules={{
      required: "Обязательное поле",
     }}
     render={({ field: { onChange, ...field } }) => (
      <ReactSelectElement
       placeholder="Выбрать"
       options={profilePrivacySettings}
       errors={errors.private_settings}
       onChange={onChange}
       {...field}
      />
     )}
    />
   </div>

   <div className={s.btnFormWrapper}>
    <BtnInFormSaveCancel
     textCancelButton="Отмена"
     textButton="Cохранить"
    />
   </div>
  </form>
 );
};

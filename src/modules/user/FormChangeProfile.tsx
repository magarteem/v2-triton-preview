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
 cityBD,
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
import TextFieldElementMui from "../../common/mui-element/textFieldElementMui/textField/TextFieldElementMui";
import { SelectElementMui } from "../../common/mui-element/SelectElementMui";
import { CustomReactSelectToolsMui } from "../../common/mui-element/CustomReactSelectToolsMui";
import TextFieldTextareaElementMui from "../../common/mui-element/textFieldElementMui/textAreaInput/TextFieldTextareaElementMui";
import { useNavigate } from "react-router-dom";
import { DatePickerMui } from "../../common/mui-element/datePicker/DatePickerMui";
import { BtnInGroupeSaveCancelMui } from "../../common/components/navigateButton/BtnInGroupeSaveCancelMui";
import { SelectGenreElementMui } from "../../common/mui-element/selectGenreElementMui/SelectGenreElementMui";
import { SelectToolsElementMui } from "../../common/mui-element/selectToolsElementMui/SelectToolsElementMui";
import TextFieldPhoneElementMui from "../../common/mui-element/textFieldElementMui/phoneInput/TextFieldPhoneElementMui";
import { InputFormName } from "./formFields/InputFormName";
import { SelectFieldCity } from "./formFields/SelectFieldCity";
import { SelectFieldGender } from "./formFields/SelectFieldGender";
import { SelectFieldAge } from "./formFields/SelectFieldAge";
import { SelectFieldTools } from "./formFields/SelectFieldTools";
import { SelectFieldGenre } from "./formFields/SelectFieldGenre";
import { SelectFieldMaster } from "./formFields/SelectFieldMaster";
import { InputFormWorkExperience } from "./formFields/InputFormWorkExperience";
import { InputFormEducation } from "./formFields/InputFormEducation";
import { InputFormPrivateSettings } from "./formFields/InputFormPrivateSettings";
import { InputFormInspiration } from "./formFields/InputFormInspiration";
import { InputFormPhone } from "./formFields/InputFormPhone";
import { InputFormEmail } from "./formFields/InputFormEmail";
import { InputFormWebSite } from "./formFields/InputFormWebSite";
import { InputRegFormFieldAge } from "./formFields/InputRegFormFieldAge";

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
  city,
  age,
  gender,
  skills,
  private_settings,
  phone,
  email,
  webSite,
 } = userDataProfile;

 const {
  control,
  handleSubmit,
  watch,
  formState: { errors },
 } = useForm<ISignUpFormValues>({
  mode: "all",
  defaultValues: {
   name_field: name,
   city,
   gender,
   age: age && new Date(age).getTime(),
   tool: skills.tool,
   genre: skills.genre,
   work_experience: skills.workExperience,
   master: skills.master,
   education: skills.education,
   inspiration: skills.inspiration,
   private_settings,
   phone,
   email,
   web_site: webSite,
  },
 });

 const onSubmit = (data: ChangeProfileFormValues) => {
  console.log("data = ", data);
  dispatch(changeProfileThunk(data));
  navigate(-1);
 };

 return (
  <form
   noValidate
   onSubmit={handleSubmit(onSubmit)}
   className={s.formChangeProfile}
  >
   <InputFormName control={control} />
   <SelectFieldCity control={control} />
   <SelectFieldGender control={control} />
   {/*<SelectFieldAge control={control} />*/}
   <InputRegFormFieldAge control={control} name="age" />
   <SelectFieldTools control={control} />
   <SelectFieldGenre control={control} />
   <SelectFieldMaster control={control} />
   <InputFormWorkExperience control={control} />
   <InputFormEducation control={control} />
   <InputFormPrivateSettings control={control} />
   <InputFormInspiration control={control} />
   <InputFormPhone control={control} />
   <InputFormEmail control={control} />
   <InputFormWebSite control={control} />

   <div className={s.btnFormWrapper}>
    <BtnInGroupeSaveCancelMui
     textCancelButton="????????????"
     textButton="??????????????????"
    />
   </div>
  </form>
 );
};

//===============
//{/*<div className={s.styleInput}>
//    <InputLabel titleSelect="??????" required />
//    <Controller
//     name="name_field"
//     control={control}
//     rules={{
//      required: "???????????????????????? ????????",
//      minLength: {
//       value: 3,
//       message: "???? ?????????? 3?? ????????????????",
//      },
//     }}
//     render={({
//      field: { onChange, value, ref, ...field },
//     }) => (
//      <div className={s.wrapperBlockInput}>
//       <Input
//        inputValue={value}
//        placeholder="?????????????????? ?????????????????? "
//        onChange={onChange}
//        errors={
//         errors.name_field && errors.name_field.message
//        }
//        {...field}
//       />
//      </div>
//     )}
//    />
//   </div>*/}

// <div className={s.selectField}>
//    <InputLabel titleSelect="??????????" required />
//    <Controller
//     name="city"
//     control={control}
//     rules={{
//      required: "???????????????????????? ????????",
//     }}
//     render={({
//      field: { onChange, value, ref, ...field },
//      fieldState: { error },
//     }) => (
//      <ReactSelectElement
//       value={value}
//       ItemRef={ref}
//       placeholder="??????????????"
//       options={cityBD}
//       onChange={onChange}
//       errors={errors.city}
//       {...field}
//      />
//     )}
//    />
//   </div>

//{/*<div className={s.selectField}>
//    <InputLabel titleSelect="??????" required />
//    <Controller
//     name="gender"
//     control={control}
//     rules={{
//      required: "???????????????????????? ????????",
//     }}
//     render={({
//      field: { onChange, value, ref, ...field },
//     }) => (
//      <ReactSelectElement
//       ItemRef={ref}
//       value={value}
//       placeholder="??????????????"
//       options={genderBD}
//       onChange={onChange}
//       errors={errors.gender}
//       {...field}
//      />
//     )}
//    />
//   </div>*/}

//   {/*<div className={s.selectField}>
//    <InputLabel titleSelect="??????????????" required />
//    <Controller
//     name="age"
//     control={control}
//     rules={{
//      required: "???????????????????????? ????????",
//     }}
//     render={({
//      field: { onChange, value, ref, ...field },
//     }) => (
//      <ReactDatePickerElement
//       ItemRef={ref}
//       placeholder="???????? ????????????????"
//       value={value}
//       onChange={(date) =>
//        onChange(new Date(date).getTime())
//       }
//       errors={errors.age}
//       {...field}
//      />
//     )}
//    />
//   </div>*/}

//   {/*<div className={s.selectField}>
//    <Controller
//     name="tool"
//     control={control}
//     rules={{
//      required: "???????????????????????? ????????",
//     }}
//     render={({
//      field: { onChange, ref, value, ...field },
//     }) => (
//      <CustomReactSelectToolsMui
//       ItemRef={ref}
//       value={value}
//       placeholder="???????????????????? (?????? ????????????????????????)"
//       options={groupeOptions}
//       onChange={onChange}
//        required={true}
//       errors={errors.tool}
//       {...field}
//      />
//     )}
//    />
//   </div>*/}

//   {/*<div className={s.selectField}>
//    <InputLabel titleSelect="????????" required />
//    <Controller
//     name="genre"
//     control={control}
//     rules={{
//      required: "???????????????????????? ????????",
//     }}
//     render={({
//      field: { onChange, value, ref, ...field },
//     }) => (
//      <CustomReactSelectGenre
//       ItemRef={ref}
//       value={value}
//       placeholder="??????????????"
//       options={genreBD}
//       onChange={onChange}
//       errors={errors.genre}
//       {...field}
//      />
//     )}
//    />
//   </div>*/}

//    {/*<div className={s.selectField}>
//    <InputLabel titleSelect="????????????????????" />
//    <Controller
//     name="master"
//     control={control}
//     render={({
//      field: { onChange, value, ref, ...field },
//     }) => (
//      <ReactSelectElement
//       ItemRef={ref}
//       value={value}
//       placeholder="??????????????"
//       options={skillBD}
//       onChange={onChange}
//       {...field}
//      />
//     )}
//    />
//   </div>*/}

//      {/*<div className={s.styleInput}>
//    <InputLabel titleSelect="???????? ????????????/??????????????????????" />
//    <Controller
//     name="work_experience"
//     control={control}
//     render={({
//      field: { onChange, value, ref, ...field },
//     }) => (
//      <div className={s.textarea}>
//       <TextAreaElement
//        ItemRef={ref}
//        value={value}
//        onChange={onChange}
//        placeholderValue="??????????????"
//        {...field}
//       />
//       <span className={s.notes}>?????????????? ?????? ????????</span>
//      </div>
//     )}
//    />
//   </div>*/}

//      {/*<div className={s.styleInput}>
//    <InputLabel titleSelect="??????????????????????" />
//    <Controller
//     name="education"
//     control={control}
//     render={({
//      field: { onChange, value, ref, ...field },
//     }) => (
//      <div className={s.textarea}>
//       <TextAreaElement
//        ItemRef={ref}
//        value={value}
//        onChange={onChange}
//        placeholderValue="??????????????"
//        {...field}
//       />
//      </div>
//     )}
//    />
//   </div>*/}

//      {/*<div className={s.selectField}>
//    <InputLabel titleSelect="?????????????????? ?????????????????????? ????????????" />
//    <Controller
//     name="private_settings"
//     control={control}
//     rules={{
//      required: "???????????????????????? ????????",
//     }}
//     render={({ field: { onChange, ref, ...field } }) => (
//      <ReactSelectElement
//       ItemRef={ref}
//       placeholder="??????????????"
//       options={profilePrivacySettings}
//       errors={errors.private_settings}
//       onChange={onChange}
//       {...field}
//      />
//     )}
//    />
//   </div>*/}

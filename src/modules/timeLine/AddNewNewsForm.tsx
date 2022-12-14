import { Controller, useForm } from "react-hook-form";
import { TimeLinePostType } from "./types/timlineSliceType";
import { SelectToolsElementMui } from "../../common/mui-element/selectToolsElementMui/SelectToolsElementMui";
import {
 cityBD,
 genreBD,
 groupeOptions,
} from "../authorization/service/BD";
import { SelectGenreElementMui } from "../../common/mui-element/selectGenreElementMui/SelectGenreElementMui";
import { TextField } from "@mui/material";
import { optionСategoryBD } from "./service/optionСategoryBD";
import s from "./style/addNewNewsForm.module.scss";
import cn from "classnames";
import {
 useAppDispatch,
 useAppSelector,
} from "../../core/redux/app/hooks";
import { useNavigate } from "react-router-dom";
import { setNewNewsTimeLineThunk } from "./setNewNewsTimeLineThunk";
import cardsItem_1 from "../../assets/images/cardsItem_1.webp";
import { ReactComponent as AddImageIcons } from "../../assets/icons/addImageIcons.svg";
import clearIcon from "../../assets/icons/clearIcon.svg";
import { SelectTypeNews } from "./formFields/SelectTypeNews";
import { ButtonSubmitMui } from "../../common/mui-element/ButtonSubmitMui";
import { CustomButtomAddImg } from "../../common/components/timeLine/customButtomAddImg/CustomButtomAddImg";

export const AddNewNewsForm = () => {
 const myProfile = useAppSelector(
  (state) => state.userSliceReducer.profileData
 );
 const dispatch = useAppDispatch();
 const navigate = useNavigate();

 const {
  watch,
  control,
  register,
  handleSubmit,
  setValue,
  formState: { errors, isValid },
 } = useForm<TimeLinePostType>({
  mode: "onBlur",
  defaultValues: {
   genre: [],
   tools: [],
   photo: [],
   text: "",
   typeCategory: null,
   city: {},
  },
 });

 const onSubmit = (data: TimeLinePostType) => {
  console.log("CreateNewNewsForm data = ", data);
  console.log(myProfile);

  myProfile &&
   dispatch(
    setNewNewsTimeLineThunk({
     date: new Date().getTime(),
     id: new Date().getTime(),
     timeLinePost: {
      ...data,
      photo: [cardsItem_1],
     },
     author: {
      avatar: myProfile.avatar,
      city: myProfile.city,
      id_user: myProfile.id_user,
      name: myProfile.name,
     },
    })
   );
  navigate(-1);
 };

 const clearPhoto = () => {
  setValue("photo", [""]);
 };

 return (
  <form
   noValidate
   onSubmit={handleSubmit(onSubmit)}
   className={s.formWrapCreateNews}
  >
   <section className={s.textFields}>
    <div className={s.styleInput}>
     <Controller
      name="text"
      control={control}
      render={({ field: { onChange, ref, ...field } }) => (
       <div className={s.sizeInput}>
        <TextField
         multiline
         sx={styleTextAreaSX}
         fullWidth
         autoComplete="off"
         placeholder="Чем вы хотите поделиться?"
         variant="outlined"
         onChange={onChange}
        />
       </div>
      )}
     />
    </div>

    {/*<div className={s.imgWrap}>
     <img src={cardsItem_1} alt={cardsItem_1} />
     <img
      onClick={clearPhoto}
      className={s.clearImgButton}
      src={clearIcon}
      alt="clear"
     />
    </div>*/}
   </section>

   <section className={s.selectParams}>
    <div className={s.selectFieldCustomHeight}>
     <Controller
      name="genre"
      control={control}
      render={({
       field: { onChange, value, ref, ...field },
      }) => (
       <SelectGenreElementMui
        ItemRef={ref}
        value={value}
        placeholder="Жанр"
        options={genreBD}
        onChange={onChange}
        errors={errors.genre}
        {...field}
       />
      )}
     />
    </div>

    <div
     className={cn(s.selectFieldCustomHeight, s.addMargin)}
    >
     <Controller
      name="tools"
      control={control}
      render={({
       field: { onChange, value, ref, ...field },
       formState: { errors },
      }) => (
       <SelectToolsElementMui
        ItemRef={ref}
        value={value}
        placeholder="Инструмент (род деятельности)"
        options={groupeOptions}
        onChange={onChange}
        errors={errors.tools}
        {...field}
       />
      )}
     />
    </div>

    <div className={s.selectBlock}>
     <div className={s.selectField}>
      <SelectTypeNews
       required={true}
       control={control}
       placeholder="Тип новости"
       options={optionСategoryBD}
       name="typeCategory"
      />
     </div>

     <div className={s.selectField}>
      <SelectTypeNews
       control={control}
       placeholder="Город"
       options={cityBD}
       name="city"
      />
     </div>
    </div>

    <div className={s.sendBlock}>
     <div className={s.btnWrapper}>
      <Controller
       name="tools"
       control={control}
       render={({
        field: { onChange, value, ref, ...field },
        formState: { errors },
       }) => (
        <CustomButtomAddImg
         startIcon={<AddImageIcons />}
         textButton="Добавить"
         isValidInButton={!Array.isArray(watch("photo"))}
         register={register}
        />
       )}
      />
     </div>
     <div className={s.btnWrapper}>
      <ButtonSubmitMui
       textButton="Создать новость"
       isValidInButton={!isValid}
      />
     </div>
    </div>
   </section>
  </form>
 );
};

export const styleTextAreaSX = {
 width: "100% !important",
 fontSize: "16px",
 fontFamily: `Mulish_Regular, sans-serif !important`,
 padding: "0",

 fieldset: {
  display: "none",
 },

 "& .MuiInputBase-root": {
  height: "auto",
  borderRadius: "8px",
  padding: "0 14px",
  color: "#43483E",
  fontFamily: `Mulish_Regular, sans-serif !important`,

  "&:focus": {
   height: "auto",
  },

  "& .MuiInputBase-input": {
   "&::-webkit-input-placeholder": {
    fontWeight: 500,
    color: "#242424",
    opacity: 1,
   },
  },
 },
};

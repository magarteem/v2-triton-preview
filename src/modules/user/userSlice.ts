import {
 createSlice,
 PayloadAction,
} from "@reduxjs/toolkit";
import {
 ChangeProfileFormValues,
 InitialStateType,
} from "./types/userSliceType";
import { changeProfileThunk } from "./changeProfileThunk";
import { getDataProfileThunk } from "./getDataProfileThunk";

const initialState: InitialStateType = {
 profileData: null,
 error: "",
 isLoading: false,
};

//const initialState: InitialStateUserType =
//tempDataOtherUserProfile[4];

const userSlice = createSlice({
 name: "authSlice",
 initialState,
 reducers: {},

 extraReducers: (builder) => {
  builder
   .addCase(
    changeProfileThunk.pending.type,
    (state: InitialStateType) => {}
   )
   .addCase(
    changeProfileThunk.fulfilled.type,
    (
     state: InitialStateType,
     actions: PayloadAction<ChangeProfileFormValues>
    ) => {
     // return {
     //  ...state,
     //  ...actions,
     //  name: actions.payload.name_field,
     //  skills: {
     //   ...state.skills,
     //   workExperience: actions.payload.work_experience,
     //  },
     // };
     if (!state.profileData) return;

     state.profileData.name = actions.payload.name_field;
     state.profileData.age = actions.payload.age;
     state.profileData.city = actions.payload.city;
     state.profileData.phone = actions.payload.phone;
     state.profileData.email = actions.payload.email;
     state.profileData.skills.inspiration =
      actions.payload.inspiration;
     state.profileData.webSite = actions.payload.web_site;
     state.profileData.gender = actions.payload.gender;
     state.profileData.skills.tool = actions.payload.tool;
     state.profileData.skills.genre = actions.payload.genre;
     state.profileData.skills.workExperience =
      actions.payload.work_experience;
     state.profileData.skills.education =
      actions.payload.education;
     state.profileData.skills.master =
      actions.payload.master;
     state.profileData.private_settings =
      actions.payload.private_settings;
    }
   )
   .addCase(
    changeProfileThunk.rejected.type,
    (
     state: InitialStateType,
     actions: PayloadAction<string>
    ) => {
     console.log("changeProfileThunk");
    }
   )
   // getDataProfileThunk
   .addCase(
    getDataProfileThunk.pending.type,
    (state: InitialStateType) => {}
   )
   .addCase(
    getDataProfileThunk.fulfilled.type,
    (
     state: InitialStateType,
     actions: PayloadAction<any>
    ) => {
     state.profileData = actions.payload;
    }
   )
   .addCase(
    getDataProfileThunk.rejected.type,
    (
     state: InitialStateType,
     actions: PayloadAction<string>
    ) => {
     console.log("full1111");
    }
   );
 },
});

//export const { } = userSlice.actions;
export default userSlice.reducer;

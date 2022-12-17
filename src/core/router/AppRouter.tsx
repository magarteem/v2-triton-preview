import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { FirstToStepsLayout } from "../../common/layout/firstToStepsLayout/FirstToStepsLayout";
import { RouteNames } from "./RouteNames";
import { ThreeStepFormRegister } from "../../modules/authorization/ThreeStepFormRegister";
import { FirstStepFormRegister } from "../../modules/authorization/FirstStepFormRegister";
import { SecondStepFormRegister } from "../../modules/authorization/SecondStepFormRegister";
import { Home } from "../../pages/Home";
import { Login } from "../../pages/Login";
import { MainScreen } from "../../pages/MainScreen";
import { NotFound } from "../../pages/NotFound";
import { Registration } from "../../pages/Registration";
import { useAppSelector } from "../redux/app/hooks";
import { ProtectedRoute } from "./ProtectedRoutes";
import { RecoveryPassword } from "../../pages/RecoveryPassword";
import { RecoveryPasswordFirstSteps } from "../../common/components/signIn/recoveryPassword/RecoveryPasswordFirstSteps";
import { RecoveryPasswordSecondSteps } from "../../common/components/signIn/recoveryPassword/RecoveryPasswordSecondSteps";
import { WelcomeWindow } from "../../pages/WelcomeWindow";
import { OtherUserProfile } from "../../pages/OtherUserProfile";
import { ProfileInfo } from "../../pages/ProfileInfo";
import { Settings } from "../../pages/Settings";
import { User } from "../../pages/User";
import { ChangeProfile } from "../../pages/ChangeProfile";
import { NewsPagesOne } from "../../pages/NewsPagesOne";
import { NewsAll } from "../../pages/NewsAll";
import { CreateNewAds } from "../../pages/CreateNewAds";
import { Ads } from "../../pages/Ads";
import { AdsAll } from "../../pages/AdsAll";
import { AdsPageOne } from "../../pages/AdsPageOne";
import { Notification } from "../../pages/Notification";
import { IncomingNotification } from "../../common/components/notification/incomingNotification/IncomingNotification";
import { OutgoingNotification } from "../../common/components/notification/outgoingNotification/OutgoingNotification";
import { OutgoingNotificationPageOne } from "../../pages/OutgoingNotificationPageOne";
import { NotificationSwitchTabs } from "../../common/components/notification/NotificationSwitchTabs";

//const Ads = React.lazy(() =>
// import(
//  /* webpackChunkName:"Ads" */ "../../pages/Ads"
// ).then((module) => ({
//  default: module.Ads,
// }))
//);
// const User = React.lazy(() =>
//   import(/* webpackChunkName:"User" */ "../../pages/User").then((module) => ({
//     default: module.User,
//   }))
// );
// const Settings = React.lazy(() =>
//   import(
//     /* webpackChunkName:"Settings" */ "../../common/components/settings/Settings"
//   ).then((module) => ({ default: module.Settings }))
// );

//const Notification = React.lazy(() =>
// import(
//  /* webpackChunkName:"Notification" */ "../../pages/Notification"
// ).then((module) => ({ default: module.Notification }))
//);
// const Registration = React.lazy(() =>
//   import(/* webpackChunkName:"Registration" */ "../../pages/Registration").then(
//     (module) => ({ default: module.Registration })
//   )
// );

export const AppRouter = () => {
  const auth = useAppSelector((state) => state.authSliceReducer.isAuth);
  const [preloaderPages, setPreloaderPages] = useState(false);

  const setPreloaderPagesFu = () => setPreloaderPages((prev) => !prev);

  return (
    <Routes>
      <Route element={<ProtectedRoute auth={auth} />}>
        <Route path={RouteNames.HOME} element={<MainScreen />}>
          <Route element={<Home />}>
            <Route index element={<NewsAll />} />
            <Route path={`${RouteNames.NEWS}/:id_news`} element={<NewsPagesOne />} />
          </Route>

          {/*<Route
      path={`${RouteNames.NEWS}/:id_news`}
      element={<NewsPagesOne />}
     />*/}

          <Route path={RouteNames.ADS} element={<Ads />}>
            <Route index element={<AdsAll />} />
            <Route path={`${RouteNames.ADS}/:id_ads`} element={<AdsPageOne />} />
          </Route>
          <Route path={RouteNames.CREATE_ADS} element={<CreateNewAds />} />

          <Route path={RouteNames.USER} element={<User />}>
            <Route index element={<ProfileInfo />} />
            <Route path={RouteNames.CHANGE_PROFILE} element={<ChangeProfile />} />

            <Route path={RouteNames.SETTINGS} element={<Settings />} />
          </Route>

          {/* --------*/}
          <Route path={RouteNames.NOTIFICATION} element={<Notification />}>
            <Route element={<NotificationSwitchTabs />}>
              <Route index element={<OutgoingNotification />} />
              <Route path={`${RouteNames.IN_COMING_NOTIFICATION}`} element={<IncomingNotification />} />
            </Route>
            <Route path={`${RouteNames.NOTIFICATION}/:id_inComingNotification`} element={<OutgoingNotificationPageOne />} />
          </Route>

          {/*<Route
      path={RouteNames.NOTIFICATION}
      element={<Notification />}
     >
      <Route element={<NotificationSwitchTabs />}>
       <Route index element={<OutgoingNotification />} />
       <Route
        path={`${RouteNames.IN_COMING_NOTIFICATION}`}
        element={<IncomingNotification />}
       />
      </Route>

      <Route
       path={`${RouteNames.NOTIFICATION}/:id_inComingNotification`}
       element={<OutgoingNotificationPageOne />}
      />
     </Route>*/}
          {/* --------*/}

          <Route path={`${RouteNames.OTHER_PROFILE_USER}/:id_user`} element={<OtherUserProfile />} />
        </Route>
      </Route>

      {auth ? (
        <Route>
          <Route path={RouteNames.LOGIN} element={<Navigate to={RouteNames.HOME} replace />} />
          <Route path={RouteNames.REGISTER} element={<Navigate to={RouteNames.HOME} replace />} />
        </Route>
      ) : (
        <Route>
          <Route path={RouteNames.REGISTER} element={<Registration />}>
            <Route element={<FirstToStepsLayout />}>
              <Route index element={<FirstStepFormRegister />} />
              <Route path={RouteNames.REG_TYPE_ACCOUNT} element={<SecondStepFormRegister />} />
            </Route>
            <Route path={RouteNames.REG_CREATE_ACCOUNT} element={<ThreeStepFormRegister />} />
          </Route>

          <Route path={RouteNames.LOGIN} element={preloaderPages ? <Login /> : <WelcomeWindow setPreloaderPagesFu={setPreloaderPagesFu} />} />

          <Route path={RouteNames.RECOVERY_PASSWORD} element={<RecoveryPassword />}>
            <Route index element={<RecoveryPasswordFirstSteps />} />
            <Route path={RouteNames.RECOVERY_CREATE_PASSWORD} element={<RecoveryPasswordSecondSteps />} />
          </Route>
        </Route>
      )}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

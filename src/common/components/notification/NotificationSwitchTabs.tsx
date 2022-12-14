import filterIcons from "../../../assets/icons/filterIcons.svg";
import searchIcon from "../../../assets/icons/searchIcon.svg";
import { Outlet } from "react-router-dom";
import { PopUpNavigateGradient } from "../navigateButton/PopUpNavigateGradient";
import { TabsComponent } from "./tabsComponent/TabsComponent";
import { HeaderStylesWrapper } from "../../layout/headerStylesWrapper/HeaderStylesWrapper";
import { RibbonLayout } from "../../layout/ribbonLayout/RibbonLayout";
import { StylesFullScreen } from "../../layout/stylesFullScreen/StylesFullScreen";
import {
 useAppDispatch,
 useAppSelector,
} from "../../../core/redux/app/hooks";
import { getDataNotificationThunk } from "../../../modules/notification/getDataNotificationThunk";
import { OutgoingNotificationData } from "../../../modules/notification/service/notification_BD";
import { useEffect } from "react";

const filter = { img: filterIcons, action: "" };
const search = { img: searchIcon, action: "" };

export const NotificationSwitchTabs = () => {
 const dispatch = useAppDispatch();
 const adsData = useAppSelector(
  (state) => state.notificationSliceReducer
 );

 useEffect(() => {
  adsData.adsList.length === 0 &&
   dispatch(
    getDataNotificationThunk(OutgoingNotificationData)
   );
 }, []);

 if (adsData.isLoading) return <h1>Loading.....</h1>;
 if (adsData.error) return <h1>Error</h1>;

 return (
  <>
   <StylesFullScreen>
    <HeaderStylesWrapper
     textLabel="Запросы"
     anyIconsFirst={search}
     anyIconsSecond={filter}
    />
   </StylesFullScreen>
   <TabsComponent />

   <StylesFullScreen>
    <RibbonLayout>
     <Outlet context={adsData} />
    </RibbonLayout>
   </StylesFullScreen>

   <PopUpNavigateGradient />
  </>
 );
};

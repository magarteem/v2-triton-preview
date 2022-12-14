import { Avatar } from "@mui/material";
import { LongMenu } from "../../../mui-element/LongMenu";
import {
 AuthorType,
 TimeLinePostType,
} from "../../../../modules/timeLine/types/timlineSliceType";
import { Link } from "react-router-dom";
import { RouteNames } from "../../../../core/router/RouteNames";
import { dateDeclension } from "../../../../helpers/dateDeclension";
import noAvatar from "../../../../assets/icons/noAvatar.svg";
import s from "./headerCardsNews.module.scss";

interface HeaderCardsType {
 author: AuthorType | undefined;
 timeLinePost: TimeLinePostType;
 date: number;
 menu?: boolean;
 options?: any;
}

export const HeaderCardsNews = ({
 author,
 date,
 menu = true,
 timeLinePost,
 options,
}: HeaderCardsType) => {
 return (
  <div className={s.headerCardsNews}>
   <Link
    to={`${RouteNames.OTHER_PROFILE_USER}/${author?.id_user}`}
    className={s.author}
   >
    <div className={s.avatar}>
     <Avatar
      alt="Remy Sharp"
      src={author?.avatar ? author.avatar : noAvatar}
     />
    </div>
    <div className={s.infoAuthor}>
     <h2 className={s.name}>{author?.name}</h2>
     <span className={s.visit}>
      {timeLinePost.typeCategory?.label}
     </span>
    </div>
   </Link>

   {menu && (
    <div className={s.buttonAction}>
     <LongMenu options={options} />
    </div>
   )}
  </div>
 );
};

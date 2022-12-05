import cardsItem_1 from "../../../../assets/images/cardsItem_1.webp";
import cardsItem_2 from "../../../../assets/images/cardsItem_2.webp";
import s from "./infoCards.module.scss";

export const InfoCards = () => {
 return (
  <div className={s.infoCards}>
   <img src={cardsItem_1} alt={cardsItem_1} />
   <div className={s.textInfo}>
    Рок-группа «Сияние нС» после пятилетнего отпуска
    воскресла! С обновленным составом уже выступает и радует
    зрителей города. В новом составе собрались харизматичные
    музыканты в образах ангела, эльфа, друида, воинов, так
    что будет не только интересно слушать, но и приятно
    смотреть. Стиль музыки электро-лирик рок. Драйв,
    бунтарство, глубокие чувства и переживания заденут
    струны души. В концертной программе взяты лучшие песни и
    инструментальные композиции за всю эпоху группы, а так
    же порадуют слушателя и новыми произведениями. На
    концерте зрители погрузятся в сюжет, основанный на мифах
    и легендах, а также всех ожидает множество сюрпризов:
    светошоу, каскадеры и многое другое на сцене ДК
    «Современник» 3 декабря в 17.00.
   </div>
  </div>
 );
};

import { useTranslations } from "next-intl";
import ConverterSlider from "./ConverterSlider";
import Convertor from "./Convertor";
import style from "./styles/ConversionSection.module.scss";

const ConversionSection = () => {
  const t = useTranslations("HomePage");
  return (
    <section className={style.conversion} id={"convert"}>
      <div className={style.conversion__container}>
        <header className={style.header}>
          <div>{t("conversionSection.description")}</div>
          <h2 className={style.title}>{t("conversionSection.title")}</h2>
        </header>
        <div className={style.conversion__content}>
          <div>
            <ConverterSlider />
          </div>
          <div>
            <Convertor />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionSection;

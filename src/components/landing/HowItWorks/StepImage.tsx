import { useLanguage } from '@/lib/i18n/LanguageContext';
import Image from 'next/image';

const StepImage = ({ number }: { number: number }) => {
  const { language } = useLanguage();
  const isBangla = language === 'bn';
  
  // Map step numbers to actual image paths
  const getImagePath = () => {
    switch(number) {
      case 1:
        return "/images/steps/s1.jpg";
      case 2:
        return "/images/steps/s2.jpg";
      case 3:
        return "/images/steps/s3.jpg";
      case 4:
        return "/images/steps/s4.jpg";
      default:
        return "/images/steps/s1.jpg";
    }
  };
  
  return (
    <div className="w-full h-full relative">
      <Image
        src={getImagePath()}
        alt={`Step ${number}`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 400px"
      />
    </div>
  );
};

export default StepImage; 
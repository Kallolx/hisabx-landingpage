import { useLanguage } from '@/lib/i18n/LanguageContext';

const StepImage = ({ number }: { number: number }) => {
  const { language } = useLanguage();
  const isBangla = language === 'bn';
  
  return (
    <div className="w-full h-full bg-[#6FB3FF]/5 rounded-2xl flex items-center justify-center border-2 border-dashed border-[#6FB3FF]/20">
      <div className={`text-[#6FB3FF] text-2xl font-semibold ${isBangla ? 'font-hind-siliguri' : ''}`}>
        Image {number}
      </div>
    </div>
  );
};

export default StepImage; 
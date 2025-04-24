import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const cities = [
  {
    region: "Центральный регион",
    cities: ["Москва", "Санкт-Петербург", "Нижний Новгород", "Казань", "Екатеринбург"]
  },
  {
    region: "Южный регион",
    cities: ["Краснодар", "Ростов-на-Дону", "Сочи", "Волгоград", "Ставрополь"]
  },
  {
    region: "Сибирь и Дальний Восток",
    cities: ["Новосибирск", "Красноярск", "Иркутск", "Владивосток", "Хабаровск"]
  },
  {
    region: "Другие крупные города",
    cities: ["Уфа", "Самара", "Пермь", "Тюмень", "Воронеж", "Калининград", "Ярославль"]
  }
];

interface CitySelectProps {
  value: string;
  onChange: (value: string) => void;
}

const CitySelect = ({ value, onChange }: CitySelectProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="rounded-md elevation-1">
        <SelectValue placeholder="Выберите город" />
      </SelectTrigger>
      <SelectContent>
        {cities.map((region) => (
          <SelectGroup key={region.region}>
            <SelectLabel>{region.region}</SelectLabel>
            {region.cities.map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CitySelect;

type Session = {
  location: string;
  country_name: string;
  country_code: string;
  year: number;
};

type SessionLocationProps = {
  sessions: Session[];
};

const countryCodeMap: Record<string, string> = {
  AUS: "AU", // Australia
  CHN: "CN", // China
  JPN: "JP", // Japan
  BHR: "BH", // Bahrain
  SAU: "SA", // Saudi Arabia
  USA: "US", // United States
  ITA: "IT", // Italy
  MCO: "MC", // Monaco
  ESP: "ES", // Spain
  CAN: "CA", // Canada
  AUT: "AT", // Austria
  GBR: "GB", // United Kingdom
  BEL: "BE", // Belgium
  HUN: "HU", // Hungary
  NED: "NL", // Netherlands
  AZE: "AZ", // Azerbaijan
  SGP: "SG", // Singapore
  MEX: "MX", // Mexico
  BRA: "BR", // Brazil
  QAT: "QA", // Qatar
  ARE: "AE", // United Arab Emirates
  PRT: "PT", // Portugal
};

function getCountryCode(code: string) {
  return countryCodeMap[code] ?? "";
}

export default function SessionLocation({ sessions }: SessionLocationProps) {
  if (sessions.length === 0) {
    return <div>Loading...</div>;
  }

  const countryCode = getCountryCode(sessions[0].country_code);

  return (
    <div className="rounded-xl border border-zinc-800 bg-[#0E0F11] p-6">
      <h2 className="text-lg font-semibold text-white">
        {sessions[0].year} Schedule
      </h2>

      <div className="mt-4 flex items-center gap-3">
        <img
          src={`https://flagsapi.com/${countryCode}/flat/64.png`}
          alt={`${sessions[0].country_name} flag`}
          className="h-6 w-10 rounded object-cover"
        />
        <h3 className="text-3xl font-bold text-white">
          {sessions[0].country_name}
        </h3>
        hi
      </div>

      <p className="mt-2 text-sm text-zinc-500">{sessions[0].location}</p>
    </div>
  );
}

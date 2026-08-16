import { useState, useEffect } from "react";
import Select from "react-select";

const sessions = [
  { value: "2026", label: "2026 Season" },
  { value: "2025", label: "2025 Season" },
  { value: "2024", label: "2024 Season" },
  { value: "2023", label: "2023 Season" },
];

type NavbarProps = {
  selectedPage: string;
};

export default function Navbar({ selectedPage }: NavbarProps) {
  const [selectedSession, setSelectedSession] = useState(sessions[0]);

  return (
    <header className="flex h-20 items-center justify-between border-b border-[#2A2E33] bg-[#0E0F11] px-8">
      {/* Page title */}
      <div>
        <h1 className="text-lg font-semibold text-[#F4F4F5]">{selectedPage}</h1>
      </div>

      {/* Season */}
      <Select
        options={sessions}
        value={selectedSession}
        onChange={(selected) => {
          if (selected) {
            setSelectedSession(selected);
          }
        }}
        isSearchable={false}
        styles={{
          control: (base) => ({
            ...base,
            backgroundColor: "#1B1E22",
            borderColor: "#2A2E33",
            borderRadius: "8px",
            minWidth: "150px",
            boxShadow: "none",
          }),

          singleValue: (base) => ({
            ...base,
            color: "#F4F4F5",
            fontWeight: "700",
          }),

          menu: (base) => ({
            ...base,
            backgroundColor: "#1B1E22",
            border: "1px solid #2A2E33",
          }),

          option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? "#262015" : "#1B1E22",
            color: state.isFocused ? "#F97316" : "#F4F4F5",
            cursor: "pointer",
          }),

          dropdownIndicator: (base) => ({
            ...base,
            color: "#71717A",
          }),

          indicatorSeparator: () => ({
            display: "none",
          }),
        }}
      />
    </header>
  );
}

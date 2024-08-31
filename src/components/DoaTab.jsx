import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { MoonIcon, BookmarkIcon } from "@heroicons/react/24/solid";
import { DoaCard } from "./DoaCard";
import { useQuery } from "@tanstack/react-query";
import { getData } from "../utils/index";

export function DoaTab() {
  const tabData = [
    {
      label: "Daftar Doa",
      value: "daftar-doa",
      icon: MoonIcon,
    },
    {
      label: "Bookmark",
      value: "bookmark",
      icon: BookmarkIcon,
    },
  ];

  const {
    data,
    error,
    isPending: loading,
  } = useQuery({
    queryKey: ["doas"],
    queryFn: () => getData("https://open-api.my.id/api/doa"),
  });

  return (
    <Tabs value="daftar-doa" className="w-full">
      <TabsHeader className="bg-color-lemon">
        {tabData.map(({ label, value, icon }) => (
          <Tab key={value} value={value}>
            <div className="flex items-center gap-2">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="w-full p-0">
        {loading && (
          <div className="mt-4 font-amiri text-xl font-medium">
            Memuat Doa...
          </div>
        )}
        {error && (
          <div className="mt-4 font-amiri text-xl font-medium text-red-700">{`Error menampilkan data doa: ${error}`}</div>
        )}

        {tabData.map(({ value }) => (
          <TabPanel
            key={value}
            value={value}
            className="flex flex-row flex-wrap items-center justify-center gap-4 px-0 pt-10"
          >
            {value === "daftar-doa" &&
              data &&
              data.map(({ id, judul, latin, arab, terjemah }) => (
                <DoaCard
                  key={id}
                  id={id}
                  judul={judul}
                  latin={latin}
                  arab={arab}
                  terjemah={terjemah}
                />
              ))}
            {value === "bookmark" && (
              <div className="font-cardo font-bold">
                Fitur bookmark belum tersedia.
              </div>
            )}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}

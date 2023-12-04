import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import useMe from "@/libs/queries/user/useMe";

export function TabHandler({ data = [], value = "none" }) {
  const { data: userData, isLoading } = useMe();
  console.log(userData?.user?.signupBy);
  return (
    <Tabs value={value} className="z-0">
      <TabsHeader>
        {data.map((el, i) => {
          if (
            el.label === "Change password" &&
            userData?.user?.signupBy === "Google" ||
            userData?.user?.signupBy === "Facebook"
            ) {
            console.log(el.label);
            return null;
          } else {
            return (
              <Tab className="z-0" key={i} value={el.value}>
                <div className="flex items-center gap-3">
                  {<el.icon style={{ color: el.color }} />}
                  <p className="text-[12px]">{el.label}</p>
                </div>
              </Tab>
            );
          }
        })}
      </TabsHeader>
      <TabsBody className="z-0">
        {data.map((el, i) => (
          <TabPanel key={el.value} value={el.value}>
            {<el.divRender />}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}

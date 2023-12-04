import { Tooltip, Button } from "@material-tailwind/react";


export function ToolTip({children,content}) {
    return (
      <Tooltip content={content} placement="bottom">
        {children}
      </Tooltip>
    );
  }
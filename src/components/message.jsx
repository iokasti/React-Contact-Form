import React from "react";

export const Message = ({ header, text }) => (
  <div className="text-center">
    {header && <h3 className="message-header">{header}</h3>}
    <div className="message-body">
      {text || "We will reply to your message in the next 24h. Have a nice day! :-)"}
    </div>
  </div>
);

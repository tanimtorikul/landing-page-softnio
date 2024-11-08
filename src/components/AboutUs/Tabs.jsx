import { useState } from "react";
import Button from "../common/Button";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.label);

  return (
    <div>
      {/* tabs */}
      <div className="flex lg:space-x-4 border-b border-secondary">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`text-sm font-medium px-4 py-2 ${
              activeTab === tab.label
                ? "text-white bg-secondary"
                : "text-black bg-white"
            }`}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* tab title */}
      <div className="mt-6">
        {tabs.map(
          (tab) =>
            tab.label === activeTab && (
              <div key={tab.label}>
                <h2 className="font-display text-4xl lg:text-6xl">
                  {tab.contentTitle}{" "}
                </h2>

                {/* desc */}
                {tab.description && (
                  <p className="text-sm text-gray-600 mt-2">
                    {tab.description}
                  </p>
                )}
              </div>
            )
        )}
        {/* tab buttons */}
        {tabs.map(
          (tab) =>
            tab.label === activeTab && (
              <div key={`button-${tab.label}`} className="mt-4">
                <Button text={tab.buttonText} />
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Tabs;

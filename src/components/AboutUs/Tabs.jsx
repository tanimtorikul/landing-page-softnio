import { useState } from "react";
import Button from "../common/Button";
import ContactIcon from "../../assets/ContactIcon";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.label);

  return (
    <div>
      {/* tabs */}
      <div className="flex lg:space-x-4 border-b border-secondary">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`text-sm font-medium lg:font-roboto font-inter px-4 py-2 ${
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
                <h2 className="font-display text-4xl leading-[48px] lg:text-6xl lg:leading-62 xl:text-6xl">
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
              <div
                key={`button-${tab.label}`}
                className="mt-4 flex items-center gap-4 lg:gap-8"
              >
                <Button text={tab.buttonText} />

                <div className="flex items-center gap-2">
                  <ContactIcon />
                  <span className="text-sm lg:text-lg font-bold text-text-primary">
                    +88 3426 739 485
                  </span>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Tabs;

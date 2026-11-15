import { Link } from "react-router-dom";
import { campaigns } from "@/data/campaigns";

/**
 * The engine block: one loop, many campaigns.
 *
 * Reads `campaigns` so a new campaign appears here, and anywhere else this is used,
 * by editing the record alone. The static form of the animation that will replace it.
 */
const CampaignLanes = () => {
  return (
    <div className="p-6 md:p-8 bg-white rounded-2xl shadow-lg border">
      <h2 className="text-lg font-semibold mb-6">One engine, many campaigns</h2>

      <ul className="space-y-4">
        {campaigns.map((campaign) => {
          const body = (
            <>
              <div className="font-medium text-gray-900">{campaign.domain}</div>
              <div className="text-sm text-muted-foreground">{campaign.proves}</div>
              <div className="mt-1 inline-block text-xs font-medium text-eureka-blue bg-eureka-blue/10 rounded-full px-2 py-0.5">
                {campaign.validation}
              </div>
            </>
          );

          return (
            <li
              key={campaign.domain}
              className="border-l-2 border-eureka-purple/30 pl-4"
            >
              {campaign.href ? (
                <Link
                  to={campaign.href}
                  className="block hover:border-eureka-purple transition-colors"
                >
                  {body}
                </Link>
              ) : (
                body
              )}
            </li>
          );
        })}

        <li className="border-l-2 border-transparent pl-4 text-muted-foreground">
          <div className="font-medium leading-none">…</div>
          <div className="text-sm mt-1">and further campaigns in progress</div>
        </li>
      </ul>
    </div>
  );
};

export default CampaignLanes;

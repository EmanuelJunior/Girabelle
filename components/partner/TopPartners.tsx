import { TopPartner } from "@/interfaces";
import { Icon } from "@/utils";
import { Card, CardBody } from "@nextui-org/react";

interface TopPartnersProps {
  topPartners: TopPartner[];
}

export const TopPartners: React.FC<TopPartnersProps> = ({ topPartners }) => (
  <div>
    <h3 className="font-semibold mb-4">Top 3 Partners</h3>
    <div className="space-y-4">
      {topPartners.map((partner, index) => (
        <Card key={index} className="w-full">
          <CardBody className="flex flex-row items-center space-x-3 p-3">
            <img src={partner.image} alt={partner.name} className="w-12 h-12 rounded-full object-cover" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-default-700 truncate">{partner.name}</p>
              <p className="text-xs text-default-500 truncate">{partner.service}</p>
              <div className="flex items-center">
                { Icon({ name: "FaStar", library: 'fa', className: "h-3 w-3 text-yellow-400 fill-current" }) }
                <span className="text-xs ml-1">{partner.rating.toFixed(1)}</span>
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  </div>
)
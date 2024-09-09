import { Button } from "./ui/button";

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onIncrease,
  onDecrease,
}) => (
  <div className="flex items-center space-x-2">
    <Button variant="outline" size="icon" onClick={onDecrease}>
      -
    </Button>
    <span className="text-lg font-semibold">{quantity}</span>
    <Button variant="outline" size="icon" onClick={onIncrease}>
      +
    </Button>
  </div>
);

export default QuantitySelector;

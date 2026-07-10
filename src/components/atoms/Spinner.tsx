import { SyncLoader } from 'react-spinners';

interface Props {
  color: string;
  size: number;
}

function Spinner({ color, size }: Props) {
  return <SyncLoader color={color} size={size} />;
}

export default Spinner;

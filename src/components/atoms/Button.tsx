import { buttonVariants } from '../../design-system/buttonVariants';

interface Props {
  children: React.ReactNode;
  variant: 'primary' | 'secondary' | 'danger' | 'logo' | 'delete';
  onclick?: () => void;
}

function Button({ children, variant = 'primary', onclick }: Props) {
  return (
    <button onClick={onclick} className={buttonVariants[variant]}>
      {children}
    </button>
  );
}

export default Button;

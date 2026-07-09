import { buttonVariants } from '../../design-system/buttonVariants';

interface Props {
  children: React.ReactNode;
  variant: 'primary' | 'secondary' | 'danger' | 'logo' | 'delete';
  onClick?: () => void;
}

function Button({ children, variant = 'primary', onClick }: Props) {
  return (
    <button onClick={onClick} className={buttonVariants[variant]}>
      {children}
    </button>
  );
}

export default Button;

import { buttonVariants } from '../../design-system/buttonVariants';

interface Props {
  children: React.ReactNode;
  variant: 'primary' | 'secondary' | 'danger' | 'logo' | 'delete';
  onClick?: () => void;
  buttonType?: 'submit' | 'reset' | 'button' | undefined;
}

function Button({ children, variant = 'primary', onClick, buttonType }: Props) {
  return (
    <button type={buttonType} onClick={onClick} className={buttonVariants[variant]}>
      {children}
    </button>
  );
}

export default Button;

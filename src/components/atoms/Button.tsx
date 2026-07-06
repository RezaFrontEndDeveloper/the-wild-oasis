import { buttonVariants } from '../../design-system/buttonVariants';

interface Props {
  children: React.ReactNode;
  variant: 'primary' | 'secondary' | 'danger' | 'logo';
}

function Button({ children, variant = 'primary' }: Props) {
  return <button className={buttonVariants[variant]}>{children}</button>;
}

export default Button;

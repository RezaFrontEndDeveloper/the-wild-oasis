interface Props {
  children: string;
  style: string;
}

function Title({ children, style }: Props) {
  return <div className={style}>{children}</div>;
}

export default Title;

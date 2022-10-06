

type HeaderProps = {
  header: string
}

export const Header = ({ header }: HeaderProps) => {
  return (
    <div>
      <h2>{header}</h2>
    </div>
  );
};


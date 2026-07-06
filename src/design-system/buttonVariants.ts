interface Buttonvariant {
  primary: string;
  secondary: string;
  danger: string;
  logo: string;
}

export const buttonVariants: Buttonvariant = {
  primary: 'bg-blue-500 text-white px-4 py-2 rounded cursor-pointer',
  secondary: 'bg-gray-200 text-black px-4 py-2 rounded cursor-pointer',
  danger: 'bg-red-500 text-white px-4 py-2 rounded cursor-pointer',
  logo: '',
};

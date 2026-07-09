interface Buttonvariant {
  primary: string;
  secondary: string;
  danger: string;
  logo: string;
  delete: string;
}

export const buttonVariants: Buttonvariant = {
  primary: 'bg-blue-500 text-white px-4 py-2 rounded cursor-pointer w-full hover:bg-blue-800',
  secondary: 'bg-blue-800 p-2 text-white px-4 py-2 rounded cursor-pointer',
  danger: 'bg-red-500 text-white px-4 py-2 rounded cursor-pointer',
  logo: '',
  delete: 'bg-gray-100 px-4 py-2 rounded cursor-pointer border border-gray-400 ',
};

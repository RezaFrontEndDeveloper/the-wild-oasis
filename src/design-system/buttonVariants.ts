interface Buttonvariant {
  primary: string;
  secondary: string;
  danger: string;
  logo: string;
  delete: string;
}

export const buttonVariants: Buttonvariant = {
  primary: 'bg-blue-500 text-white px-4 py-2 rounded cursor-pointer w-full hover:bg-blue-800',
  secondary:
    ' p-2 px-4 py-2 rounded cursor-pointer border border-gray-200 hover:bg-blue-100 shadow-md',
  danger: 'bg-red-500 text-white px-4 py-2 rounded cursor-pointer',
  logo: '',
  delete: 'bg-gray-100 px-4 py-2 rounded cursor-pointer border border-gray-400 ',
};

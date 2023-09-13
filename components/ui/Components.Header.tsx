interface Props {
  text: string;
  href: string;
}

export function NavLink({ text, href }: Props) {
  return (
    <li>
      <a
        href={href}
        className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
      >
        {text}
      </a>
    </li>
  );
}

export function NavLinkDropdown({ text, href }: Props) {
  return (
    <li>
      <a
        href={href}
        className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
      >
        {text}
      </a>
    </li>
  );
}

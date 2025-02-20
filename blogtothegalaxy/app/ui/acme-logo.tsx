// import { GlobeAltIcon } from '@heroicons/react/24/outline';
// import { lusitana } from '@/app/ui/fonts';

// export default function AcmeLogo() {
//   return (
//     <div
//       className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
//     >
//       <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
//       <p className="text-[44px]">Acme</p>
//     </div>
//   );
// }

import Image from 'next/image'; // Assuming you're using Next.js, else you can use a regular <img> tag
import { lusitana } from '@/app/ui/fonts';

export default function CustomLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <p className="text-[44px]">Hitchhiker's Guide to Typescript</p>
    </div>
  );

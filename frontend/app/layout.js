// import { Inter } from "next/font/google";
// import "./globals.css";
// import { ClerkProvider } from "@clerk/nextjs";
// import { Toaster } from "sonner";
// import Header from "@/components/Header";
// import { neobrutalism } from "@clerk/themes";
// import Image from "next/image";
// import Link from "next/link";


// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Servd - AI Recipes Platform",
//   description: "",
//   icons: {
//     icon: '/icon.png',
//     shortcut: '/icon.png',
//     apple: '/orange-logo.png'
//   }

// };

// export default function RootLayout({ children }) {
//   return (
//     <ClerkProvider
//       appearance={{
//         baseTheme: neobrutalism,
//       }}
//     >
//       <html lang="en" suppressHydrationWarning>
//         {/* <link rel="icon" href="/logo.png" sizes="any" /> */}
//         <Link href="/">
//           <img
//             src="/logo.png"
//             alt="Logo"
//             className="w-28 cursor-pointer"
//           />
//         </Link>
//         <body className={`${inter.className}`}>
//           <Header />
//           <main className="min-h-screen">{children}</main>
//           <Toaster richColors />

//           {/* Footer */}
//           <footer className="py-8 px-4 border-t">
//             <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
//               <div className="flex items-center gap-3">

//                 <Image
//                   src="/logo.png"
//                   alt="Servd Logo"
//                   width={48}
//                   height={48}
//                   className="w-14"
//                 />

//               </div>
//               <p className="text-stone-500 text-sm">
//                 Made with 💗 by Dharmendra
//               </p>
//             </div>
//           </footer>
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }

import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import { neobrutalism } from "@clerk/themes";
import Image from "next/image";
import Link from "next/link";   // ✅ Correct import

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Servd - AI Recipes Platform",
  description: "",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/orange-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: neobrutalism,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className}`}>

          {/* Clickable Logo */}
          <Link href="/" className="inline-block">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-28 cursor-pointer"
            />
          </Link>

          <Header />

          <main className="min-h-screen">{children}</main>

          <Toaster richColors />

          {/* Footer */}
          <footer className="py-8 px-4 border-t">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Servd Logo"
                  width={48}
                  height={48}
                  className="w-14"
                />
              </div>
              <p className="text-stone-500 text-sm">
                Made with 💗 by Dharmendra
              </p>
            </div>
          </footer>

        </body>
      </html>
    </ClerkProvider>
  );
}
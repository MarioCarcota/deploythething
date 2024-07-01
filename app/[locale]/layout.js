import "/styles/global.css";

export const metadata = {
  title: "Deploythething!",
  description: "Project developed with deploythething!",
};

export default function RootLayout({ children, locale }) {
  return (
    <html lang={locale}>
      <body>
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}

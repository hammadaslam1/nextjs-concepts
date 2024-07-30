import NavButtons from './NavButtons';

export const metadata = {
  title: "Next.js",
  description: "A modern web framework for React",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main>
          <NavButtons />
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;

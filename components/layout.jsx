import { Nav } from './nav';

export const Layout = ({ children }) => (
  <>
    <div className="flex flex-col justify-center px-8 " >
      <Nav />
      {children}
    </div>
  </>
);
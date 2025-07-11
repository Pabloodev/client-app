import BottomMenu from "../ui/components/bottomMenu";

export default function HomeLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">{children}</main>
      
      <BottomMenu />
    </div>
  );
}

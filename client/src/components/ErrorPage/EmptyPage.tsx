import empty from "../../../public/assets/empty.gif";

function EmptyPage() {
  return (
    <div className="min-h-screen justify-center flex items-center ">
      <img src={empty} alt="not found" />
    </div>
  );
}

export default EmptyPage;

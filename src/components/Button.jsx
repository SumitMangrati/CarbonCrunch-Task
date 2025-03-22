import { useNavigate } from "react-router-dom";

export default function NavigateButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/2d")}
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
    >
      Go to 2D Page
    </button>
  );
}

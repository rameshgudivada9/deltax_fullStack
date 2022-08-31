import { AiOutlineSearch } from "react-icons/ai";
function Header() {
  return (
    <div class="nav">
      <div class="home">Home</div>
      <div class="search">
        <input
          type="text"
          placeholder="search"
          name="search"
          className="search-input"
        ></input>
        <div id="icon">
          <AiOutlineSearch />
        </div>
      </div>
    </div>
  );
}
export default Header;

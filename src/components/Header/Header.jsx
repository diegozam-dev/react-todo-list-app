import './header.css';

const Header = () => {
  return (
    <div className="header">
      <svg
        id="logo"
        data-name="Capa 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 192.33 206.87"
        width="45px"
        fill="#ffffff"
      >
        <defs>
          <style>.cls-1</style>
        </defs>
        <title>Gato-svg</title>
        <path
          className="cls-1"
          d="M2396,2592.37a18.09,18.09,0,0,1-11.36,14.17l-34.49,13.34-42.11,16.28a10.21,10.21,0,0,1-7.38,0l-46.15-17.85-30.45-11.77a18.12,18.12,0,0,1-11.37-14.17c-4.54-30-13.83-117.08,22.52-162.39,0,0,23.14,9.15,34.83,62.26,0,0,33.78-13.36,68.61,0,11.7-53.11,34.84-62.26,34.84-62.26C2409.87,2475.29,2400.59,2562.37,2396,2592.37Z"
          transform="translate(-2208.23 -2429.98)"
        />
      </svg>
      <h1>Todo List</h1>
    </div>
  );
};

export default Header;

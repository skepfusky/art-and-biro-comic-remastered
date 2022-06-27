export default function Footer() {
  return (
    <footer>
      <div className="wrapper-responsive">
        <span className="text-sm flex justify-center">
          &copy; 2014-{new Date().getFullYear()} Something here, site redesigned
          by @skepfuskyjs
        </span>
      </div>
    </footer>
  )
}

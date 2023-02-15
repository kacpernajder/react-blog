import "./sidebar.css"

export default function Sidebar() {
  return (
          <>
          <nav id="sidebarMenu" class="sidebar collapse d-lg-block sidebar collapse bg-white">
          <div class="position-sticky">
            <div class="list-group list-group-flush mx-3 mt-4">
              <a
                href="#"
                class="list-group-item list-group-item-action py-2 ripple"
                aria-current="true"
              >
                <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Life</span>
              </a>
              <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                <i class="fas fa-chart-area fa-fw me-3"></i><span>Music</span>
              </a>
              <a href="#" class="list-group-item list-group-item-action py-2 ripple"
                ><i class="fas fa-lock fa-fw me-3"></i><span>Style</span></a
              >
              <a href="#" class="list-group-item list-group-item-action py-2 ripple"
                ><i class="fas fa-chart-line fa-fw me-3"></i><span>Sport</span></a
              >
              <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                <i class="fas fa-chart-pie fa-fw me-3"></i><span>Technology</span>
              </a>
            </div>
          </div>
          </nav>
    </>
  )
}

import React, {useState} from 'react'

const DefaultLayout = ({ children }) => {
    const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <div>
      {/* page wrapper */}
      <div className="flex h-screen overflow-hidden">
        <Sidebar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                  <Header sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
                  <main>
                      <div className='mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10'>
                          {children}
                      </div>
                  </main>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout

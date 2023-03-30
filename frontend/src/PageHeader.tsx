import React from 'react'

const PageHeader = (props:any) => {
  return (
    <header className="masthead">
        <div className="container position-relative px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
                    <div className="site-heading">
                        <h1>{props.pageTitle}</h1>
                        <span className="subheading">{props.pageSubheader}</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default PageHeader

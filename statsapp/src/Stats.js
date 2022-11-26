function Stats(){
    return(
        <section className = 'stats-section'>
            <div className = 'stats-wrapper'>
                <h1 className='header-text'>Get <span className="heading-span">Insight</span> and help your bussines grow.</h1>
                <p className='stats-p'>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
                <div className='numbers'>
                    <div className='stat'>
                        <h3 className='stat-num'>10k+</h3>
                        <p className='stat-name'>Companies</p>
                    </div>
                    <div className='stat'>
                        <h3 className='stat-num'>314</h3>
                        <p className='stat-name'>Templates</p>
                    </div>
                    <div className='stat'>
                        <h3 className='stat-num'>12m+</h3>
                        <p className='stat-name'>Queries</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stats;
import journalImg from '/journalImg.svg'

export default function Navbar() {
    return (
        <div className="nav--container">
            <img src={journalImg}  alt="Mixture of journal books" className='logo'/>
            <h1>European Travel Journal</h1>
        </div>
    )
}
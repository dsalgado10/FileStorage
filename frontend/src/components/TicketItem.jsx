function TicketItem({ document }) {
  return (
    <div className='ticket'>
      <div><a href="myurl" download>{document.file}</a></div>
      <div>{document.product}</div>
      <div>{new Date(document.createdAt).toLocaleDateString('en-US')}</div>
    </div>
  )
}

export default TicketItem;
